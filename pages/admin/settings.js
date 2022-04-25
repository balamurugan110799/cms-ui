
import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";



import CardPageVisits from 'components/Cards/CardPageVisits'
import ActionBar from 'components/GridLayout/actionBar'

// layout for page
import Columns from 'components/GridLayout/columns'
import Forms from 'components/GridLayout/columnsOne'
import MainPage from 'components/GridLayout/mainPage'
import PopUpMeassage from 'components/ModelBox/PopUpPage'

// layout for page

import Admin from "layouts/Admin.js";

export default function Settings() {
 

  const [alertPopUp, setAlertPopUp] = useState(false)
   const alert= () =>{
    setAlertPopUp(true)
    console.log(alertPopUp)
   }
  return (
    <div>
  

     
    {/* {alertPopUp?<AlertPopUp/>:<div>false</div>} */}
     <MainPage>
   <Forms heading='Form Page' buttonName="Button">
     
   <Columns Columns='4'>
   <input
   type="text"
   className="h-32 border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
   placeholder="Input Box"
   />
   </Columns>
   <Columns Columns='4'>
   <textarea
   type="password"
   className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
   placeholder="Text Area"
   />
   </Columns>
   <Columns Columns='4'>
   <select  className="h-32 border-0 px-1 py-1 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" name="cars" id="cars">
       <option value="volvo">Volvo</option>
       <option value="saab">Saab</option>
       <option value="opel">Opel</option>
       <option value="audi">Audi</option>
     </select>
   </Columns>
   <Columns Columns='4'>
   <div>
     <input type="radio" className="m-2 h-3 w-2" id="css" name="fav_language" value="CSS"/>
     <label for="html">React Js</label>
   </div>
   <div>
     <input type="radio" className="m-2 h-3 w-2" id="html" name="fav_language" value="HTML"/>
     <label for="html">Next Js</label>
   </div>
 
   </Columns>
   <Columns Columns='4'>

   <DatePicker  className="h-32 border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                   
                      
                       dateFormat='dd/MM/yyyy'
                       maxDate={new Date()}
                       onKeyDown={(e) => e.preventDefault()}
                     />
   
   </Columns>
   <Columns Columns='4'>
   <input id="customCheckLogin" type="checkbox" className="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"/>
    <span className=" m-2 text-sm font-semibold text-blueGray-600">
                  Check Box
                 </span>
   </Columns>
  
 
 <Columns Columns='4'>
 <div className="m-2">
 <PopUpMeassage type="success"/>
 </div>
 </Columns>
  
     <ActionBar/>
     </Forms>
     <Columns>
     <CardPageVisits />
     </Columns>
     </MainPage>
   </div>
  );
}

Settings.layout = Admin;
