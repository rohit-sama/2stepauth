"use client"
import React from "react";
import {motion} from "framer-motion";

const Youtube = () => {
  return (
    <motion.div 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1, }}
    transition={{
      duration: 2,
      delay: 0,
    }}
    className="md:h-[100vh] h-[70vh] flex flex-col justify-center items-center">
        <h1 className="green_gradient  text-6xl pb-4 -mt-10 text-center">How Does it Work?</h1>
        <div className="box glowing  p-[0.4px]">
        <iframe
      className="md:h-[60vh]  shadow-lg md:w-[100vh] w-[45vh] h-[30vh]"
        src="https://www.youtube.com/embed/9ZEGjJqWyeI?si=8PAs9k3WvJ32PJ8N"
        title="tutorial"
        allow=" clipboard-write; encrypted-media; gyroscope; web-share"

      ></iframe>
        </div>
      
    </motion.div>
  );
};

export default Youtube;