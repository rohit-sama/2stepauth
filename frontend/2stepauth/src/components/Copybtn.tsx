"use client"
import axios from 'axios';
import Image from 'next/image';
import React, { use, useEffect, useState } from 'react'


const Copybtn = () => {
    const [otp, setOtp] = useState();
    const [copied, setCopied] = useState("");

  useEffect(() => {
    let ignore = false;
    axios.get('api/otp')
      .then((response) => {
        if (!ignore) {
        if (response.status === 200) {
          const receivedOtp = response.data;
          setOtp(receivedOtp.otp);
          
        }
        
        } else {
          console.error('Failed to send email and receive OTP');
        }
       
      })
      .catch((error) => {
        console.error('An error occurred:', error);
      });
      return () => { ignore = true; console.log('cleanup'); }
  },[1]); 



   
    const handleCopy = () => {
        if(!otp) return;
      setCopied(otp);
      navigator.clipboard.writeText(otp);
      setTimeout(() => {
        setCopied("");
      }, 3000);
    };

  return (
  
        <div className="copy_btn items-center flex w-10 h-10 hover:cursor-pointer text-gray-300 hover:text-gray-100 " onClick={handleCopy}>
            <h1 className="text-xl">{otp}</h1>
          <Image
            src={
              copied === otp
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