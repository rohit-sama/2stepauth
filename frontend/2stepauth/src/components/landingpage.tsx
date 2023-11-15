"use client"
import { signinwithgoogle } from "@/components/signin";
import Link from "next/link";
import { motion } from "framer-motion";

interface Props {
    session : any;
}
const LandingPage = ({session} : Props) => {
  return (
    <motion.div
    initial={{ opacity: 0, scale: 0.99, y: 50 }}
    animate={{ opacity: 1, scale: 1, y: 0}}
    transition={{ duration: 0.5 }}
  >
    <div className="overflow-y-scroll no-scrollbar">
      
      <div className=" border-gray-500 lg:mx-20 bg-transparent h-[80vh]">
        <div className="">
          <h1 className="font-bold gray_gradient text-center lg:text-7xl pt-40 text-4xl">
            A <span className="font-bold orange_gradient">Two-step Auth</span>{" "}
            Solution For your
          </h1>
          <h2 className=" text-center lg:text-5xl text-3xl grayr_gradient">
            Web Application
          </h2>
          <div className="text-gray-400 text-lg text-center flex justify-center items-center m-5">
            <p className="text-gray-400 md:mx-60">
              Experience the next level of protection for your web application,
              with an added layer of security that goes beyond passwords –
              Two-step Authentication, a must-have for today{"'"}s digital
              world.
            </p>
          </div>

          <div className="text-center mt-14 flex justify-center items-center">
            {session ? (
              <Link
                href="/dashboard"
                className=" text-white m-5 rounded-lg grayr_gradient border-2 px-3 border-gray-400 py-1 hover:cursor-pointer hover:border-gray-400 hover:text-gray-100"
              >
                Get Started
              </Link>
            ) : (
              <button
                onClick={signinwithgoogle}
                className=" text-white m-5 rounded-lg grayr_gradient border-2 px-3 border-gray-400 py-1 hover:cursor-pointer hover:border-gray-400 hover:text-gray-100"
              >
                Get Started
              </button>
            )}

            <Link
              href="/docs"
              className=" text-white m-5 rounded-lg gray_gradient border-2 px-3 border-gray-400 py-1 hover:cursor-pointer hover:border-gray-400 hover:text-gray-100"
            >
              Documentation
            </Link>
          </div>
        </div>
      </div>
    </div>
    </motion.div>
  )
}

export default LandingPage