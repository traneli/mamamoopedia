// import React from "react";
import { Link, useHistory } from "react-router-dom";
import ModalGeneral from "./ModalGeneral.js";

const videoIndexUrl = "https://docs.google.com/spreadsheets/u/1/d/1ck-dPOKb301Z74-5GqV2Ey5F4QS4F7kAw7g4zr5qsgU/htmlview#";

function Buttons() {
  let history = useHistory();

  function handleClick() {
    history.push("/general");
  }

  function videoIndexClick(e) {
    window.open(videoIndexUrl, "_blank");
  }

  function urlOpen(url) {
    window.open(url, "_self");
  }

  return (
    <div class="btn-toolbar">
      <div className="general-btn">
        <Link to="/about" className="general-link-btn-label">
          About MAMAMOO
        </Link>
      </div>
      <div className="general-btn">
        <Link to="/discography/albums" className="general-link-btn-label">
          Discography
        </Link>
      </div>
      <div className="general-btn">
        <Link to="/timeline" className="general-link-btn-label">
          Timeline
        </Link>
      </div>
      <div className="general-btn">
        <Link to="/resources" className="general-link-btn-label">
          Resources
        </Link>
      </div>
      {/* <button onClick={videoIndexClick} className="general-btn">
        Video Index
      </button> */}
    </div>
  );
}

export default Buttons;