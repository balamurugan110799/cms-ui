import React from 'react'

export default function ActionBar(){
    return(
        <div class="w-full bg-white grid justify-items-end my-4 px-4">
            <div className='rounded-t mb-0 px-4 py-3 border-0'>

            
            <button className='bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'>
                    Action Bar
            </button>
            </div>
            
        </div>
    )
}