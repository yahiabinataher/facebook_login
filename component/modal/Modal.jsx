import React from 'react'
import { LiaTimesSolid } from "react-icons/lia";
import "./Modal.scss"


    const Modal = ({children,hide}) => {
  return (
    <>
    <div className="modal_area">
        <div className="modal_container container">
            <div className="modal_header">
                <div className="header_con">
                    <h2>Sign Up</h2>
                    <p>Its quick and easy</p>
                </div>
                <button onClick={() => hide(false)}><LiaTimesSolid/>
</button>
            </div>
            <div className="modal_body">{children}</div>
        </div>
    </div>
    </>
  )
}

export default Modal