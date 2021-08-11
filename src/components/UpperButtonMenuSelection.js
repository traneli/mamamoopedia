import { NavLink, Link } from "react-router-dom";

function UpperButtonMenuSelection() {

  const videoIndexUrl = "https://docs.google.com/spreadsheets/u/1/d/1ck-dPOKb301Z74-5GqV2Ey5F4QS4F7kAw7g4zr5qsgU/htmlview#";

  const activeStyle = {
    fontWeight: "bold",
    borderBottom: "1px solid #000",
    paddingBottom: "3px"
  };

  function videoIndexClick(e) {
    window.open(videoIndexUrl, "_blank");
  }

  return (
    <header>
      <nav className="upperbutton-content">
        <div className="upperbuttonmenu-button">
          <NavLink to="/about" className="upperbuttonmenu-label" activeStyle={activeStyle}>
            About Mamamoo
          </NavLink>
        </div>
        <div className="upperbuttonmenu-button">
          <NavLink to="/members" className="upperbuttonmenu-label" activeStyle={activeStyle}>
            Members
          </NavLink>
        </div>
        <div className="upperbuttonmenu-button">
          <NavLink to="/discography" className="upperbuttonmenu-label" activeStyle={activeStyle}>
            Discography
          </NavLink>
        </div>
        <div className="upperbuttonmenu-button">
          <NavLink to="/timeline" className="upperbuttonmenu-label" activeStyle={activeStyle}>
            Timeline
          </NavLink>
        </div>
        <div className="upperbuttonmenu-button">
          <a href="https://docs.google.com/spreadsheets/u/1/d/1ck-dPOKb301Z74-5GqV2Ey5F4QS4F7kAw7g4zr5qsgU/"
          target="_blank"
          className="upperbuttonmenu-label">
            Video Index
          </a>
        </div>
      </nav>
    </header>
  );
}

export default UpperButtonMenuSelection;