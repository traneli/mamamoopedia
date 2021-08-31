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
  let galleryType = null;
  if(props.galleryType !== undefined) {
    // galleryType = Object.keys(MamamooDiscographyData).find(type => type === props.galleryType.toLowerCase())

    switch(props.galleryType){
      case utils.discographyType.ALBUMS:
        galleryType = MamamooDiscographyData.albums;
        break;
      case utils.discographyType.SOLOS:
        galleryType = MamamooDiscographyData.solos;
        break;
      case utils.discographyType.CFS:
        galleryType = MamamooDiscographyData.cfs;
        break;
    }

  } else {
    return(null);
  }
  
  return (
    <div>
      <Modal
        isOpen={props.isModalOpen}
        onRequestClose={props.setModalOpen}
        className="Modal"
        overlayClassName="Overlay"
      >
        <Album album={galleryType} showAlbum={props.albumName} formType={utils.generalForms.MODAL}/>
        {/* <Album album={galleryType} showAlbum={props.albumName} formType={utils.generalForms.MODAL}/> */}
      </Modal>
    </div>
  );
}

export default ModalGeneral;