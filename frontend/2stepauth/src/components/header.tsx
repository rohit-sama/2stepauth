"use client";
import { signIn } from "next-auth/react";
import Image from "next/image";
import { authOptions } from "@/lib/auth";
import { getServerSession } from 'next-auth';

export const signinwithgoogle = () => {
  try {
    signIn("google", { callbackUrl: "http://localhost:3000/" });
  } catch (error) {
    console.log(error);
  }
};

const Header =async() => {
    const session = await getServerSession(authOptions);
  return (
    <div className="flex justify-evenly border-b-gray-500 border-b-2 pb-4 gap-80 my-5">
      <div className="flex">
        {" "}
        <Image
          className="rounded-full "
          src="/logo.png"
          alt="Picture of the author"
          width={70}
          height={70}
        />
        <h1 className="text-3xl text-gray-400">/2Auth</h1>
      </div>

      <button className="black_btn" onClick={signinwithgoogle}>
        Sign In With Google
      </button>
    </div>
  );
};

export default Header;
