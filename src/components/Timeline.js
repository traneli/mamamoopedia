import './Timeline.style.css';

import React, { useState, useContext } from "react";
import * as utils from "../utils.js"
import PageTemplate from '../PageTemplate';
import TimelineNavigation from './TimelineNavigation';
import Carousel, { CarouselItem } from './Carousel';
import { MamamooDiscographyData } from '../data/MamamooDiscographyData';
import { MamamooTimelineData } from '../data/MamamooTimelineData';

import TimeLineContext from '../hoc/context/TimelineContext';

function Timeline() {
  const images = utils.importAll(require.context('../assets', false, /\.(png|jp?g|svg)/));
  const albumImages = utils.importAll(require.context('../assets/albums', false, /\.(png|jp?g|svg)/));

  const [activeTimelineIndex, setActiveTimelineIndex] = useState(0);
  const { selectedIndex, setIndex } = useContext(TimeLineContext);
  const value = { selectedIndex, setIndex };

  return (
    <div>
      <TimeLineContext.Provider value={value}>
        <PageTemplate>
          <section class="timeline-content">
            {/* <div class="temp-timeline-underconstruction-container">
              <h2>WAITING FOR RBW TO RESTOCK</h2>
              <h3>Under Construction</h3>
            </div> */}
            <div className="timeline-content-top">
              <img class="timeline-content-top-logo" src={images["mmm-logo-black.svg"].default}/>
              <h2>Timeline</h2>
              <TimelineNavigation list={MamamooTimelineData.timeline}/>
              {/* <Carousel>
                {
                  MamamooTimelineData.timeline.map((era, index) => 
                    <CarouselItem itemClass="carousel-item">
                      <h2>{era.year}</h2>
                      <div>
                        <div class="carousel-item-text">
                          {
                            era.events.map(event =>
                              <p>{event.date}</p>  
                            )
                          }
                        </div>
                    </div>
                    </CarouselItem>
                  )
                }
              </Carousel> */}
            </div>
            <div className="timeline-content-bottom">

            </div>
          </section>
        </PageTemplate>
      </TimeLineContext.Provider>
    </div>
  );
}

export default Timeline;