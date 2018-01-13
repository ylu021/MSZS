import React from 'react';
import './modal.css';

const Modal = (props) => (
  <div>
    { props.show ?
      <div className='backdrop'>
        <div className='modal'>
          <div className='modal-content'>
            {props.children}
          </div>
          <div className='modal-footer'>
            <button
              className='modal-close-btn'
              onClick={props.onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
      : null
    }
  </div>
);

export default Modal;
