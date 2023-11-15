import Header from "@/components/header";
import LandingPage from "@/components/landingpage";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import Docs from "@/components/Docs";


export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <div>
    <div className=" h-[100vh]" >
      <Header />
      <LandingPage session = {session}/>   
    </div>
    {/* <div className="-mt-40">
    <Docs />
    </div> */}
    </div>
  );
}
