import './Discography.style.css';

import * as utils from "../utils.js"
import PageTemplate from '../PageTemplate';
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
        // <>
        // {
        //   <img src={albumImages[selectedAlbum.image]}/>
        // }
        // </>
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
          {/* <div class="discography-content-top-media-player-box-bottom">
            <p>test</p>
          </div> */}
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
          <div class="discography-content-top-media-player-box-content">
            <div class="discography-content-top-media-player-box-top">
              {/* <img src={albumImages["mamamoo_waw.jpg"].default}/> */}
              <AlbumDataList album={MamamooDiscographyData.albums} showAlbum="waw" showAllData="true"/>
              {/* <div class="discography-content-top-media-player-box-top-text-container">
                <p class="discography-content-top-media-player-box-top-album-type">EP</p>
                <h1 class="discography-content-top-media-player-box-top-album-title">WAW</h1>
                <p class="discography-content-top-media-player-box-top-album-information">2021 - 4 songs, 12 minutes 26 seconds</p>
                <p class="discography-content-top-media-player-box-top-album-description">MAMAMOO’s eleventh mini album released on June 02, 2021. This is part of the WAW project made to celebrate the group’s seventh anniversary. The Japanese edition of WAW will be released on September 29, 2021.</p>
              </div> */}
            </div>
            <div class="discography-content-top-media-player-box-bottom">
              {/* <div class="discography-content-top-media-player-box-bottom-row" id="discography-content-first-row">
                <p class="discography-content-top-media-player-box-bottom-row-artist">Where Are We Now (Title track)</p>
                <div class="discography-content-top-media-player-box-bottom-row-inner">
                  <p>MAMAMOO</p>
                  <p>3:43</p>
                </div>
              </div> */}
              {
                MamamooDiscographyData.albums[MamamooDiscographyData.albums.length - 1].songs.map(song => {
                  console.log(song);
                  return (
                    // <div class="discography-content-top-media-player-box-bottom-row" id="discography-content-first-row">
                    <div class="discography-content-top-media-player-box-bottom-row">
                      <p class="discography-content-top-media-player-box-bottom-row-artist">{song.name}</p>
                      <div class="discography-content-top-media-player-box-bottom-row-inner">
                        <p>{song.artist.toUpperCase()}</p>
                        <p>{song.length}</p>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </section>
    </PageTemplate>
  )
}

export default Discography;