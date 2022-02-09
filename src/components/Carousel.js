/* https://stackoverflow.com/questions/29546550/flexbox-4-items-per-row Dynamic flex box*/

import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";
import * as utils from '../utils.js';

import './Carousel.style.css';

export const CarouselItem = ({ children, width, itemClass }) => {
  return (
    <div className={itemClass} style={{ width: width }}>
      {children}
    </div>
  );
};

const Carousel = ({ children }) => {
  const images = utils.importAll(require.context('../assets', false, /\.(png|jp?g|svg)/));

  const [activeIndex, setActiveIndex] = useState(0);

  const updateIndex = (newIndex) => {
    if(newIndex < 0) {
      newIndex = 0;
    } else if(newIndex >= React.Children.count(children)) {
      newIndex = React.Children.count(children) - 1;
    }

    setActiveIndex(newIndex);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => updateIndex(activeIndex + 1),
    onSwipedRight: () => updateIndex(activeIndex - 1)
  });
  
  return (
    <>
      <div className="carousel-container">
        <div className="indicators">
          <img class="indicator-button" src={images["carousel_arrow_left.svg"].default} onClick={() => updateIndex(activeIndex - 1)}/>
        </div>
        <div 
          {...handlers}
          className="carousel"
        >
          <div className="inner"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {React.Children.map(children, (child, index) => {
            return React.cloneElement(child, { width: "100%" });
          })}
          </div>
        </div>
        <div className="indicators">
          <img class="indicator-button" src={images["carousel_arrow_right.svg"].default} onClick={() => updateIndex(activeIndex + 1)}/>
        </div>
      </div>
      <div className="carousel-page-labels">
        {
          React.Children.map(children, (child, index) => {
            return (
              <button
                className={`${index === activeIndex ? "active" : ""}`}
                onClick={() => {
                  updateIndex(index);
                }}
              >
              </button>
            );
          })
        }
      </div>
    </>
  );
};

export default Carousel;