"use client"
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
            <h1 className="font-semibold  blue_gradient lg:text-6xl text-4xl ">
              Notes for Integration
            </h1>
            <div className="lg:ml-40">
              Ensure that the provided API key and email are correct Handle
              different response codes appropriately for a seamless user
              experience. Redirect users to the generated URL for OTP
              authentication.
            </div>
          </div>
          <Image
            className=" border-2 border-blue-500 shadow-lg mb-20 shadow-blue-300"
            alt="about"
            width={500}
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
            className=" border-2 border-blue-500 shadow-lg shadow-blue-300"
            alt="about"
            width={500}
            height={400}
            src="/ss5.jpg"
          />
          <div className="flex-col md:ml-10 md:mr-10">
            <h1 className="font-semibold  blue_gradient lg:text-6xl text-4xl ">
              Additional Tips
            </h1>
            <div className="lg:mr-40">
              Provide clear error messages for different scenarios. Offer sample
              code snippets in various programming languages for easier
              integration. Document possible error scenarios and how to
              troubleshoot them.
            </div>
          </div>
        </div>
      </motion.aside>
    </div>
  );
};

export default Outro;
