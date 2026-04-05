import './UpperButtonMenuSelection.style.css';
import * as utils from "../utils.js"

const images = utils.importAll(require.context('../assets', false, /\.(png|jp?g|svg)/));

function HamburgerMenu({ isOpen }) {
  return (
    <>
      {/* <img src={images["menu_burger.svg"].default}/> */}
      <div className="hamburger">
        <div className="burger burger1"/>
        <div className="burger burger2"/>
        <div className="burger burger3"/>
      </div>
    </>
  )
}

export default HamburgerMenu;