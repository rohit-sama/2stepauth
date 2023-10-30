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


    const generatedOTP = generateOTP();
    db.sadd(`user:${session.user.id}:otp`, generatedOTP);

    
    return new Response("otp saved", { status: 200 });
  } catch (error) {
    return new Response("otp was not saved", { status: 500 });
  }
}