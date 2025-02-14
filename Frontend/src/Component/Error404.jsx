import React from 'react'
import { useNavigate } from 'react-router-dom'

const Error404 = () => {

    const navigate = useNavigate();
  return (
    <div className='min-h-screen items-center flex justify-center flex-col'>
        <div className='text-4xl font-bold'>404 | Page Not Found</div>
        <button onClick={()=>navigate('/')} className="bg-cyan-700 text-white mt-5 cursor-pointer p-3 border-2 border-white hover:bg-white hover:text-cyan-700 hover:border-cyan-700 hover:scale-105 transition-all duration-500">Go To Homepage</button>
    </div>
  )
}

export default Error404