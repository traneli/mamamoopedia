import { toBeEmptyDOMElement } from "@testing-library/jest-dom/dist/matchers";
import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import './Timeline.style.css';

const JsonToArray = (jsonData) => {
  const arr = [];
  Object.keys(jsonData).map(key => arr.push({ year: jsonData[key].year, events: jsonData[key].events}));
  arr.sort((a, b) => 
    a.year - b.year
  );
  return arr;
}

const TimelineNavigation = (props) => {
  const [selectedYear, setSelectedYear] = useState("2014");
  const [selectedYearData, setSelectedYearData] = useState(0);

  const sortedTimelineData = JsonToArray(props.list);

  console.log(sortedTimelineData[0])

  const activeStyle = {
    fontWeight: "bold",
    borderBottom: "1px solid #000",
    paddingBottom: "3px",
    color: "#55A965"
  };

  useEffect(() =>{
    sortedTimelineData.forEach(element => {
      if(element.year === selectedYear) {
        setSelectedYearData(element.events);
      }
    });
  }, [selectedYear]);

  if(!sortedTimelineData || !sortedTimelineData.length) {
    return null;
  }

  return (
    <div className="timelinenav-container">
      <nav className="timelinenav-content">
        <div className="timelinenav-content-top">
          {
            sortedTimelineData.map((element, index) => 
              <div className="timelinenav-button">
                <NavLink to={"/timeline/" + element.year} className="timelinenav-label" activeStyle={activeStyle} onClick={() => setSelectedYear(element.year)}>
                {/* <NavLink to={"/timeline/" + element.year} className="timelinenav-label"> */}
                  <h2>{element.year}</h2>
                </NavLink>
              </div>
            )
          }
        </div>
        <div className="timelinenav-content-bottom">
          {/* {
            selectedYearData && selectedYearData.map(element => 
              <div>
                <h3>{element.date}</h3>
                <p>{element.description}</p>
              </div>  
            )
          } */}
          {
            selectedYearData && selectedYearData.map(item =>
                <p>{console.log(item)}</p>
              )
          }
        </div>
      </nav>
    </div>
  );
}

export default TimelineNavigation;