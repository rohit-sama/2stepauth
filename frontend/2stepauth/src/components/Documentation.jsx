import Image from "next/image";
import React from "react";
import Outro from "./outro";

const Documentation = () => {
  return (
    <div className="border-b-2 mt-40 text-gray-200 border-gray-500">
      <div className="flex lg:flex-row flex-col items-center m-5 mb-20 gap-20">
        <Image
          className="shadow-lg border-2 border-gray-500"
          alt="about"
          width={700}
          height={400}
          src="/ss1.png"
        />
        <div className="flex-col md:ml-10 md:mr-10">
          <h1 className="font-semibold  text-gray-400 lg:text-6xl text-4xl mb-3">
            Generate OTP Redirect URL
          </h1>
          <p>
            <strong>Endpoint:</strong> POST{" "}
            <span className="bg-gray-400 text-black font-semibold rounded-md p-1">
              https://2stepauth.vercel.app/api/otp/authenticateotp
            </span>
          </p>
          <p>
            <strong>Description:</strong> This service generates a URL to
            redirect the user for OTP authentication.
          </p>
        </div>
      </div>
      <div className="flex lg:flex-row flex-col items-center justify-end m-5 mb-20 gap-20">
        <div className="flex-col md:ml-10 md:mr-10">
          <h1 className="font-semibold  text-gray-400 lg:text-6xl text-4xl mb-3">
            Check Session
          </h1>
          <p>
            <strong>Endpoint:</strong> POST{" "}
            <span className="bg-gray-400 text-black font-semibold rounded-md p-1">
              https://2stepauth.vercel.app/api/otp/getsession
            </span>
          </p>
          <p>
            <strong>Description:</strong> This service checks the validity of an
            active session.
          </p>
        </div>
        <Image
          className="shadow-lg border-2 border-gray-500"
          alt="about"
          width={700}
          height={400}
          src="/ss2.png"
        />
      </div>
      <div className="flex lg:flex-row flex-col items-center m-5 mb-20 gap-20">
        <Image
          className="shadow-lg border-2 border-gray-500"
          alt="about"
          width={700}
          height={400}
          src="/ss3.png"
        />
        <div className="flex-col md:ml-10 md:mr-10">
          <h1 className="font-semibold  text-gray-400 lg:text-6xl text-4xl mb-3">
            Signout Session
          </h1>
          <p>
            <strong>Endpoint:</strong> POST{" "}
            <span className="bg-gray-400 text-black font-semibold rounded-md p-1">
              https://2stepauth.vercel.app/api/otp/signout{" "}
            </span>
          </p>
          <p>
            <strong>Description:</strong> This service signs out a session for
            two-step authentication.
          </p>
        </div>
      </div>
  <Outro />
  <p className="lg:m-40 lg:mx-80 text-xl green_gradient">
        <span className="text-2xl gray_gradient"> Congratulations! </span>
        You've now familiarized yourself with the powerful functionalities of
        our Two-Step Authentication service. By integrating these API endpoints
        into your web applications, you've taken a significant step toward
        enhancing the security and user experience for your platform. Remember,
        these endpoints offer a robust mechanism for initiating, checking, and
        signing out user sessions seamlessly. Ensure to handle responses
        appropriately, maintaining a smooth user experience across various
        scenarios. Should you encounter any challenges or have suggestions for
        improvements, we're here to assist you. Our team values your feedback
        and continuously strives to enhance our services. Thank you for choosing
        our Two-Step Authentication service. We look forward to seeing your
        secure and user-friendly implementations!.
      </p>
  </div>
  );
};

export default Documentation;
