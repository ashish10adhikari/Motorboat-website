import React from 'react'
import {Outlet} from 'react-router-dom'

const AdminLayout = () => {
  return (
    <div className='flex items-center justify-center text-center'>
        <Outlet/>
    </div>
  )
}

export default AdminLayout