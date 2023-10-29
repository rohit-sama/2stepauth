 // src/pages/api/auth/[...nextauth].ts

 import { authOptions } from "@/lib/auth";
 import NextAuth from "next-auth/next";

 export default NextAuth(authOptions);
