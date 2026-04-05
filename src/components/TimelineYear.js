import './Timeline.style.css';

import { useParams } from 'react-router';
import React, { useState, useContext } from "react";
import * as utils from "../utils.js"

import { MamamooTimelineData } from '../data/MamamooTimelineData';

const TimelineYear = ({ year }) => {
  const images = utils.importAll(require.context('../assets', false, /\.(png|jp?g|svg)/));
  const albumImages = utils.importAll(require.context('../assets/albums', false, /\.(png|jp?g|svg)/));

  const years = MamamooTimelineData.timeline.map(era => era.year);

  const { id } = useParams();

  return (
    <>
      {
        MamamooTimelineData.timeline.map(era => {
          if(id == undefined && era.year === "2014") {
            return (
              <div class="timelineyear-data">
                {
                  era.months.map(month => (
                      <div class="timelineyear-data-element">
                        <h1>{month.month + " " + era.year}</h1>  
                        {
                          month.events.map(event => 
                            <>
                              <li>{event.description}</li>
                              {
                                event.img != "" ? <img src={images[`${event.img}`].default}/> : ""
                              }
                            </>
                          )
                        }
                        <span class="member-page-information-gradient-line"></span>
                      </div>
                    )
                  )
                }
              </div>
            )
          } else if(era.year == id) {
            return (
              <div class="timelineyear-data">
                {
                  era.months.map(month => (
                      <div class="timelineyear-data-element">
                        <h1>{month.month + " " + era.year}</h1>  
                        {
                          month.events.map(event => 
                            <>
                              <li>{event.description}</li>
                              {
                                event.img != "" ? <img src={images[`${event.img}`].default}/> : ""
                              }
                            </>
                          )
                        }
                        <span class="member-page-information-gradient-line"></span>
                      </div>
                    )
                  )
                }
              </div>
            )
          } else {
            return ""
          }
        // MamamooTimelineData.timeline.map(era => {
        //   return era.year == id ? 
        //     <div>
        //       {
        //         era.months.map(month => 
        //           <>
        //             <h1>{month.month + " " + era.year}</h1>
        //             {
        //               month.events.map(event =>
        //                 <li>{event.description}</li>
        //               )
        //             }
        //           </>
        //         )
        //       }
        //     </div>
        //   :
        //     <></>
        }
        )
      }
    </>
  );
}

export default TimelineYear;