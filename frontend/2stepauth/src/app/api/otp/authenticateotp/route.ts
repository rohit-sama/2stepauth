import { db } from "@/lib/db";

export async function POST(req: Request, res: Response) {
    try {
        // Get the request body as text
        const requestBody = await req.text();
        console.log("Received JSON:", requestBody);
        if (!requestBody.trim()) {
            const errorResponse = {
                error: true,
                message: "Empty request body",
            };
            return new Response(JSON.stringify(errorResponse), { status: 400, headers: { 'Content-Type': 'application/json' } });
        }
        

        // Parse the JSON body of the request
        const { apikey, email } = JSON.parse(requestBody);

        // Construct the key for the Redis set
        const key = `user:${apikey}:dev`;

        // Check if the key exists in the Redis set
        const devExists = await db.sismember(key, apikey);
        console.log(devExists)
        if (!devExists) {
            const errorResponse = {
                error: true,
                message: "Invalid apikey",
            };
            return new Response(JSON.stringify(errorResponse), { status: 401, headers: { 'Content-Type': 'application/json' } });
        }

        // Construct the key for the email lookup in Redis
        const emailKey = `user:${email}:dev`;

        // Check if the email exists in the Redis set
        const emailExists = await db.sismember(emailKey, email);
        
        if (!emailExists) {
            const errorResponse = {
                error: true,
                message: "Email not found",
            };
            return new Response(JSON.stringify(errorResponse), { status: 404, headers: { 'Content-Type': 'application/json' } });
        }
console.log("Server call --email");
        

const redirectUrl = `/authenticate/${apikey}`;
console.log(redirectUrl);
// Set the Location header for redirection
const headers = { 'Location': redirectUrl };

// Return a response with the Location header
return new Response(null, { status: 302, headers });
    } catch (error) {
        // Log the error for debugging
        console.error("Error:", error);

        const errorResponse = {
            error: true,
            message: "Internal server error",
        };
        return new Response(JSON.stringify(errorResponse), { status: 500, headers: { 'Content-Type': 'application/json' } });
    }
}
