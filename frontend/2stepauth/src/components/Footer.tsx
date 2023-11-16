import Link from "next/link";
import React from "react";
import SocialLinks from "./SocialLinks";

const Footer = () => {
  return (
    <div className="">
      <div className="md:h-[45vh] h-[40vh] border-t-2 gap-2 border-gray-400 flex justify-evenly items-center">
        <div>
          <h1 className="text-lg font-semibold mb-3">WebAgency</h1>
          <div className="gap-2 text-gray-400 text-sm flex flex-col">
            <Link href="/">/home</Link>
            <Link href="/docs">/docs</Link>
            <Link href="/dashboard">/dashboard</Link>
          </div>
        </div>
        <div>
          <h1 className="font-semibold text-gray-600 md:text-5xl text-3xl mb-10">
            Have any
            <br /> queries?
          </h1>
          <Link
            href="mailto:rohit9804singh@gmail.com"
            className="border-2 text-gray-300 border-gray-600 hover:bg-gray-600 hover:text-gray-200 p-3"
          >
            Get in Touch
          </Link>
        </div>
      </div>
      <div className="text-xl text-gray-300 text-center">
        MADE BY <span className="orange_gradient">ROHIT SINGH</span>
        <SocialLinks />
      </div>
    </div>
  );
};

export default Footer;
