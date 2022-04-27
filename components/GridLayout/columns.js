import React from 'react';
import GirdFour from './gridFour';
export default function Columns(props){
    switch(props.Columns){
        case '2':
            return(<div className='flex flex-wrap lg:w-6/12 md:w-6/12 sm:w-12/12 my-4 px-6'>
            <div className='w-full flex-wrap lg:w-12/12  '>
            {props.children}
            </div>
            </div>)
        case '3':
            return(
                <div className='flex flex-wrap lg:w-4/12  md:w-6/12 sm:w-12/12 my-4 px-6'>
                <div className='w-full flex-wrap lg:w-12/12  '>
                {props.children}
                </div>
                </div>
            )
        case '4':
            return(
                <div className='flex flex-wrap lg:w-3/12 md:w-6/12 sm:w-12/12 my-4 px-6'>
                <div className='w-full flex-wrap lg:w-12/12  '>
                {props.children}
                </div>
                </div>
            ) 
        default:
            return(
                <div className='w-full flex flex-wrap lg:w-12/12 md:w-12/12 sm:w-12/12  my-4'>
                <div className='w-full flex-wrap lg:w-12/12  '>
                {props.children}
                </div>
                </div>
            )     
    }
    
}