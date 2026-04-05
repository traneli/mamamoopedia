import './Discography.style.css';

import * as utils from "../utils.js"

const albumImages = utils.importAll(require.context('../assets/albums', false, /\.(png|jp?g|svg)/));
//const albumImagesBorderless = utils.importAll(require.context('../assets/albums/borderless_albums', false, /\.(png|jp?g|svg)/));

function Album(props) {
  const albumData = props.album;
  const albumToShow = props.showAlbum;
  const formType = props.formType;
  let selectedAlbum = "";

  if(albumToShow.length){
    selectedAlbum = albumData.find(album => album.name.toLowerCase() === albumToShow.toLowerCase())
  } else {
    return (null);
  }

  if(formType === utils.generalForms.PICTURE) {
    return (
      <img src={albumImages[selectedAlbum.image]} alt="album cover"/>
    )
  } else if(formType === utils.generalForms.MODAL) {
    return (
      <div class="discography-content-top-media-player-box-content-modal">
        <div class="discography-content-top-media-player-box-top-modal">
          <img src={albumImages[selectedAlbum.image]} alt="album cover"/>
          <div class="discography-content-top-media-player-box-top-text-container-modal">
            <p class="discography-content-top-media-player-box-top-album-type">{selectedAlbum.type}</p>
            <h1 class="discography-content-top-media-player-box-top-album-title-modal">{selectedAlbum.name}</h1>
            <p class="discography-content-top-media-player-box-top-album-information">{selectedAlbum.info}</p>
            <p class="discography-content-top-media-player-box-top-album-description">{selectedAlbum.description}</p>
          </div>
        </div>
        <div class="discography-content-top-media-player-box-bottom-modal">
          {/* <iframe styles="border-radius:0" src="https://open.spotify.com/embed/album/2yApvdfgG74FlAW2L4tlTW?utm_source=generator" width="100%" height="100%" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe> */}
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
  } else {
    return (
      <div class="discography-content-top-media-player-box-content">
        <div class="discography-content-top-media-player-box-top-gallery">
          <img src={albumImages[selectedAlbum.image]} alt="album cover"/>
          <div class="discography-content-top-media-player-box-top-text-container-gallery">
            <p class="discography-content-top-media-player-box-top-album-type">{selectedAlbum.type}</p>
            <h1 class="discography-content-top-media-player-box-top-album-title">{selectedAlbum.name}</h1>
            <p class="discography-content-top-media-player-box-top-album-information">{selectedAlbum.info}</p>
            <p class="discography-content-top-media-player-box-top-album-description">{selectedAlbum.description}</p>
          </div>
        </div>
        <div class="discography-content-top-media-player-box-bottom">
          {
            selectedAlbum.songs.map(song => 
              <div class="discography-content-top-media-player-box-bottom-row-gallery">
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

export default Album;