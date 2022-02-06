import './Timeline.style.css';

import React from "react";
import * as utils from "../utils.js"
import PageTemplate from '../PageTemplate';
import Carousel, { CarouselItem } from './Carousel';
import { MamamooDiscographyData } from '../data/MamamooDiscographyData';

function Timeline() {
  const images = utils.importAll(require.context('../assets', false, /\.(png|jp?g|svg)/));
  const albumImages = utils.importAll(require.context('../assets/albums', false, /\.(png|jp?g|svg)/));

  return (
    <div>
      <PageTemplate>
        <section class="timeline-content">
          {/* <div class="temp-timeline-underconstruction-container">
            <h2>WAITING FOR RBW TO RESTOCK</h2>
            <h3>Under Construction</h3>
          </div> */}
          <div className="timeline-content-top">
            <img class="timeline-content-top-logo" src="/static/media/mmm-logo-brown.667929c5.svg"/>
            <h2>Timeline</h2>
            <Carousel>
            {/* <CarouselItem>Item 1</CarouselItem>
            <CarouselItem>Item 2</CarouselItem>
            <CarouselItem>Item 3</CarouselItem> */}
            {
              MamamooDiscographyData.albums.map(album => 
                <CarouselItem>
                  <img src={albumImages[album.image].default}/>
                </CarouselItem>
              )
            }
          </Carousel>
          </div>
        </section>
      </PageTemplate>
    </div>
  );
}

export default Timeline;