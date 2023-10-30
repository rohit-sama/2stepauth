"use client"
import React from 'react';

interface Props {
    id: string
}

export const Clipboard = ({id}:Props) => {
    const Clipboardcopy = () => {
        navigator.clipboard.writeText(id);
    }
    return (
        <>
        <p className='text-gray-500 mt-3'>click on the bleow api key to copy</p>
        <h1 onClick={Clipboardcopy} className="text-gray-300 mt-4 border-2 hover:text-gray-200 hover:cursor-pointer border-gray-300 p-2 ">{id}</h1>
        </>
    )
}
