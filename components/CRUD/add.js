import React from "react";
import Warper from "../CRUD/wraper";
import Popup from "reactjs-popup";
import { XCircleIcon } from '@heroicons/react/solid'
import Columns from '../GridLayout/columns'
import Forms from '../GridLayout/columnsOne'

//

const contentStyle = {
  maxWidth: "600px",
  width: "90%"
};

const CustomModal = () => (
  <Popup
    trigger={<button className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" > Add Button </button>}
    modal
    contentStyle={contentStyle}
  >
    {close => (
      <div className="modal">
        <div className="">
          <div className="width96 flex justify-end">
          <a className="close" onClick={close}>
          &times;
        </a>
          </div>
       
        </div>
       
        <div className="header">Add </div>

        <div className="content-popup">
       <div className="flex flex-wrap w-full px-4 mt-2">


          <Columns Columns='2'>
          <input
        type="text"
        className="h-32 border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
        placeholder="Input Box"
        />
          </Columns>
          <Columns Columns='2'>
          <input
        type="text"
        className="h-32 border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
        placeholder="Input Box"
        />
          </Columns>
          </div>
          {" "}
        
        </div>
        <div className="w-full flex lg:w-12/12 sm:w-12/12 px-4 p-1 pb-2">
          <div className=" lg:w-6/12 sm:w-12/12 px-4">
        
          </div>
          <div className="lg:w-6/12 sm:w-12/12 px-4 pt-2">
          <button
            className="button"
            onClick={() => {
              console.log("modal closed ");
              close();
            }}
          >
            close modal
          </button>
          </div>
       
        </div>
        
      </div>
    )}
  </Popup>
);

export default Warper(CustomModal);
