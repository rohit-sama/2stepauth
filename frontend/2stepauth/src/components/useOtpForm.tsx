"use client"
import { useEffect, useState } from 'react';
import axios from 'axios';
interface Props {
    username: User;
}

const UseOtpForm = ({username}:Props) => {
  const [otpValue, setOtpValue] = useState('');

  const handleOtpChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOtpValue(e.target.value);
  };
  useEffect(() => {
    const handleOtpChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setOtpValue(e.target.value);
      };
      handleOtpChange
      console.log(otpValue)
  },[otpValue])

    const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        verifyOTP();
    };

  const [message, setMessage] = useState('');

 



  const verifyOTP = async () => {
    try {
      const response = await axios.post('/api/otp', {
        otpValue,
        username,
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.status === 200) {
        setMessage(response.data.message);
      } else {
        setMessage('Error verifying OTP');
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        // Log specific information from the Axios error object
        console.error('Axios Error Details:', {
          message: error.message,
          response: error.response?.data, // Log the response data if available
          statusText: error.response?.statusText,
          status: error.response?.status,
        });
      }
  
      console.error('Error verifying OTP:', error);
      setMessage('Error verifying OTP');
    }
  };
  

  return (
    <div>
    <input
    className="w-40 h-10 p-2 rounded-md flex justify-center bg-gray-400 items-center text-xl border-2 border-gray-400 hover:border-gray-200"
    type="text"
    value={otpValue}
    onChange={handleOtpChange}
  />
  <button
    onClick={handleSubmit}
    className="w-20 h-10 p-2 rounded-md flex justify-center bg-blue-500 items-center text-white border-2 border-blue-500 hover:border-blue-200"
  >
    Submit
  </button>
  <div>{message}</div>
  </div>
  );
};

export default UseOtpForm;