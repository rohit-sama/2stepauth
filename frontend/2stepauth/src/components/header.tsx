import Image from "next/image";
import { signinwithgoogle, signoutwithgoogle } from "./signin";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import Link from "next/link";

export async function Header() {
  const session = await getServerSession(authOptions);
  console.log(session);
  return (
    <div className="flex justify-evenly border-b-amber-600 border-b-2 pb-4 gap-80 my-5">
      <Link href="/" className="flex">
        <Image
          className="rounded-full "
          src="/logo.png"
          alt="Picture of the author"
          width={70}
          height={70}
        />
        <h1 className="text-3xl text-gray-400">/2Auth</h1>
      </Link>
      {!session ? (
        <button className="black_btn" onClick={signinwithgoogle}>
          Sign In With Google
        </button>
      ) : (
        <div className="flex justify-center gap-3 items-center">
        <button className="black_btn" onClick={signoutwithgoogle}>
          Sign Out
        </button>
        <h1 className="text-gray-400">@{(session.user.name)?.split(" ")[0]}</h1>
        </div>
      )}
    </div>
  );
}

export default Header;
