import { Link } from "react-router-dom";

function UpperButtonMenuSelection() {

  const videoIndexUrl = "https://docs.google.com/spreadsheets/u/1/d/1ck-dPOKb301Z74-5GqV2Ey5F4QS4F7kAw7g4zr5qsgU/htmlview#";

  function videoIndexClick(e) {
    window.open(videoIndexUrl, "_blank");
  }

  return (
    <div className="upperbutton-container">
      <div className="upperbutton-content">
        <div className="upperbuttonmenu-button">
          <Link to="/general" className="upperbuttonmenu-label">
              General
          </Link>
        </div>
        <div className="upperbuttonmenu-button">
          <Link to="/members" className="upperbuttonmenu-label">
              Members
          </Link>
        </div>
        <div className="upperbuttonmenu-button">
          <a href="https://docs.google.com/spreadsheets/u/1/d/1ck-dPOKb301Z74-5GqV2Ey5F4QS4F7kAw7g4zr5qsgU/"
          target="_blank"
          className="upperbuttonmenu-label">
            Video Index
          </a>
        </div>
      </div>
    </div>
  );
}

export default UpperButtonMenuSelection;