import Copybtn from "@/components/Copybtn";
import Header from "@/components/header";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

const Dashboard = async () => {
  const session = await getServerSession(authOptions);
  return (
    <div>
      <Header />
      <div className="flex gap-3 flex-col justify-center items-center h-[70vh] text-gray-100">
        <h1 className="text-left text-4xl gray_gradient w-[50%]">
          Hey {session?.user.name?.split(" ")[0]},
          <span className="green_gradient text-2xl"> Welcome Back</span>
        </h1>
        <div className="flex items-center gap-4 justify-center">
          <h1>Your One Time Password :</h1>
          <h1 className="w-40 h-10 p-2 rounded-md flex justify-center items-center text-xl border-2 border-gray-400 hover:border-gray-200 ">
            {}
            <Copybtn/>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
