import { Clipboard } from '@/components/clipboard';
import Header from '@/components/header'
import { authOptions } from '@/lib/auth';
import { getServerSession } from 'next-auth';
import Image from 'next/image';
import React from 'react'

const page = async() => {
   
    const handlecopy = () => {}
    const session = await getServerSession(authOptions);
    if(!session?.user.image) return (<div>loading...</div>)
  return (
    <div>
        <Header />
        <div className='md:m-40 mt-10 gap-5 flex flex-col text-center justify-center items-center'>
        <Image alt='profilepic' src={session?.user.image} width={150} height={150} className='rounded-full' />
        <div>
        <div className="text-gray-100 text-3xl orange2_gradient">{session?.user.name}</div>
        <div className="text-gray-100 gray_gradient">{session?.user.email}</div>
        </div>
        <div>
            <h1 className="text-gray-100 mt-10">Your Api Key</h1>
           <Clipboard id={session.user.id}/>
        </div>

        </div>
       
    </div>
  )
}

export default page