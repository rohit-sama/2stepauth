"use client"
import axios from 'axios';
import Image from 'next/image';
import React, { use, useEffect, useState } from 'react'

type UserData = {
    user: {
      name: string;
      email: string;
      image: string;
      id: string;
    } | null;
  };
  

const Copybtn = ({email:UserEmail} : any) => {
    const [email, setEmail] = useState(UserEmail); 
  const [otp, setOtp] = useState('');
  const [initialotp, setInitialOtp] = useState('');

  useEffect(() => {

   
    axios.get('api/otp')
      .then((response) => {
        if (response.status === 200) {
          const receivedOtp = response.data.otp;
          setOtp(receivedOtp);
        } else {
          console.error('Failed to send email and receive OTP');
        }
      })
      .catch((error) => {
        console.error('An error occurred:', error);
      });
  }, [initialotp, email]); 



    const [copied, setCopied] = useState("");
    const handleCopy = () => {
      setCopied("post.qoute");
      navigator.clipboard.writeText("post.qoute");
      setTimeout(() => {
        setCopied("");
      }, 3000);
    };
  return (
  
        <div className="copy_btn  w-10 h-10" onClick={handleCopy}>
          <Image
            src={
              copied === "post.qoute"
                ? "/icons/tick.svg"
                : "/icons/copy.svg"
            }
            alt="anime_image"
            width={30}
            height={30}
          />
        </div>
  )
}

export default Copybtn