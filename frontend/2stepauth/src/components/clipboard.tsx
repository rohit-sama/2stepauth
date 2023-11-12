"use client"
import axios from 'axios';
import React from 'react';

interface Props {
    id: string
}

export const Clipboard = ({id}:Props) => {
    const [apikey, setapikey] = React.useState(id)
    const Clipboardcopy = () => {
        navigator.clipboard.writeText(id);
    }
    const getdevapi = async() => {
        axios.post('/api/devapi' )
        .then(res => {
            setapikey(res.data)
        })
    }
    return (
        <>
        <p className='text-gray-500 mt-3'>click on the bleow api key to copy</p>
        <h1 onClick={Clipboardcopy} className="text-gray-300 mt-4 border-2 hover:text-gray-200 hover:cursor-pointer border-gray-300 p-2 ">{apikey}</h1>
        {apikey == id ? (<button onClick={getdevapi}
         className='mt-2 text-white border-2 border-gray-600 p-2'>get Your dev api
         </button>): (<button onClick={() => setapikey(id)}
         className='mt-2 text-white border-2 border-gray-600 p-2'>get Your api key
         </button>)}
        </>
    )
}
