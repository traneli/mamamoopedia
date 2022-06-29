import './Timeline.style.css';

import { useParams } from 'react-router';
import React, { useState, useContext } from "react";
import * as utils from "../utils.js"

import { MamamooTimelineData } from '../data/MamamooTimelineData';

function TimelineYear() {
  const images = utils.importAll(require.context('../assets', false, /\.(png|jp?g|svg)/));
  const albumImages = utils.importAll(require.context('../assets/albums', false, /\.(png|jp?g|svg)/));

  const { id } = useParams();

  return (
    <div>
      {
        MamamooTimelineData.timeline.map(era => {
          return era.year == id ? 
            <div>
              {
                era.months.map(month => 
                  <>
                    <h1>{month.month + " " + era.year}</h1>
                    {
                      month.events.map(event =>
                        <li>{event.description}</li>
                      )
                    }
                  </>
                )
              }
            </div>
          :
            <></>
        }
        )
      }
    </div>
  );
}

export default TimelineYear;