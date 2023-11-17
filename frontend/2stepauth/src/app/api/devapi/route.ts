import { authOptions } from "@/lib/auth";
import { db } from "@/lib/db";
import { getServerSession } from "next-auth";

export async function POST(req: Request, res: Response) {
    try {
        const session = await getServerSession(authOptions);
        if (!session) {
            return new Response("Unauthorized", { status: 401 });
        }
        db.set(`user:${session.user.id}:dev`, session.user.id);
        console.log("Server call");
        return new Response(`${session.user.id}:dev`, { status: 200, headers: { 'Content-Type': 'application/json' } });
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify(error), { status: 500, headers: { 'Content-Type': 'application/json' } });
    }
}
