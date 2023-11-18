"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Outro = () => {
  return (
    <div className="text-gray-400 border-y-2 border-gray-800 pt-20 flex flex-col-reverse">
      <motion.aside
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: 100, opacity: 0 }}
        transition={{
          duration: 0.5,
          delay: 0.1,
        }}
      >
        <div className="flex lg:flex-row justify-end flex-col items-center m-5 gap-20">
          <div className="flex-col text-right md:ml-10 md:mr-10">
            <h1 className="font-semibold  blue_gradient pb-2 lg:text-6xl text-4xl ">
              Notes for Integration
            </h1>
            <div className="lg:ml-40">
              Ensure the accuracy and validity of the API key and email input to
              guarantee successful authentication. Implement robust handling
              mechanisms for different response codes, aiming for a seamless
              user experience. Efficiently manage various response scenarios,
              utilizing appropriate error handling and informative messages to
              guide users through the authentication process. Finally,
              seamlessly redirect users to the generated URL for a streamlined
              and secure OTP authentication experience.
            </div>
          </div>
          <Image
            className=" border-2 border-blue-500 shadow-lg mb-20 shadow-blue-300"
            alt="about"
            width={400}
            height={400}
            src="/ss4.jpg"
          />
        </div>
      </motion.aside>
      <motion.aside
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: 100, opacity: 0 }}
        transition={{
          duration: 0.5,
          delay: 0.1,
        }}
      >
        <div className="flex lg:flex-row flex-col-reverse items-center m-5 mb-10 gap-20">
          <Image
            className=" border-2 border-orange-500 shadow-lg shadow-orange-300"
            alt="about"
            width={400}
            height={400}
            src="/ss5.jpg"
          />
          <div className="flex-col md:ml-10 md:mr-10">
            <h1 className="font-semibold pb-2 orange_gradient lg:text-6xl text-4xl ">
              Additional Tips
            </h1>
            <div className="lg:mr-40">
              Enhance error handling by crafting precise, scenario-specific
              error messages, aiding developers in swift issue resolution. These
              messages, coupled with code snippets in multiple languages,
              facilitate seamless integration and empower developers to navigate
              complex scenarios effectively. Comprehensive documentation
              outlining potential errors, troubleshooting steps, and best
              practices serves as a comprehensive guide, enabling efficient
              problem-solving and ensuring the application's robustness and
              reliability.
            </div>
          </div>
        </div>
      </motion.aside>
    </div>
  );
};

export default Outro;
