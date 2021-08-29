import './Discography.style.css';

import * as utils from "../utils.js"
import Album from './Album';
import ModalGeneral from './ModalGeneral';
import PageTemplate from '../PageTemplate';
import { MamamooDiscographyData } from '../data/MamamooDiscographyData';
import { useEffect, useState } from 'react';

function Discography() {
  const images = utils.importAll(require.context('../assets', false, /\.(png|jp?g|svg)/));
  const albumImages = utils.importAll(require.context('../assets/albums', false, /\.(png|jp?g|svg)/));

  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedAlbumInfo, setSelectedAlbumInfo] = useState({});

  function handleModalClick(albumName) {
    setSelectedAlbumInfo(albumName);
    setModalOpen(!isModalOpen);
  }

  return (
    <PageTemplate>
      <section class="discography-content">
        <ModalGeneral isModalOpen={isModalOpen} setModalOpen={handleModalClick} albumName={selectedAlbumInfo}/> 
        <div class="discography-content-top">
          <h2>LATEST RELEASE</h2>
          <p>In June 02, 2021, MAMAMOO returned with their 11th mini album 'WAW'</p>
        </div>
        <div class="discography-content-top-media">
          <div class="discography-content-top-media-img-wrapper">
            <img src={images["waw_group.jpg"].default}/>
          </div>
          <Album album={MamamooDiscographyData.albums} showAlbum="waw" formType={utils.generalForms.GALLERY}/>
        </div>
        <div class="discography-content-top-albums">
          <h2 class="discography-content-top-albums-header">ALBUMS</h2>
          <p class="discography-content-top-albums-subheader">MAMAMOO has released a total of 11 mini albums and 2 full albums</p>
          <div class="discography-content-top-albums-gallery-container">
            <div class="discography-content-top-albums-gallery-content">
              {
                MamamooDiscographyData.albums.map(album => 
                  <div class="discography-content-top-albums-gallery-album">
                    <img src={albumImages[album.image].default} onClick={() => handleModalClick(album.name)}/>
                    <p class="discography-content-top-albums-gallery-album-header">{album.name}</p>
                    <p class="discography-content-top-albums-gallery-album-subheader">{album.date}</p>
                  </div>
                )
              }
            </div>
          </div>
        </div>
      </section>
    </PageTemplate>
  )
}

export default Discography;