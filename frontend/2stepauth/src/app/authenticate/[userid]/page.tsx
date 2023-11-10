// Dashboard.tsx
import { getUser } from '@/components/functions';
import Header from '@/components/header';
import { Metadata } from 'next';
import React from 'react';
import UseOtpForm from '@/components/useOtpForm'; 

interface PageProps {
  params: any;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  return {
    title: '2Auth',
  };
}

const Dashboard = async ({ params }: PageProps) => {
  const user = await getUser(params.userid);
  if(user?.id === undefined) return (<h1>Not Found</h1>)

  return (
    <div>
      {user && <Header />}
      <div className="flex gap-3 flex-col justify-center items-center h-[70vh] text-gray-100">
        <h1 className="text-left text-4xl gray_gradient w-[50%]">Hey {user?.name}</h1>
        <div className="flex items-center gap-4 justify-center">
          <h1>Enter your One Time Password:</h1>
         <UseOtpForm username  = {user?.id}/>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
