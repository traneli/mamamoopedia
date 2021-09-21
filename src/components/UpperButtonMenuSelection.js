import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import HamburgerMenu from "./HamburgerMenu";
import './UpperButtonMenuSelection.style.css';

function UpperButtonMenuSelection() {
  const [hamburgerOpen, setHambugerOpen] = useState(false);

  const videoIndexUrl = "https://docs.google.com/spreadsheets/u/1/d/1ck-dPOKb301Z74-5GqV2Ey5F4QS4F7kAw7g4zr5qsgU/htmlview#";

  const activeStyle = {
    fontWeight: "bold",
    borderBottom: "1px solid #000",
    paddingBottom: "3px"
  };

  const toggleHamburger = () =>{
    setHambugerOpen(!hamburgerOpen);
  }

  function videoIndexClick(e) {
    window.open(videoIndexUrl, "_blank");
  }

  // Animated borderline: https://codepen.io/hayzey/pen/LNzwVO

  return (
    <header>
      {/* <div className="menu-hamburger-box"/> */}
      <div className="menu-hamburger" onClick={toggleHamburger}>
        <HamburgerMenu/>
      </div>
      <nav className={`upperbutton-content ${hamburgerOpen && 'hamburger-upperbutton-content'}`}>
        <div className="upperbuttonmenu-button">
          <NavLink to="/about" className="upperbuttonmenu-label" activeStyle={activeStyle}>
          {/* <NavLink to="/about" className="upperbuttonmenu-label" activeClassName="upperbuttonmenu-label"> */}
            About Mamamoo
          </NavLink>
        </div>
        <div className="upperbuttonmenu-button">
          <NavLink to="/members" className="upperbuttonmenu-label" activeStyle={activeStyle}>
          {/* <NavLink to="/members" className="upperbuttonmenu-label" activeClassName="upperbuttonmenu-label"> */}
            Members
          </NavLink>
        </div>
        <div className="upperbuttonmenu-button">
          <NavLink to="/discography" className="upperbuttonmenu-label" activeStyle={activeStyle}>
          {/* <NavLink to="/discography" className="upperbuttonmenu-label" activeClassName="upperbuttonmenu-label"> */}
            Discography
          </NavLink>
        </div>
        <div className="upperbuttonmenu-button">
          <NavLink to="/timeline" className="upperbuttonmenu-label" activeStyle={activeStyle}>
          {/* <NavLink to="/timeline" className="upperbuttonmenu-label" activeClassName="upperbuttonmenu-label"> */}
            Timeline
          </NavLink>
        </div>
        <div className="upperbuttonmenu-button">
          <NavLink to="/resources" className="upperbuttonmenu-label" activeStyle={activeStyle}>
          {/* <NavLink to="/timeline" className="upperbuttonmenu-label" activeClassName="upperbuttonmenu-label"> */}
            Resources
          </NavLink>
        </div>
        {/* <div className="upperbuttonmenu-button">
          <a href="https://docs.google.com/spreadsheets/u/1/d/1ck-dPOKb301Z74-5GqV2Ey5F4QS4F7kAw7g4zr5qsgU/"
          target="_blank"
          className="upperbuttonmenu-label">
            Video Index
          </a>
        </div> */}
      </nav>
    </header>
  );
}

export default UpperButtonMenuSelection;