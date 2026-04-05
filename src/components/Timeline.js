import './Timeline.style.css';

import { BrowserRouter as Router, NavLink, Route } from "react-router-dom";
import React, { useState, useContext } from "react";
import * as utils from "../utils.js"
import PageTemplate from '../PageTemplate';
import TimelineNavigation from './TimelineNavigation';
import Carousel, { CarouselItem } from './Carousel';
import TimelineYear from './TimelineYear';
import SocialMediaButtons from '../components/SocialMediaButtons.js';
import { MamamooTimelineData } from '../data/MamamooTimelineData';

import TimeLineContext from '../hoc/context/TimelineContext';

function Timeline() {
  const activeStyle = {
    color: "#55A965"
  };

  const years = MamamooTimelineData.timeline.map(era => era.year);

  const images = utils.importAll(require.context('../assets', false, /\.(png|jp?g|svg)/));
  const albumImages = utils.importAll(require.context('../assets/albums', false, /\.(png|jp?g|svg)/));

  const [activeTimelineIndex, setActiveTimelineIndex] = useState(0);
  const { selectedIndex, setIndex } = useContext(TimeLineContext);

  const [currentYear, setCurrentYear] = useState(years[0]);

  return (
    <PageTemplate>
      <section class="timeline-content">
        <div class="timeline-content-top">
          <img src={images["mmm_timeline_banner.jpg"]}/>
        </div>
        <div class="timeline-content-bottom">
          <Router>
            <ul className="timeline-header">
            {
              years.map(year =>
                // <li><NavLink to={`/timeline/${year}`} activeStyle={activeStyle}>{year}</NavLink></li> 
                <>
                  <li><NavLink to={`/timeline/${year}`} className={`${currentYear === year ? 'isActive' : 'notActive'}`} onClick={() => setCurrentYear(year)}>{year}</NavLink></li> 
                  <span class="timeline-verticalline"></span>
                </>
              )
            }
            </ul>
            <div className="timeline-data">
              <Route exact path="/timeline" component={TimelineYear}/>
              <Route path="/timeline/:id" component={TimelineYear}/>
              {/* {
                years.map(year => 
                  <Route path="/timeline/:id" render={(props) => <Timeline {...props} year={year} />}/>
                )
              } */}
            </div>
          </Router>
        </div>
        <footer class="about-content-footer">
          <p>Get connected with MAMAMOO</p>
          <SocialMediaButtons background="color"/>
        </footer>
      </section>
    </PageTemplate>
  );

  // return (
  //   <div>
  //       <PageTemplate>
  //         <section class="timeline-content">
  //           <div className="timeline-content-top">
  //             <img class="timeline-content-top-logo" src={images["mmm-logo-black.svg"]}/>
  //             <h2>Timeline</h2>
  //             <TimelineNavigation list={MamamooTimelineData.timeline}/>
  //             {/* <Carousel>
  //               {
  //                 MamamooTimelineData.timeline.map((era, index) => 
  //                   <CarouselItem itemClass="carousel-item">
  //                     <h2>{era.year}</h2>
  //                     <div>
  //                       <div class="carousel-item-text">
  //                         {
  //                           era.events.map(event =>
  //                             <p>{event.date}</p>  
  //                           )
  //                         }
  //                       </div>
  //                   </div>
  //                   </CarouselItem>
  //                 )
  //               }
  //             </Carousel> */}
  //           </div>
  //           <div className="timeline-content-bottom">

  //           </div>
  //         </section>
  //       </PageTemplate>
  //   </div>
  // );
}

export default Timeline;