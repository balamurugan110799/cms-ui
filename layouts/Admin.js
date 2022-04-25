import React from "react";
import { useState, useEffect } from 'react';

// components

import Sidebar from "components/Sidebar/Sidebar.js";
import AuthContext from '../pages/context'
export default function Admin({ children }) {
  const [dashboardHeader, setDashboardHeader] = useState(true);
 
  return (
    <>
      <AuthContext.Provider value={{ dashboardHeader, setDashboardHeader }}>

      <Sidebar />
      <div >
     
        <div className="px-1 md:px-1 mx-auto w-full -m-24">
          {children}
          {/* <FooterAdmin /> */}
        </div>
      </div>
      </AuthContext.Provider>
    </>
  );
}
