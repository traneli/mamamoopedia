import './Discography.style.css';

import { useEffect, useState } from 'react';
import { BrowserRouter as Router, NavLink, Route } from "react-router-dom";
import Album from './Album';
import ModalGeneral from './ModalGeneral';
import PageTemplate from '../PageTemplate';
import DiscographyItem from './DiscographyItem';
import { MamamooDiscographyData } from '../data/MamamooDiscographyData';
import * as utils from "../utils.js"

import Modal from 'react-modal';

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

  function openPage(url) {
    window.open(url, "_blank");
  }

  const [currentDiscography, setCurrentDiscography] = useState("albums");

  // Modal.setAppElement(document.getElementById('discography-content-gallery'));

  return (
    <PageTemplate>
      <section class="discography-content">
        {isModalOpen && <ModalGeneral isModalOpen={true} setModalOpen={handleModalClick} galleryType={galleryType} albumName={selectedAlbumInfo} />}
        {/* <ModalGeneral isModalOpen={isModalOpen} setModalOpen={handleModalClick} galleryType={galleryType} albumName={selectedAlbumInfo}/>  */}
        <div class="discography-content-top">
          <img src={images["discography_header.jpg"]} alt="discography header cover" />
          <div class="discography-content-top-music">
            <p>LISTEN NOW ON</p>
            <button type="button" class="media-button" onClick={() => openPage("https://www.youtube.com/channel/UCNx0TXIuGVEA_TWB5H2I6Lg")}>
              <img class="icon" src={images["icon_youtube_GREEN.svg"]} alt="youtube icon" />
            </button>
            <button type="button" class="media-button" onClick={() => openPage("https://www.youtube.com/channel/UCNx0TXIuGVEA_TWB5H2I6Lg")}>
              <img class="icon" src={images["icon_vlive_WHITE.svg"]} alt="vlive icon" />
            </button>
            <button type="button" class="media-button" onClick={() => openPage("https://www.youtube.com/channel/UCNx0TXIuGVEA_TWB5H2I6Lg")}>
              <img class="icon" src={images["icon_spotify_GREEN.svg"]} alt="spotify icon" />
            </button>
          </div>
        </div>
        <div class="discography-content-top-media">
          <div class="discography-content-top-media-img-wrapper">
            <img src={images["best_mmm_diamond.jpg"]} alt="current comeback album cover" />
          </div>
          {/* <Album album={MamamooDiscographyData.albums} showAlbum="I SAY MAMAMOO: THE BEST" formType={utils.generalForms.GALLERY}/> */}
          {/* <iframe styles="border-radius:0" src="https://open.spotify.com/embed/album/4Wu52D5zdJ7HpcvkgxaESk" width="100%" height="100%" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe> */}
          <iframe styles="border-radius:12px" src="https://open.spotify.com/embed/album/4Wu52D5zdJ7HpcvkgxaESk?utm_source=generator" width="100%" height="auto" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </div>
        <div class="discography-content-bottom">
          <Router>
            <ul className="discography-header">
              <li><NavLink to={`/discography/albums`} className={`${currentDiscography === "albums" ? 'isActive' : 'notActive'}`} onClick={() => setCurrentDiscography("albums")}>ALBUMS</NavLink></li>
              <span class="discography-verticalline"></span>
              <li><NavLink to={`/discography/solos`} className={`${currentDiscography === "solos" ? 'isActive' : 'notActive'}`} onClick={() => setCurrentDiscography("solos")}>SOLOS</NavLink></li>
              <span class="discography-verticalline"></span>
              <li><NavLink to={`/discography/cfs`} className={`${currentDiscography === "cfs" ? 'isActive' : 'notActive'}`} onClick={() => setCurrentDiscography("cfs")}>CFs, COLLABs & OSTs</NavLink></li>
              <span class="discography-verticalline"></span>
            </ul>
            {/*** Timeline not in use ***/}
            {/* <div className="timeline-data">
              <Route exact path="/discography" component={DiscographyItem}/>
              <Route path="/discography/:id" component={DiscographyItem}/>
            </div> */}
          </Router>
        </div>
        {(() => {
          if (currentDiscography === "albums") {
            return (
              <div id="discography-content-gallery" class="discography-content-gallery">
                <h2 class="discography-content-gallery-header">ALBUMS</h2>
                <p class="discography-content-gallery-subheader">MAMAMOO has released a total of 11 mini albums and 2 full albums</p>
                <div class="discography-content-top-albums-gallery-container">
                  <div class="discography-content-top-albums-gallery-content">
                    {
                      MamamooDiscographyData.albums.map(album =>
                        <div key={album.name} class="discography-content-top-albums-gallery-album">
                          <img src={albumImages[album.image]} alt="album cover" onClick={() => handleModalClick(album.name, utils.discographyType.ALBUMS)} />
                          <p class="discography-content-top-albums-gallery-album-header">{album.name}</p>
                          <p class="discography-content-top-albums-gallery-album-subheader">{album.date}</p>
                        </div>
                      )
                    }
                  </div>
                </div>
              </div>
            )
          } else if (currentDiscography === "solos") {
            return (
              <div class="discography-content-gallery">
                <h2 class="discography-content-gallery-header">SOLOs</h2>
                <p class="discography-content-gallery-subheader">Aside from their group releases, MAMAMOO members have shown to have unique individual colors through their solo activities</p>
                <div class="discography-content-top-albums-gallery-container">
                  <div class="discography-content-top-albums-gallery-content">
                    {
                      MamamooDiscographyData.solos.map(album =>
                        <div key={album.name} class="discography-content-top-albums-gallery-album">
                          <img src={albumImages[album.image]} onClick={() => handleModalClick(album.name, utils.discographyType.SOLOS)} />
                          <p class="discography-content-top-albums-gallery-album-header">{album.name}</p>
                          <p class="discography-content-top-albums-gallery-album-subheader">{album.date}</p>
                        </div>
                      )
                    }
                  </div>
                </div>
              </div>
            )
          } else if (currentDiscography === "cfs") {
            return (
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
            )
          }
        })()}
        {/* <div class="discography-content-gallery">
          <h2 class="discography-content-gallery-header">ALBUMS</h2>
          <p class="discography-content-gallery-subheader">MAMAMOO has released a total of 11 mini albums and 2 full albums</p>
          <div class="discography-content-top-albums-gallery-container">
            <div class="discography-content-top-albums-gallery-content">
              {
                MamamooDiscographyData.albums.map(album => 
                  <div class="discography-content-top-albums-gallery-album">
                    <img src={albumImages[album.image]} alt="album cover" onClick={() => handleModalClick(album.name, utils.discographyType.ALBUMS)}/>
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
                    <img src={albumImages[album.image]} onClick={() => handleModalClick(album.name, utils.discographyType.SOLOS)}/>
                    <p class="discography-content-top-albums-gallery-album-header">{album.name}</p>
                    <p class="discography-content-top-albums-gallery-album-subheader">{album.date}</p>
                  </div>
                )
              }
            </div>
          </div>
        </div> */}
        {/* <div class="discography-content-gallery">
          <h2 class="discography-content-gallery-header">CFs, SINGLES & OSTs</h2>
          <p class="discography-content-gallery-subheader">Throughout their whole career, MAMAMOO as a group and as individuals released several songs in this category</p>
          <div class="discography-content-top-albums-gallery-container">
            <div class="temp-underconstruction-container">
              <h2>WAITING FOR RBW TO RESTOCK</h2>
              <h3>Under Construction</h3>
            </div>
          </div>
        </div> */}
      </section>
    </PageTemplate>
  )
}

export default Discography;