import react from "react";
import processPlugins from "tailwindcss/lib/util/processPlugins";
import Navbar from '../Navbars/AdminNavbar'
export default function MainPage(props){
    return(
        <div>
            <div className="relative md:ml-64 bg-blueGray-100">
            <div className="flex flex-wrap">
      <Navbar/>
       <div className="w-full lg:w-12/12" >
       {/* <Navbar/> */}
       </div>
       <div id="mainPage" className='p-4 w-full'>
       <div className='rounded-md width96 marginauto outlineBorder p-4' >
       {/* {alertPopUp?<AlertPopUp/>:<div>false</div>} */}
       <div className="flex flex-wrap w-full lg:w-12/12 px-4">
        <div className='flex flex-wrap w-full px-4'>
        {props.children}
            </div>
            </div>
            </div>
           </div>
       </div>
                </div>
        </div>
    )
}