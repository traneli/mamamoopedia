import { useHistory } from "react-router-dom";
import * as utils from "../utils.js"
import UpperButtonMenuSelection from './UpperButtonMenuSelection.js';

function Header() {
  let history = useHistory();
  const images = utils.importAll(require.context('../assets', false, /\.svg/));

  function handleBackButton() {
    history.push("/");  
  }

  return (
    <section class="div-header">
      <img class="div-header-logo" src={images["mmm-logo-black.svg"].default}/>
      <UpperButtonMenuSelection/>
    </section>
  );
}

export default Header;