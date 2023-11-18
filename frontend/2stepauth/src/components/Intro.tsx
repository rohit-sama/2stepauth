"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Docs = () => {
  return (
    <div className="border-b-2 text-gray-200 border-gray-500">
      <motion.aside
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: 100, opacity: 0 }}
        transition={{
          duration: 0.4,
          delay: 0.1,
        }}
      >
        <div className="flex lg:flex-row flex-col-reverse items-center m-5 mb-20 gap-20">
          <Image
            className="shadow-md border-2 border-blue-400 shadow-blue-400 "
            alt="about"
            width={400}
            height={400}
            src="/intro.jpg"
          />

          <div className="flex-col md:ml-10 md:mr-10">
            <h1 className="font-semibold blue_gradient lg:text-6xl text-4xl mb-3">
              Introduction
            </h1>
            <p className="font-serif text-lg xl:mr-40 lg:mr-10 text-gray-400 ">
              This documentation aims to guide developers through the
              integration process of our robust OTP (One-Time Password) service
              into their web applications. Our service provides a secure and
              seamless two-step verification process, enhancing the security of
              user accounts. By integrating our APIs, developers can initiate
              sessions, verify active sessions, and generate OTP redirect URLs
              effortlessly. This documentation offers detailed insights into
              each API endpoint, parameters required, expected responses, and
              best practices for smooth integration. We aim to empower
              developers in implementing an effective and reliable
              authentication layer for their applications with ease. Let{"'"}s
              get started!
            </p>
          </div>
        </div>
      </motion.aside>
      <motion.aside
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: 100, opacity: 0 }}
        transition={{
          duration: 1,
          delay: 0,
        }}
      >
        <div className="flex lg:flex-row flex-col justify-end  items-center m-5 mb-40 gap-20">
          <div className="flex-col text-right md:ml-10 md:mr-10">
            <h1 className="font-semibold orange_gradient lg:text-6xl text-4xl mb-3">
              Purpose and Motivation
            </h1>
            <p className="font-serif text-lg lg:ml-40 text-gray-400 ">
              Security is a paramount concern in today{"'"}s digital landscape,
              especially concerning user data and account access. The Two-Step
              Authentication Service was developed with the primary goal of
              bolstering security measures for user accounts. By implementing a
              two-step verification process, we aim to significantly reduce the
              risk of unauthorized access, data breaches, and account hijacking.
            </p>
          </div>
          <Image
            className=" shadow-lg border-2 border-orange-400 shadow-orange-400"
            alt="about"
            width={400}
            height={400}
            src="/purpose.jpg"
          />
        </div>
      </motion.aside>
    </div>
  );
};

export default Docs;
