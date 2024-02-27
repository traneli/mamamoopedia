import './Discography.style.css';

import { useParams } from 'react-router';
import React, { useState, useContext } from "react";
import ModalGeneral from './ModalGeneral';
import * as utils from "../utils.js"

import { MamamooDiscographyData } from '../data/MamamooDiscographyData';

const DiscographyItem = ({ albumType }) => {
  const images = utils.importAll(require.context('../assets', false, /\.(png|jp?g|svg)/));
  const albumImages = utils.importAll(require.context('../assets/albums', false, /\.(png|jp?g|svg)/));

  const { id } = useParams();

  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedAlbumInfo, setSelectedAlbumInfo] = useState({});
  const [galleryType, setGalleryType] = useState();

  function handleModalClick(albumName, discographyType) {
    setGalleryType(discographyType);
    setSelectedAlbumInfo(albumName);
    setModalOpen(!isModalOpen);
  }

  function CheckAlbumType(type) {
    if(type == "albums" || id == undefined) {
      return (
        MamamooDiscographyData.albums.map(album => {
          <div class="discography-content-top-albums-gallery-album">
            <img src={albumImages[album.image].default} onClick={() => handleModalClick(album.name, utils.discographyType.ALBUMS)}/>
            <p class="discography-content-top-albums-gallery-album-header">{album.name}</p>
            <p class="discography-content-top-albums-gallery-album-subheader">{album.date}</p>
          </div>
        })
      )
    } else if (type == "solos") {
      MamamooDiscographyData.solos.map(album => {
        <div class="discography-content-top-albums-gallery-album">
          <img src={albumImages[album.image].default} onClick={() => handleModalClick(album.name, utils.discographyType.SOLOS)}/>
          <p class="discography-content-top-albums-gallery-album-header">{album.name}</p>
          <p class="discography-content-top-albums-gallery-album-subheader">{album.date}</p>
        </div>
      })
    } else if (type == "cfs") {
      MamamooDiscographyData.cfs.map(album => {
        <div class="discography-content-top-albums-gallery-album">
          <img src={albumImages[album.image].default} onClick={() => handleModalClick(album.name, utils.discographyType.CFS)}/>
          <p class="discography-content-top-albums-gallery-album-header">{album.name}</p>
          <p class="discography-content-top-albums-gallery-album-subheader">{album.date}</p>
        </div>
      })
    }
  }

  console.log(albumType)

  return (
    <>
      {
        <CheckAlbumType type={id}/>

        // MamamooTimelineData.timeline.map(era => {
        //   if(id == undefined && era.year === "2014") {
        //     return (
        //       <div class="timelineyear-data">
        //         {
        //           era.months.map(month => (
        //               <div class="timelineyear-data-element">
        //                 <h1>{month.month + " " + era.year}</h1>  
        //                 {
        //                   month.events.map(event => 
        //                     <>
        //                       <li>{event.description}</li>
        //                       {
        //                         event.img != "" ? <img src={images[`${event.img}`].default}/> : ""
        //                       }
        //                     </>
        //                   )
        //                 }
        //               </div>
        //             )
        //           )
        //         }
        //       </div>
        //     )
        //   } else if(era.year == id) {
        //     return (
        //       <div class="timelineyear-data">
        //         {
        //           era.months.map(month => (
        //               <div class="timelineyear-data-element">
        //                 <h1>{month.month + " " + era.year}</h1>  
        //                 {
        //                   month.events.map(event => 
        //                     <>
        //                       <li>{event.description}</li>
        //                       {
        //                         event.img != "" ? <img src={images[`${event.img}`].default}/> : ""
        //                       }
        //                     </>
        //                   )
        //                 }
        //               </div>
        //             )
        //           )
        //         }
        //       </div>
        //     )
        //   } else {
        //     return ""
        //   }
        // }
        // )
      }
    </>
  );
}

export default DiscographyItem;