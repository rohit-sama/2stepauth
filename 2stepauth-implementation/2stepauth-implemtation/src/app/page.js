"use client";
import axios from "axios";
import React, { useEffect } from "react";

export default function Home() {
  const apiKey = "c65f45ce-4c4a-4a79-a9e4-81d73473a170";
  const email = "rohit9804singh@gmail.com";
  const [session, setSession] = React.useState();
  const [check, setCheck] = React.useState();
  const initiateSession = async () => {
    try {
      console.log("Initiating Session");
      const response = await axios.post(
        "http://localhost:4000/api/otp/authenticateotp",
        {
          apikey: apiKey,
          email: email,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Success:", response.data);
      // Get the redirect URL from the response
      const { redirectUrl } = response.data;
      console.log(redirectUrl);
      window.location.href = redirectUrl;
    } catch (error) {
      // Handle errors
      console.error("Error:", error);
      // Further error handling
    }
  };
  useEffect(() => {
    if(!check){
      checkSession();
      setCheck(true);
    }
  },[]);
  const checkSession = async () => {
    try {
      console.log("Initiating Session");
      const response = await axios.post(
        "http://localhost:4000/api/otp/getsession",
        {
          apikey: apiKey,
          email: email,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Success:", response.data);
      if (response.data.session) {
        setSession(true);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };


  const signout = async () => {
    try {
      console.log("signing out");
      const response = await axios.post(
        "http://localhost:4000/api/otp/signout",
        {
          apikey: apiKey,
          email: email,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
console.log(response.data);
      console.log("Success:", response.data);
      if (!response.data.session) {
        setSession(false);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="h-[100vh] flex flex-col justify-center items-center">
      <h1>2 Step Authentication</h1>
      {session ? (
        <div>
          <button className="border-2 border-gray-400 p-1 mt-5">
            already logged in
          </button>
        </div>
      ) : (
        <button
          className="border-2 border-gray-400 p-1 mt-5"
          onClick={initiateSession}
        >
          Initiate Session
        </button>
      )}

      <button
        className="border-2 border-gray-400 p-1 mt-5"
        onClick={checkSession}
      >
        Check Session
      </button>
      {session ? (
        <div><h1 className="mt-5">Session is true</h1>
        <button
        className="border-2 border-gray-400 p-1 mt-5"
        onClick={signout}
      >
        sigout
      </button></div>
        
        
      ) : (
        <h1 className="mt-5">Session is false</h1>
      )}
    </div>
  );
}
