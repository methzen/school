import React from 'react';


const Modal = ({ handleClose, show, children }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";

    return (
      <div className={showHideClassName}>
        <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
        <div className="modal-header">
        <h5 className="modal-title">Modal title</h5>
      </div>
      <div className="modal-body">
      {children}
      </div>
      <div className="modal-footer">
      <button type="button" className="btn btn-secondary"  onClick={handleClose}>
            Close
          </button>
        </div>

          </div>
        </div>
      </div>
    );
}
 
export default Modal;