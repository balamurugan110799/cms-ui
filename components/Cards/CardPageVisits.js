import React, { useState } from 'react';
// import Edit from 'components/CRUD/edit'
import Add from 'components/CRUD/add'
// import Alret from 'components/CRUD/add'
import { AiFillDelete } from "react-icons/ai";
import { BsFillEyeFill } from "react-icons/bs";
import { BiEditAlt } from "react-icons/bi";

// components

export default function CardPageVisits() {

 
  const [sampleJSON, SetSampleJSON] = [{
    "arrOfObjects": [
      { "id": 1, "name": "Bala", "b": 1 }, {"id": 2, "name": "Murugan", "b": 2 }, { "id": 3,"name": "Balamurugan", "b": 3 },
      { "id": 1, "name": "Bala", "b": 4 }, {"id": 2, "name": "Murugan", "b": 5 }, { "id": 3,"name": "Balamurugan", "b": 6 },
      { "id": 1, "name": "Bala", "b": 4 }, {"id": 2, "name": "Murugan", "b": 5 }, { "id": 3,"name": "Balamurugan", "b": 6 },
      { "id": 1, "name": "Bala", "b": 4 }, {"id": 2, "name": "Murugan", "b": 5 }, { "id": 3,"name": "Balamurugan", "b": 6 },
      
  ]
  }]
 
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3 className="font-semibold text-base text-blueGray-700">
                Page visits
              </h3>
            </div>
            <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
            <Add  />
              {/* {addvalues?<Add onSubmitss={onSubmit}/>:<p>World</p>} */}
            </div>
          </div>
        </div>
        <table>
        <thead>
              <tr>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                 Name 
                </th>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  ID
                </th>
               
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  All in one
                </th>
              </tr>
            </thead>
        </table>
    
        <div className="block w-full overflow-x-auto" id="table">
       
        <table className="items-center w-full bg-transparent border-collapse" >
       
            <tbody>
            {sampleJSON.arrOfObjects.map((item, i) => {
          return <tr key={i}>
            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
            {item.name}
            </td>
            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
            {item.b}
            </td>
            
            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
           <div className='flex'>
           <BiEditAlt className='mr-4 h-5 w-15 cursor-pointer hover:text-icon-color'/>    <AiFillDelete className='mr-4 h-5 w-15 cursor-pointer hover:text-icon-color'/> <BsFillEyeFill className='mr-4 h-5 w-15 cursor-pointer hover:text-icon-color'/>
             </div> 
            </td> 
            
            </tr>
          
        })}
            </tbody>
          </table>

        </div>
        <div className="block w-full overflow-x-auto">
          {/* Projects table */}
          {/* <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Page name
                </th>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Visitors
                </th>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Unique users
                </th>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Bounce rate
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                  /argon/
                </th>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  4,569
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  340
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <i className="fas fa-arrow-up text-emerald-500 mr-4"></i>
                  46,53%
                </td>
              </tr>
              <tr>
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                  /argon/index.html
                </th>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  3,985
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  319
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <i className="fas fa-arrow-down text-orange-500 mr-4"></i>
                  46,53%
                </td>
              </tr>
              <tr>
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                  /argon/charts.html
                </th>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  3,513
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  294
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <i className="fas fa-arrow-down text-orange-500 mr-4"></i>
                  36,49%
                </td>
              </tr>
              <tr>
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                  /argon/tables.html
                </th>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  2,050
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  147
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <i className="fas fa-arrow-up text-emerald-500 mr-4"></i>
                  50,87%
                </td>
              </tr>
              <tr>
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                  /argon/profile.html
                </th>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  1,795
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  190
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <i className="fas fa-arrow-down text-red-500 mr-4"></i>
                  46,53%
                </td>
              </tr>
            </tbody>
          </table> */}
         
          {/* <h2>Array of Objects:</h2>
          <table>
            <tr>
            <th>
              Hello World
            </th>
            </tr>
            <tbody>
            {sampleJSON.arrOfObjects.map((item, i) => {
          return <tr key={i}>
            <td>
            {item.name}
            </td>
            <td>
            {item.b}
            </td>
            <td>
            <button onClick={()=> alert(item, i)} >Edit</button>
       
            </td> 
            <td>
            <button onClick={()=> deletevalues(item, i)}>Delete</button>
            </td> 
            
            </tr>
          
        })}
            </tbody>
          </table> */}
            {/* {edit?<Edit value={editvalue} />:<p>world</p>} */}
          {/* {alertPopUp?<AlertPopUp/>:<div>false</div>} */}
        </div>
      </div>
    </>
  );
}
