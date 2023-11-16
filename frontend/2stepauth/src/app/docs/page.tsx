import Header from "@/components/header";
import React from "react";
import Docs from "@/components/Intro";
import Documentation from "@/components/Documentation";
import Footer from "@/components/Footer";

const Page = () => {
  return (
    <div className="">
      <Header />
      <h1 className="text-gray-300 text-center text-5xl underline underline-offset-4 md:my-20 mt-10">
        Documentation
      </h1>
      <Docs />
      <Documentation />
    </div>
  );
};

export default Page;
