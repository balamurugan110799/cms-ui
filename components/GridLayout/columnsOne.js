import React from 'react';
export default function Forms(props){
    return(
        <div className='w-full'>
           <div class="rounded-t bg-white w-full mb-0 px-6 py-6">
               <div class="text-center flex justify-between">
                   <h6 class="text-blueGray-700 text-xl font-bold">{props.heading}</h6>
                 
                   
                   </div>
                   </div>
                   <div className='flex flex-wrap w-full bg-white'>
                   {props.children}
                   </div>
           
            </div>
       
    )
}