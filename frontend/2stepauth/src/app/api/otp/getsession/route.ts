import { db } from "@/lib/db";

export async function POST(req: Request, res: Response) {
    try {
        const {apikey, email} = await req.json();
        const key = `user:${apikey}:dev`;
        const devExists = await db.sismember(key, apikey);

        if (!devExists) {
            const errorResponse = {
                error: true,
                message: "Invalid apikey",
            };
            return new Response(JSON.stringify(errorResponse), { status: 401, headers: { 'Content-Type': 'application/json' } });
        }

        const successResponse = {
            message: "session True",
        };

        const key1 = `user:${email}:session`;
        const sessionExists = await db.sismember(key1, true);
        if (sessionExists) {
            return new Response(JSON.stringify(successResponse), { status: 200, headers: { 'Content-Type': 'application/json' } });
        } else {
            const errorResponse = {
                error: true,
                message: "Session False",
            };
            return new Response(JSON.stringify(errorResponse), { status: 401, headers: { 'Content-Type': 'application/json' } });
        }

    } catch (error) {
        return new Response(JSON.stringify(error), { status: 500, headers: { 'Content-Type': 'application/json' } });
    }
}