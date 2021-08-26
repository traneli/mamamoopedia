import React, { useState } from "react";
import Modal from "react-modal";

// https://react-bootstrap.github.io/components/modal/

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
}

Modal.setAppElement(document.getElementById('Main'));

function ModalGeneral() {
  var subtitle;
  const [modalIsOpen,setIsOpen] = React.useState(false);
  
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal(){
    setIsOpen(false);
  }

    return (
      <div>
        <button onClick={openModal}>General</button>
        <Modal
          isOpen={modalIsOpen}
          // onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          // style={customStyles}
          // contentLabel="Example Modal"
          className="Modal"
          overlayClassName="Overlay"
        >
          <button onClick={closeModal}>Close</button>
        </Modal>
      </div>
    );
}

export default ModalGeneral;