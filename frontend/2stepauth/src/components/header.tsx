import Image from "next/image";
import { signinwithgoogle, signoutwithgoogle } from "./signin";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import Link from "next/link";
import Toggle from "./Toggle";

export async function Header() {
  const session = await getServerSession(authOptions);
 
  return (
    <div className="grid max-md:grid-cols-4  backdrop-blur-sm">
    <div className="flex col-span-3 justify-evenly border-b-amber-600  border-b-2 pb-4 md:gap-80 gap-40 my-5">
      <div className="flex gap-8 justify-start items-center">
      <Link href="/" className="flex md:ml-0 -ml-20">
        <Image
          className="rounded-full md:flex  hidden"
          src="/logo.png"
          alt="Picture of the author"
          width={70}
          height={70}
        />
        <h1 className="text-3xl orange_gradient">/2Auth</h1>
      </Link>
      <div className="text-gray-300 lg:flex px-4 border-gray-200 hidden gap-4">
          <Link href="/">./Home</Link>
          <Link href="/dashboard">./dashboard</Link>
          <Link href="/docs">./documentation</Link>
        </div>
        </div>
      {!session ? (
        <div className=" md:flex hidden">
        <button className=" black_btn " onClick={signinwithgoogle}>
          Sign In
        </button> </div>
      ) : (
        <div className="justify-center md:flex hidden gap-3 items-center">
        <button className="black_btn" onClick={signoutwithgoogle}>
          Sign Out
        </button>
        <Link href="/profile" className="text-gray-400">@{(session.user.name)?.split(" ")[0]}</Link>
        </div>
      )}
      
    </div>
    <div className="md:hidden flex justify-center items-center mb-5 border-b-amber-600 border-b-2">
    <Toggle session = {session}/>
    </div>
    </div>
  );
}

export default Header;
