import Copybtn from "@/components/Copybtn";
import Header from "@/components/header"
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";


const Dashboard = async() => {
  const session =  await getServerSession(authOptions);
  return (
    <div>
      <Header />
      <div className="flex gap-3 flex-col justify-center items-center h-[70vh] text-gray-100">
        <h1 className="text-left text-3xl gray_gradient w-[50%]">Hey {(session?.user.name)?.split(" ")[0]},<span className="green_gradient text-2xl"> Welcome Back</span></h1>
         <h1 className="w-[50%] h-[10%]  p-2 rounded-md flex items-center justify-center text-xl bg-gray-500 ">{}<Copybtn email = {session?.user.email} /></h1>
          
      </div>
    </div>
  )
}

export default Dashboard