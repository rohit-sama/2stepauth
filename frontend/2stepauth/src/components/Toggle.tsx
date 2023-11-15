"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { signinwithgoogle, signoutwithgoogle } from "./signin";
import { motion } from "framer-motion";

const Modal = ({ onClose, session }: any) => {
  const closeModal = () => {
    onClose(false);
  };

  return (
   
      <div className="fixed h-[95vh]  overflow-y-scroll no-scrollbar  border-b-2 bg-[url(/background.png)]  border-b-amber-600 text-gray-200 inset-0 z-50 bg-black flex flex-col">
         <motion.div
      initial={{ y: 0 }}
      animate={{ y: 100 }}
      exit={{ y: "50%", transition: { duration: 2 } }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 18,
        duration: 1,
      }}
    >
        <div className=" backdrop-blur-sm h-[95vh]">
          <div
            className=" p-8 rounded-lg max-w-lg w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {!session ? (
              <button className="black_btn" onClick={signinwithgoogle}>
                Sign In With Google
              </button>
            ) : (
              <div className="justify-center flex gap-3 items-center">
                <button className="black_btn" onClick={signoutwithgoogle}>
                  Sign Out
                </button>
                <Link href="/profile" className="text-gray-400">
                  @{session.user.name?.split(" ")[0]}
                </Link>
              </div>
            )}
            <div className="text-gray-400 px-4 mt-20 text-left flex flex-col justify-center border-gray-200 gap-2">
              <Link href="/">./Home</Link>
              <Link href="/dashboard">./dashboard</Link>
              <Link href="/docs">./documentation</Link>
            </div>
          </div>

          <button
            className="m-4 mx-10 px-4 py-2 rounded-md text-gray-400 border-2 border-gray-600 font-semibold"
            onClick={closeModal}
          >
            Go Back
          </button>
        </div>
        </motion.div>
      </div>
  );
};
interface Props {
  session: any;
}

const Toggle = ({ session }: Props) => {
  const [toggle, setToggle] = useState(false);
  console.log(toggle);
  useEffect(() => {
    if (toggle) {
      document.body.classList.add("overflow-hidden"); // Disable scrolling
    } else {
      document.body.classList.remove("overflow-hidden"); // Enable scrolling
    }

    return () => {
      document.body.classList.remove("overflow-hidden"); // Reset scroll behavior on component unmount
    };
  }, [toggle]);

  return (
    <div>
      <div>
        <div
          className="md:hidden text-gray-200 flex justify-center items-center"
          onClick={() => setToggle((prev) => !prev)}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 12H21"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3 6H21"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3 18H21"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      {/* Render modal if toggle is true */}
      {toggle && <Modal onClose={setToggle} session={session} />}
    </div>
  );
};

export default Toggle;
