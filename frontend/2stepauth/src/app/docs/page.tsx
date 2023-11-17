import Header from "@/components/header";
import React from "react";
import Docs from "@/components/Intro";
import Documentation from "@/components/Documentation";
import Footer from "@/components/Footer";

const Page = () => {
  return (
    <div className="">
      <Header />
      <Docs />
      <Documentation />
    </div>
  );
};

export default Page;
