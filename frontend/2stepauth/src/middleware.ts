import { getToken } from "next-auth/jwt";
import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
    async function middleware(req) {
        const pathname = req.nextUrl.pathname;
        const isauth = await getToken({ req });

        const sensetive = ["/dashboard", "/profile"];
        const isacces = sensetive.some((path) => pathname.startsWith(path));

        if (!isauth && isacces) {
            return NextResponse.redirect(new URL("/", req.url));
        }
        // if (pathname === "/") {
        //     return NextResponse.redirect(new URL("/dashboard", req.url));
        // }
    },
    {
        callbacks: {
            async authorized() {
                return true;
            },
        },
    }
);

export const comfig = {
    matchers: ["/", "/login", "/dashboard/:path*"],
};