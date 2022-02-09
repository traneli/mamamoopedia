import './Timeline.style.css';

import React from "react";
import * as utils from "../utils.js"
import PageTemplate from '../PageTemplate';
import Carousel, { CarouselItem } from './Carousel';
import { MamamooDiscographyData } from '../data/MamamooDiscographyData';
import { MamamooTimelineData } from '../data/MamamooTimelineData';

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
            <img class="timeline-content-top-logo" src={images["mmm-logo-brown.svg"].default}/>
            <h2>Timeline</h2>
            <Carousel>
            {/* {
              MamamooDiscographyData.albums.map(album => 
                <CarouselItem itemClass="carousel-item-album">
                  <img src={albumImages[album.image].default}/>
                </CarouselItem>
              )
            } */}
            {
              MamamooTimelineData.timeline.map(era => 
                <CarouselItem itemClass="carousel-item">
                  <h2>{era.year}</h2>
                  {/* {
                    era.events.map(event =>
                      <p>{event.date}</p>  
                    )
                  } */}
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