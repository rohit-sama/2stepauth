import { db } from "@/lib/db";
import { useRouter } from "next/router";

export async function GET(req: Request, res: Response) {
    try {
        // Parse the JSON body of the request
        const { apikey, email } = await req.json();
        
        // Construct the key for the Redis set
        const key = `user:${apikey}:dev`;

        // Check if the key exists in the Redis set
        const devExists = await db.sismember(key, {});
        if (!devExists) {
            const errorResponse = {
                error: true,
                message: "Invalid apikey",
            };
            return new Response(JSON.stringify(errorResponse), { status: 401, headers: { 'Content-Type': 'application/json' } });
        }

        // Construct the key for the email lookup in Redis
        const emailKey = `user:${apikey}:dev:email`;

        // Check if the email exists in the Redis set
        const emailExists = await db.sismember(emailKey, email);
        
        if (!emailExists) {
            const errorResponse = {
                error: true,
                message: "Email not found",
            };
            return new Response(JSON.stringify(errorResponse), { status: 404, headers: { 'Content-Type': 'application/json' } });
        }

        // If the email exists, retrieve the user ID associated with the email
        const userId = await db.hget(emailKey, email);

        const router = useRouter();
        router.push(`/${userId}`);


        return new Response("ok", { status: 200, headers: { 'Content-Type': 'application/json' } });
    } catch (error) {
        // Handle any errors that may occur during the execution
        console.error(error);
        const errorResponse = {
            error: true,
            message: "Internal server error",
        };
        return new Response(JSON.stringify(errorResponse), { status: 500, headers: { 'Content-Type': 'application/json' } });
    }
}
