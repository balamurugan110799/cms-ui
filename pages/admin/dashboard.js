import React from "react";

// components
import AdminNavbar from 'components/Navbars/AdminNavbar'
import Navbar from "components/Navbars/AdminNavbar";

// layout for page

import Admin from "layouts/Admin.js";

export default function Dashboard() {
  return (
    <>
    <div className=" md:ml-64 bg-blueGray-100">
    <Navbar/>
        <AdminNavbar />
      <div className="flex flex-wrap m-4">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
        </div>
        <div className="w-full xl:w-4/12 px-4">
        </div>
      </div>
      <div className="flex flex-wrap m-4">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
        </div>
        <div className="w-full xl:w-4/12 px-4">
        </div>
       
      </div>
      </div>
    </>
  );
}

Dashboard.layout = Admin;
