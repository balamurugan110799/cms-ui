
import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";



import CardPageVisits from 'components/Cards/table'
import ActionBar from 'components/GridLayout/actionBar'

// layout for page
import Columns from 'components/GridLayout/columns'
import Forms from 'components/GridLayout/forms'
import MainPage from 'components/GridLayout/mainPage'
import PopUpMeassage from 'components/ModelBox/PopUpPage'

// layout for page

import Admin from "layouts/Admin.js";

export default function NewPage() {
 

  const [alertPopUp, setAlertPopUp] = useState(false)
   const alert= () =>{
    setAlertPopUp(true)
    console.log(alertPopUp)
   }
  return (
    <div>
  

     
    {/* {alertPopUp?<AlertPopUp/>:<div>false</div>} */}
     <MainPage>
  
     <Columns>
     <CardPageVisits />
     </Columns>
     </MainPage>
   </div>
  );
}

NewPage.layout = Admin;
