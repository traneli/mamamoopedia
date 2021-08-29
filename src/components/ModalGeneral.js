import React, { useState } from "react";
import Modal from "react-modal";
import Album from "./Album";
import * as utils from "../utils.js"
import { MamamooDiscographyData } from '../data/MamamooDiscographyData';

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

function ModalGeneral(props){
  return (
    <div>
      <Modal
        isOpen={props.isModalOpen}
        onRequestClose={props.setModalOpen}
        className="Modal"
        overlayClassName="Overlay"
      >
        <Album album={MamamooDiscographyData.albums} showAlbum={props.albumName} formType={utils.generalForms.MODAL}/>
      </Modal>
    </div>
  );
}

export default ModalGeneral;