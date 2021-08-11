import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import './Discography.style.css';

import * as utils from "../utils.js"
import PageTemplate from '../PageTemplate';
import { MamamooDiscographyData } from '../data/MamamooDiscographyData';

// https://freefrontend.com/javascript-carousels/
// https://medium.com/@marcusmichaels/how-to-build-a-carousel-from-scratch-in-vanilla-js-9a096d3b98c9

const images = utils.importAll(require.context('../assets', false, /\.(png|jp?g|svg)/));
const albumImages = utils.importAll(require.context('../assets/albums', false, /\.(png|jp?g|svg)/));

function Carousel(props) {
  const [currPos, setPos] = useState(0);

  let position = 0;
  let currentAlbum = props.albumData[position];
  let currentImage = currentAlbum.image;

  const listAlbums = props.albumData.map((album) =>
    <div class ="discography-carousel-content" key={album.name}>
      <img class="discography-carousel-image" src={albumImages[currentImage].default}/>
      <div class="discography-carousel-text-container">
        <h1>{currentAlbum.name}</h1>
        <p class="discography-carousel-text-subheader">{currentAlbum.info}</p>
        <p>
          {currentAlbum.description}
        </p>
        <p><i>Click on the cover image to see the track list</i></p>
      </div>
    </div>
  );
  
  function moveRight(){
    // currentImage = props.albumData[position + 1].image;
    // position++;
    // currentImage = props.albumData[position].image;
    setPos(currPos + 1);
    currentImage = props.albumData[currPos].image;
    console.log("Pressed right button! " + currentImage + ", " + currPos);
  }

  function moveLeft(){
    // currentImage = props.albumData[position - 1].image;
    // position--;
    // currentImage = props.albumData[position].image;
    setPos(currPos - 1);
    currentImage = props.albumData[currPos].image;
    console.log("Pressed left button! " + currentImage + ", " + currPos);
  }

  return (
    <div class="discography-carousel-container">
      <button class="discography-carousel-arrow" onClick={moveLeft}>
        <img id="discography-carousel-left-btn" src={images["carousel_arrow_left.svg"].default}/>
      </button>
      {/* <div class="discography-carousel-content">
        <img class="discography-carousel-image" src={albumImages[currentImage].default}/>
        <div class="discography-carousel-text-container">
          <h1>{currentAlbum.name}</h1>
          <p class="discography-carousel-text-subheader">{currentAlbum.info}</p>
          <p>
            {currentAlbum.description}
          </p>
          <p><i>Click on the cover image to see the track list</i></p>
        </div>
      </div> */}
      {listAlbums}
      <button class="discography-carousel-arrow" onClick={moveRight}>
        <img id="discography-carousel-right-btn" src={images["carousel_arrow_right.svg"].default}/>
      </button>
    </div>
  )
}

function Discography() {
  let history = useHistory();

  function handleBackButton() {
    history.push("/");
  }

  return (
    <div>
      <PageTemplate>
        <div class="discography-content">
          <Carousel albumData={MamamooDiscographyData.albums}/>
        </div>
        {/* {MamamooDiscographyData.albums.map((data) => {
          return(
            <div class="discography-content">
              <Carousel albumData={data}/>
            </div>
          )
        })}; */}
        {/* <div class="discography-content">
          <Carousel imageList={images}/>
        </div> */}
        {/* {MamamooDiscographyData.albums.map((data, key) => {
          return (
            <div key={key}>
              <div class="discography-content">
                <Carousel imageList={data.image}/>
              </div>
              <img src={albumImages[data.image].default}/>
              {
                data.name + 
                " , " +
                data.info +
                " ," +
                data.description
              }
            </div>
          );
        })} */}
      </PageTemplate>
    </div>
  );
}

export default Discography;