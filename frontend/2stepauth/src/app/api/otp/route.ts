import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

import { db } from "@/lib/db";

function generateOTP() {
    const otp = Math.floor(1000 + Math.random() * 9000).toString();
    return otp;
  }

export async function GET(req: Request, res: Response) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return new Response("Unauthorized", { status: 401 });
    }
console.log("Server call");
    const generatedOTP = generateOTP();
    db.set(`user:${session.user.id}:${generatedOTP}`, generatedOTP);
    const responseObj = {
        message: "otp saved",
        otp: generatedOTP, 
      };
      db.expire(`user:${session.user.id}:${generatedOTP}`, 180);
       db.set(`user:${session.user.email}:dev`, session.user.email);
      
      const responseBody = JSON.stringify(responseObj);

      
    
      return new Response(responseBody, { status: 200, headers: { 'Content-Type': 'application/json' } });
  } catch (error) {
    return new Response("otp was not saved", { status: 500 });
  }
}

export async function POST(req: Request, res: Response) {
  try {
    const { otpValue, username } = await req.json();
    if (!otpValue || !username) {
      const errorResponse = {
        error: true,
        message: "Invalid input data",
      };
      return new Response(JSON.stringify(errorResponse), { status: 400, headers: { 'Content-Type': 'application/json' } });
    }

    const key = `user:${username.id}:${otpValue}`;
    const otpExists = await db.get(key);

    console.log("Server call");
    if (!otpExists) {
      const errorResponse = {
        error: true,
        message: "Incorrect otp",
      };
      return new Response(JSON.stringify(errorResponse), { status: 401, headers: { 'Content-Type': 'application/json' } });
    }

    const successResponse = {
      message: "otp verified",
    };
    db.set(`user:${username.email}:session:true`, true);
    return new Response(JSON.stringify(successResponse), { status: 200, headers: { 'Content-Type': 'application/json' } });

  } catch (error) {
    console.error(error);
    const errorResponse = {
      error: true,
      message: "otp was not verified",
    };
    return new Response(JSON.stringify(errorResponse), { status: 500, headers: { 'Content-Type': 'application/json' } });
  }
}





