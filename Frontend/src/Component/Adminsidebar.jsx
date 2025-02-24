import React from 'react'
import { NavLink } from 'react-router-dom'

const Adminsidebar = () => {
  return (
    <div className='absolute top-0 left-0 pt-10 bg-gray-700 text-white h-full w-60'>
        <h1 className='text-2xl font-bold py-20'>Admin Panel</h1>
        <ul className='gap-4 flex flex-col'>
            <NavLink to='/admin/dashboard'>Dashboard</NavLink>
            <NavLink to="/admin/dashboard/package">Package</NavLink>
            <NavLink to="/admin/dashboard/image">Images</NavLink>
            <NavLink to="/admin/dashboard/gallery">Gallery </NavLink>
            <NavLink to="/admin/dashboard/message">Messages</NavLink>
        </ul>
    </div>
  )
}

export default Adminsidebar