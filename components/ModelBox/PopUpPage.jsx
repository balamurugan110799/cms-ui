import React from "react";
import Warper from "./wraper";
import Popup from "reactjs-popup";
import { XCircleIcon } from '@heroicons/react/solid'
import { CheckCircleIcon, XIcon } from '@heroicons/react/solid'
import { ExclamationIcon } from '@heroicons/react/solid'

function PopUpMeassage(props) {
    const contentStyle = {
        maxWidth: "600px",
        width: "90%"
      };
      const AlertPopUP = () => (
        <Popup
          trigger={<button className="button"> Alert Button </button>}
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
             
              <div className="header-alert"><XCircleIcon className="h-17 w-5 mx-2 text-red-400" aria-hidden="true" /> Alert Popup </div>
              <div className="content">
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, a
                nostrum. Dolorem, repellat quidem ut, minima sint vel eveniet
                quibusdam voluptates delectus doloremque, explicabo tempore dicta
                adipisci fugit amet dignissimos?
                <br />
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur
                sit commodi beatae optio voluptatum sed eius cumque, delectus saepe
                repudiandae explicabo nemo nam libero ad, doloribus, voluptas rem
                alias. Vitae?
              </div>
              <div className="w-full flex lg:w-12/12 sm:w-12/12 px-4 p-1 pb-2">
                <div className=" lg:w-6/12 sm:w-12/12 px-4">
              
                </div>
                <div className="lg:w-6/12 sm:w-12/12 px-4">
                <button
                  className="alert-button"
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

      const SuccessPopUP = () => (
        <Popup
          trigger={<button className="button"> Success Button </button>}
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
             
              <div className="header-success"> <CheckCircleIcon className="h-17 w-5 mx-2 text-red-400" aria-hidden="true" /> Success Popup </div>
              <div className="content">
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, a
                nostrum. Dolorem, repellat quidem ut, minima sint vel eveniet
                quibusdam voluptates delectus doloremque, explicabo tempore dicta
                adipisci fugit amet dignissimos?
                <br />
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur
                sit commodi beatae optio voluptatum sed eius cumque, delectus saepe
                repudiandae explicabo nemo nam libero ad, doloribus, voluptas rem
                alias. Vitae?
              </div>
              <div className="w-full flex lg:w-12/12 sm:w-12/12 px-4 p-1 pb-2">
                <div className=" lg:w-6/12 sm:w-12/12 px-4">
              
                </div>
                <div className="lg:w-6/12 sm:w-12/12 px-4">
                <button
                  className="success-button"
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

      const WarningPopUp = () => (
        <Popup
          trigger={<button className="button"> Warning Button </button>}
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
             
              <div className="header-warning"> <ExclamationIcon  className="h-17 w-5 mx-2 text-red-400" aria-hidden="true" /> Warning Popup </div>
              <div className="content">
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, a
                nostrum. Dolorem, repellat quidem ut, minima sint vel eveniet
                quibusdam voluptates delectus doloremque, explicabo tempore dicta
                adipisci fugit amet dignissimos?
                <br />
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur
                sit commodi beatae optio voluptatum sed eius cumque, delectus saepe
                repudiandae explicabo nemo nam libero ad, doloribus, voluptas rem
                alias. Vitae?
              </div>
              <div className="w-full flex lg:w-12/12 sm:w-12/12 px-4 p-1 pb-2">
                <div className=" lg:w-6/12 sm:w-12/12 px-4">
              
                </div>
                <div className="lg:w-6/12 sm:w-12/12 px-4">
                <button
                  className="waring-button"
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
      const ModelBox = () => (
        <Popup
          trigger={<button className="button"> Open Modal </button>}
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
             
              <div className="header"> Modal Title </div>
              <div className="content">
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, a
                nostrum. Dolorem, repellat quidem ut, minima sint vel eveniet
                quibusdam voluptates delectus doloremque, explicabo tempore dicta
                adipisci fugit amet dignissimos?
                <br />
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur
                sit commodi beatae optio voluptatum sed eius cumque, delectus saepe
                repudiandae explicabo nemo nam libero ad, doloribus, voluptas rem
                alias. Vitae?
              </div>
              <div className="w-full flex lg:w-12/12 sm:w-12/12 px-4 p-1 pb-2">
                <div className=" lg:w-6/12 sm:w-12/12 px-4">
             
                </div>
                <div className="lg:w-6/12 sm:w-12/12 px-4">
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
      switch(props.type){
        case "alert" :
            return(
                <div>
                    <AlertPopUP/>
                </div>
            )

        case "success" :
            return(
                <div>
                    <SuccessPopUP/>
                </div>
            )
        case "warning" :
            return(
                <div>
                    <WarningPopUp/>
                </div>
            )
        case "modelbox" :
            return(
                <div>
                    <ModelBox/>
                </div>
            )
        }
}
export default PopUpMeassage