import './Discography.style.css';

import * as utils from "../utils.js"
import PageTemplate from '../PageTemplate';
import ModalGeneral from './ModalGeneral';
import { MamamooDiscographyData } from '../data/MamamooDiscographyData';

function Discography() {
  const images = utils.importAll(require.context('../assets', false, /\.(png|jp?g|svg)/));
  const albumImages = utils.importAll(require.context('../assets/albums', false, /\.(png|jp?g|svg)/));

  function AlbumDataList(props) {
    const albumData = props.album;
    const albumToShow = props.showAlbum;
    const allData = props.showAllData;
    let selectedAlbum = "";

    console.log(albumData.length);

    for(var i = 0; i < albumData.length; i++) {
      if(albumData[i].name.toLowerCase() === albumToShow.toLowerCase()) {
        selectedAlbum = albumData[i];
      }
    }

    if(allData.toLowerCase() === "false") {
      return (
        <img src={albumImages[selectedAlbum.image].default}/>
      )
    } else {
      return (
        <div class="discography-content-top-media-player-box-content">
          <div class="discography-content-top-media-player-box-top">
            <img src={albumImages[selectedAlbum.image].default}/>
            <div class="discography-content-top-media-player-box-top-text-container">
              <p class="discography-content-top-media-player-box-top-album-type">{selectedAlbum.type}</p>
              <h1 class="discography-content-top-media-player-box-top-album-title">{selectedAlbum.name}</h1>
              <p class="discography-content-top-media-player-box-top-album-information">{selectedAlbum.info}</p>
              <p class="discography-content-top-media-player-box-top-album-description">{selectedAlbum.description}</p>
            </div>
          </div>
          <div class="discography-content-top-media-player-box-bottom">
            {
              selectedAlbum.songs.map(song => 
                <div class="discography-content-top-media-player-box-bottom-row">
                  <p class="discography-content-top-media-player-box-bottom-row-artist">{song.name}</p>
                  <div class="discography-content-top-media-player-box-bottom-row-inner">
                    <p>{song.artist.toUpperCase()}</p>
                    <p>{song.length}</p>
                  </div>
                </div>
              )
            }
          </div>
      </div>
      )
    }
  }

  return (
    <PageTemplate>
      <section class="discography-content">
        <div class="discography-content-top">
          <h2>LATEST RELEASE</h2>
          <p>In June 02, 2021, MAMAMOO returned with their 11th mini album 'WAW'</p>
        </div>
        <div class="discography-content-top-media">
          <div class="discography-content-top-media-img-wrapper">
            <img src={images["waw_group.jpg"].default}/>
          </div>
          <AlbumDataList album={MamamooDiscographyData.albums} showAlbum="waw" showAllData="true"/>
        </div>
        <div class="discography-content-top-albums">
          {/* <ModalGeneral/> */}
          <h2 class="discography-content-top-albums-header">ALBUMS</h2>
          <p class="discography-content-top-albums-subheader">MAMAMOO has released a total of 11 mini albums and 2 full albums</p>
          <div class="discography-content-top-albums-gallery-container">
            <div class="discography-content-top-albums-gallery-content">
              {
                MamamooDiscographyData.albums.map(album => 
                  <div class="discography-content-top-albums-gallery-album">
                    <img src={albumImages[album.image].default}/>
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