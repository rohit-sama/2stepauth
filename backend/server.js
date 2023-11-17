require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const { createClient } = require("redis")
const cors = require('cors');

console.log(process.env.UPSTASH_URL);
const app = express();
app.use(bodyParser.json()); // parse JSON bodies
app.use(cors({
  origin: '*'
}));
app.options('/api/*', cors());

const client = createClient ({
      url : process.env.UPSTASH_URL
    });
    let isConnected = false;
    client.on("error", function(err) {
      throw err;
    });
    

    app.post('/api/otp/authenticateotp', async (req, res) => {
      try {
        if (!isConnected) {
          await client.connect();
          isConnected = true; 
        }
        const { apikey, email } = req.body;
    
        const key = `user:${apikey}:dev`;
        const devExists = await client.get(key);
    
        if (!devExists) {
          const errorResponse = {
            error: true,
            message: 'Invalid apikey',
          };
          return res.status(401).json(errorResponse);
        }
    
        const emailKey = `user:${email}:dev`;
        const emailExists = await client.get(emailKey);
    
        if (!emailExists) {
          const errorResponse = {
            error: true,
            message: 'Email not found',
          };
          return res.status(404).json(errorResponse);
        }
    
        // Instead of redirecting, send a JSON response with the redirect URL
        const redirectUrl = `https://2stepauth.vercel.app/authenticate/${apikey}`;
        return res.status(200).json({ redirectUrl });
      } catch (error) {
        console.error('Error:', error);
        const errorResponse = {
          error: true,
          message: 'Internal server error',
        };
        return res.status(500).json(errorResponse);
      }
    });

    app.post('/api/otp/getsession', async (req, res) => {
  try {
    if (!isConnected) {
      await client.connect();
      isConnected = true; 
    }
    const { apikey, email } = req.body;

    const key = `user:${apikey}:dev`;
    const devExists = await client.get(key);

    if (!devExists) {
      const errorResponse = {
        error: true,
        message: 'Invalid apikey',
      };
      return res.status(401).json(errorResponse);
    }

    const successResponse = {
      message: 'session True',
      session: true,
    };

    const key1 = `user:${email}:session:true`;
    const sessionExists = await client.get(key1, true); 

    if (sessionExists) {
      return res.status(200).json(successResponse);
    } else {
      const errorResponse = {
        message: 'Session False',
        session: false,
      };
      return res.status(401).json(errorResponse);
    }
  } catch (error) {
    return res.status(500).json({ error: true, message: 'Internal server error' });
  }
});







app.post('/api/otp/signout', async (req, res) => {
  try {
    if (!isConnected) {
      await client.connect();
      isConnected = true; 
    }
    const { apikey, email } = req.body;

    const key = `user:${apikey}:dev`;
    const devExists = await client.get(key);

    if (!devExists) {
      const errorResponse = {
        error: true,
        message: 'Invalid apikey',
      };
      return res.status(401).json(errorResponse);
    }

    const key1 = `user:${email}:session:true`;
    const key2 = `user:${email}:session:false`;

    const sessionExists = await client.get(key1);
    console.log(sessionExists);

    if (sessionExists !== null) {
      // Remove the existing session key
      await client.del(key1);
      await client.del(key2);
      
      // Set the session to false
      await client.set(key2, 'false'); // Set it as a string 'false' or any desired value
      const successResponse = {
        message: 'Session successfully ended',
        session: false,
      };
      return res.status(200).json(successResponse);
    } else {
      const errorResponse = {
        message: 'Session not found',
        session: true,
      };
      return res.status(401).json(errorResponse);
    }
  } catch (error) {
    return res.status(500).json({ error: true, message: 'Internal server error' });
  }
});





const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
