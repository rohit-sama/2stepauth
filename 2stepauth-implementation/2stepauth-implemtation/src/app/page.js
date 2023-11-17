"use client";
import axios from "axios";
import React, { useEffect } from "react";

export default function Home() {
  const apiKey = "c65f45ce-4c4a-4a79-a9e4-81d73473a170";
  const email = "rohit9804singh@gmail.com";
  const [session, setSession] = React.useState();
  const [check, setCheck] = React.useState();


  useEffect(() => {
    if (!check) {
      checkSession();
      setCheck(true);
    }
  }, []);



  //function to initiate session
  const initiateSession = async () => {
    try {
      //axios request to initiate session
      const response = await axios.post(
        "https://api-2stepauth.vercel.app/api/otp/authenticateotp",
        //passing apikey and email as body
        { apikey: apiKey,  email: email, },
        //setting content type to json
        { headers: { "Content-Type": "application/json"}, }
      );
      //redirecting to the url received from the response
      const { redirectUrl } = response.data;
      window.location.href = redirectUrl;
    } catch (error) {
      console.error("Error:", error);
    }
  };


  //function to check session
  const checkSession = async () => {
    try {
      // axios request to check session
      const response = await axios.post(
        "https://api-2stepauth.vercel.app/api/otp/getsession",
        //passing apikey and email as body
        { apikey: apiKey,  email: email, },
        //setting content type to json
        {  headers: { "Content-Type": "application/json" }, }
      );
      //if session is true then set session to true
      if (response.data.session) {
        setSession(true);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };


  //function to signout
  const signout = async () => {
    try {
      //axios request to signout
      const response = await axios.post(
        "https://api-2stepauth.vercel.app/api/otp/signout",
        //passing apikey and email as body
        { apikey: apiKey,  email: email, },
        //setting content type to json
        { headers: {  "Content-Type": "application/json"  }, }
      );
      //if session is false then set session to false
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
        <div>
          <h1 className="mt-5">Session is true</h1>
          <button
            className="border-2 border-gray-400 p-1 mt-5"
            onClick={signout}
          >
            sigout
          </button>
        </div>
      ) : (
        <h1 className="mt-5">Session is false</h1>
      )}
    </div>
  );
}
