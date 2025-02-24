import React from "react";
import { Outlet } from "react-router-dom";
import Topbar from "../Component/Topbar";
import Adminsidebar from "../Component/Adminsidebar";

const DashboardLayout = () => {
  return (
    <div className="flex flex-col h-screen">
      <Topbar />

      <div className="flex flex-1">
        <Adminsidebar />

        <div className="flex-1 p-4 ml-60">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
