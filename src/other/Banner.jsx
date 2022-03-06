import React from 'react';
import { Alert } from 'react-bootstrap';
// import OffCanvas from 'react-aria-offcanvas';
import { BsFillExclamationTriangleFill } from "react-icons/bs";
import { BsX } from "react-icons/bs";



//
// This was originally intended to be an Offcanvas element via react-aria-offcanvas
// But a div with a display prop ended up being the best option
//
const Banner = (props) => {



  // const style = {
  //   overlay: {
      
  //     //maxHeight: "3vh",
  //     background: "none",
  //     width: "0vw",
  //     height: "0vh",

  //   },
  //   content: {

  //     background: "rgba(255, 255, 255, 0)",
  //     width: "100vw",
      
  //     //maxHeight: "4vh"
      

  //   }
  // }

    return (
    <div className={props.show ? "" : "d-none"}>

        <Alert variant="warning" className="my-0 py-0 d-flex">
          <BsFillExclamationTriangleFill className="mr-1 ml-auto my-1 justify-content-center align-content-center d-flex" />
          <div className="d-flex justify-content-center align-content-center text-center">This is an active project and site changes are still being implemented.</div> 
        <BsX onClick={props.handleClose} style={{"transform": "scale(1.5,1.5)"}} className="d-flex justify-content-end ml-auto my-1" />


        </Alert>  

        {/* <OffCanvas

          position={"top"}
          style={style}
          isOpen={props.show}
          labelledby="menu-button"
          trapFocusAfterOpen={false}
          lockBodyAfterOpen={false}
          mainContainerSelector={".App"}
        >

       <Alert variant="warning" className="my-0 py-0 d-flex">


        <BsFillExclamationTriangleFill className="mr-1 ml-auto my-1 justify-content-center align-content-center d-flex" />
        <div className="d-flex justify-content-center align-content-center text-center">This is an active project and site changes are still being implemented.</div> 
      
        <BsX onClick={props.handleClose} style={{"transform": "scale(1.5,1.5)"}} className="d-flex justify-content-end ml-auto my-1" />

      </Alert>  

        </OffCanvas> */}



    </div>
        )
}

export default Banner;
