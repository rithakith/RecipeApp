import React from "react";
import './Modal.css'
function Modal({children}) {
  return (
    <>
      <div className="modalbackdropUnique">
        <div className="modalUnique">
         {children}
        </div>
      </div>
    </>
  );
}

export default Modal;
