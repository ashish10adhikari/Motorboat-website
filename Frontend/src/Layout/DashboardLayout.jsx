import React from "react";
import { Outlet } from "react-router-dom";
import Topbar from "../Component/Topbar";
import Adminsidebar from "../Admin/Component/Adminsidebar";

const DashboardLayout = () => {
  return (
    <div className="flex flex-col w-full">
      <Topbar />
      <div className="flex flex-row">
        <Adminsidebar />
        <div className="ml-60 flex-1">
          <Outlet />
        </div>
        
      </div>
    </div>
  );
};

export default DashboardLayout;
