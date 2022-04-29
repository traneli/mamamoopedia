import { Link } from "react-router-dom";
import * as utils from "../utils.js"
import UpperButtonMenuSelection from './UpperButtonMenuSelection.js';

function Header() {
  const images = utils.importAll(require.context('../assets', false, /\.svg/));

  return (
    <section class="div-header">
      <Link to="/" className="upperbuttonmenu-label">
        <button type="button" class="div-header-logo-btn">
          <img class="div-header-logo" src={images["mmm-logo-white.svg"].default}/>
        </button>
      </Link>
      <UpperButtonMenuSelection/>
    </section>
  );
}

export default Header;