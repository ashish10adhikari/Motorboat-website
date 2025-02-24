import React from 'react'

const Adminsidebar = () => {
  return (
    <div className='absolute top-0 left-0 pt-10 bg-gray-700 text-white h-full w-60'>
        <h1 className='text-2xl font-bold py-20'>Admin Panel</h1>
        <ul className='gap-4 flex flex-col'>
            <li>Dashboard</li>
            <li>Package</li>
            <li>Images</li>
            <li>Gallery </li>
            <li>Messages</li>
        </ul>
    </div>
  )
}

export default Adminsidebar