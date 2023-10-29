"use client"
import { signIn, signOut } from "next-auth/react";


export const signinwithgoogle = () => {
  try {
    signIn("google", { callbackUrl: "http://localhost:3000/" });
  } catch (error) {
    console.log(error);
  }
};
export const signoutwithgoogle = () => {
    try {
      signOut();
    } catch (error) {
      console.log(error);
    }
  };