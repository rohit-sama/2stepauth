import Header from "@/components/header";
import { signinwithgoogle } from "@/components/signin";
import { authOptions } from "@/lib/auth";
import { getServerSession } from 'next-auth';
import Link from "next/link";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <div className="">
      <Header />
      <div className=" border-x-4 border-gray-500 mx-20 bg-transparent h-[80vh]">
        <div className="">
        <h1 className="font-bold gray_gradient text-center text-7xl pt-40">
          A <span className="font-bold orange_gradient">Two-step Auth</span> Solution For
          your
        </h1>
        <h2 className=" text-center text-5xl grayr_gradient">
          Web Application
        </h2>
        <div className="text-gray-500 text-lg text-center flex justify-center items-center m-5" >
        <p className="text-gray-500">Experience the next level of protection for your web application, with an added layer of security that goes beyond passwords – Two-step Authentication, a must-have for today{"'"}s digital world.</p>
        </div>
       
        <div className="text-center mt-20 flex justify-center items-center">
          {session ? ( <Link href="/dashboard" 
           className=" text-white m-5 rounded-lg gray_gradient border-2 px-3 border-gray-400 py-1 hover:cursor-pointer hover:border-gray-400 hover:text-gray-100">
            Get Started
          </Link>):(<button onClick={signinwithgoogle}
           className=" text-white m-5 rounded-lg gray_gradient border-2 px-3 border-gray-400 py-1 hover:cursor-pointer hover:border-gray-400 hover:text-gray-100">
            Get Started
          </button>)}
      
          <button className=" text-white m-5 rounded-lg gray_gradient border-2 px-3 border-gray-600 py-1 hover:cursor-pointer hover:border-gray-400 hover:text-gray-100">
            Documentation
          </button>
        </div>
        
        </div>
        <div className=""></div>
      </div>
    </div>
  );
}
