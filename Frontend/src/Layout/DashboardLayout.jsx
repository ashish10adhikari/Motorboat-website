import React from 'react'
import { Outlet } from 'react-router-dom'
import Topbar from '../Component/Topbar'
import Adminsidebar from '../Component/Adminsidebar'

const DashboardLayout = () => {
  return (
    <>
    <Topbar/>
    <Adminsidebar/>
    <Outlet/>
    </>
  )
}

export default DashboardLayout