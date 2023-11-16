import Image from "next/image";
import React from "react";

const Docs = () => {
  return (
    <div className="border-b-2 text-gray-200 border-gray-500">
      
      <div className="flex lg:flex-row flex-col items-center m-5 mb-20 gap-20">
        <Image
          className="shadow-lg"
          alt="about"
          width={500}
          height={400}
          src="/intro.jpg"
        />
        <div className="flex-col md:ml-10 md:mr-10">
          <h1 className="font-semibold  text-gray-400 lg:text-6xl text-4xl mb-3">
            Introduction
          </h1>
          <p className="font-serif text-lg text-gray-400 ">
            This documentation aims to guide developers through the integration
            process of our robust OTP (One-Time Password) service into their web
            applications. Our service provides a secure and seamless two-step
            verification process, enhancing the security of user accounts. By
            integrating our APIs, developers can initiate sessions, verify
            active sessions, and generate OTP redirect URLs effortlessly. This
            documentation offers detailed insights into each API endpoint,
            parameters required, expected responses, and best practices for
            smooth integration. We aim to empower developers in implementing an
            effective and reliable authentication layer for their applications
            with ease. Let{"'"}s get started!
          </p>
        </div>
      </div>
      <div className="flex lg:flex-row flex-col justify-end  items-center m-5 mb-40 gap-20">
      <div className="flex-col text-right md:ml-10 md:mr-10">
          <h1 className="font-semibold text-gray-400 lg:text-6xl text-4xl mb-3">
            Purpose and Motivation
          </h1>
          <p className="font-serif text-lg text-gray-400 ">
            Security is a paramount concern in today{"'"}s digital landscape,
            especially concerning user data and account access. The Two-Step
            Authentication Service was developed with the primary goal of
            bolstering security measures for user accounts. By implementing a
            two-step verification process, we aim to significantly reduce the
            risk of unauthorized access, data breaches, and account hijacking.
          </p>
        </div>
        <Image
          className=" shadow-lg"
          alt="about"
          width={500}
          height={400}
          src="/purpose.jpg"
        />
      </div>
    </div>
  );
};

export default Docs;
