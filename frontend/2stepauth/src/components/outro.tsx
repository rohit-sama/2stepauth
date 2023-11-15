import Image from "next/image";
import React from "react";

const Outro = () => {
  return (
    <div className="text-gray-400 border-y-2 border-gray-800 pt-20 flex flex-col-reverse">
      <div className="flex lg:flex-row justify-end flex-col items-center m-5 mb-20 gap-20">
        <div className="flex-col text-right md:ml-10 md:mr-10">
          <h1 className="font-semibold  text-gray-400 lg:text-6xl text-4xl mb-3">
            Notes for Integration
          </h1>
          <ul className="mb-20">
            <li>Ensure that the provided API key and email are correct.</li>
            <li>
              Handle different response codes appropriately for a seamless user
              experience.
            </li>
            <li>Redirect users to the generated URL for OTP authentication.</li>
          </ul>
        </div>
        <Image
          className="shadow-lg border-2 border-gray-500"
          alt="about"
          width={500}
          height={400}
          src="/ss4.jpg"
        />
      </div>
      <div className="flex lg:flex-row flex-col items-center m-5 mb-20 gap-20">
        <Image
          className="shadow-lg border-2 border-gray-500"
          alt="about"
          width={500}
          height={400}
          src="/ss5.jpg"
        />
        <div className="flex-col md:ml-10 md:mr-10">
          <h1 className="font-semibold  text-gray-400 lg:text-6xl text-4xl mb-3">
            Additional Tips
          </h1>
          <ul>
            <li>Provide clear error messages for different scenarios.</li>
            <li>
              Offer sample code snippets in various programming languages for
              easier integration.
            </li>
            <li>
              Document possible error scenarios and how to troubleshoot them.
            </li>
          </ul>
        </div>
      </div>
     
    </div>
  );
};

export default Outro;
