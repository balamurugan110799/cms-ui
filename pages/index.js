/* eslint-disable react/jsx-no-target-blank */
import React from "react";

import Login from './auth/login.js'
import Auth from "../layouts/Auth";

export default function Index() {


  return (
    <>
    
<Auth>
    <Login/>
    </Auth>
     
    </>
  );
}
