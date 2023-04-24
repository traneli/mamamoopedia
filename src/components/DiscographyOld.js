import './DiscographyOld.style.css';

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
  const [galleryType, setGalleryType] = useState();

  function handleModalClick(albumName, discographyType) {
    setGalleryType(discographyType);
    setSelectedAlbumInfo(albumName);
    setModalOpen(!isModalOpen);
  }

  return (
    <PageTemplate>
      <section class="discography-content">
        <ModalGeneral isModalOpen={isModalOpen} setModalOpen={handleModalClick} galleryType={galleryType} albumName={selectedAlbumInfo}/> 
        <div class="discography-content-top">
          <h2>Latest Release</h2>
          <p>In September 15, 2021, MAMAMOO returned with a compilation album 'I SAY MAMAMOO : THE BEST'</p>
        </div>
        <div class="discography-content-top-media">
          <div class="discography-content-top-media-img-wrapper">
            <img src={images["best_mmm_diamond.jpg"].default}/>
          </div>
          <Album album={MamamooDiscographyData.albums} showAlbum="I SAY MAMAMOO: THE BEST" formType={utils.generalForms.GALLERY}/>
        </div>
        <div class="discography-content-gallery">
          <h2 class="discography-content-gallery-header">ALBUMS</h2>
          <p class="discography-content-gallery-subheader">MAMAMOO has released a total of 11 mini albums and 2 full albums</p>
          <div class="discography-content-top-albums-gallery-container">
            <div class="discography-content-top-albums-gallery-content">
              {
                MamamooDiscographyData.albums.map(album => 
                  <div class="discography-content-top-albums-gallery-album">
                    <img src={albumImages[album.image].default} onClick={() => handleModalClick(album.name, utils.discographyType.ALBUMS)}/>
                    <p class="discography-content-top-albums-gallery-album-header">{album.name}</p>
                    <p class="discography-content-top-albums-gallery-album-subheader">{album.date}</p>
                  </div>
                )
              }
            </div>
          </div>
        </div>
        <div class="discography-content-gallery">
          <h2 class="discography-content-gallery-header">SOLOs</h2>
          <p class="discography-content-gallery-subheader">Aside from their group releases, MAMAMOO members have shown to have unique individual colors through their solo activities</p>
          <div class="discography-content-top-albums-gallery-container">
            <div class="discography-content-top-albums-gallery-content">
              {
                MamamooDiscographyData.solos.map(album => 
                  <div class="discography-content-top-albums-gallery-album">
                    <img src={albumImages[album.image].default} onClick={() => handleModalClick(album.name, utils.discographyType.SOLOS)}/>
                    <p class="discography-content-top-albums-gallery-album-header">{album.name}</p>
                    <p class="discography-content-top-albums-gallery-album-subheader">{album.date}</p>
                  </div>
                )
              }
            </div>
          </div>
        </div>
        <div class="discography-content-gallery">
          <h2 class="discography-content-gallery-header">CFs, SINGLES & OSTs</h2>
          <p class="discography-content-gallery-subheader">Throughout their whole career, MAMAMOO as a group and as individuals released several songs in this category</p>
          <div class="discography-content-top-albums-gallery-container">
            <div class="temp-underconstruction-container">
              <h2>WAITING FOR RBW TO RESTOCK</h2>
              <h3>Under Construction</h3>
            </div>
          </div>
        </div>
      </section>
    </PageTemplate>
  )
}

export default Discography;