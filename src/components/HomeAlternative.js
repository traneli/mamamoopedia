import sample from '../assets/mmm_wawn_1080p.mp4';
import Buttons from '../components/Buttons.js';
import SocialMediaButtons from '../components/SocialMediaButtons.js';
import UpperButtonMenuSelection from './UpperButtonMenuSelection.js';
import * as utils from "../utils.js"

function HomeAlternative() {
  const images = utils.importAll(require.context('../assets', false, /\.(png|jp?g|svg)/));

  return (
    <>
      <video id='videoBackground' autoPlay loop muted>
        <source src={sample} type='video/mp4'/>
      </video>
      <div class="alt-home-container">
        <div class="alt-home-content">
          {/* <img src={images["placeholder_logo.svg"].default}/> */}
          <h1 class="alt-home-head">MAMAMOO</h1>
          <div class="alt-home-subhead">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
          <Buttons/>
        </div>
      </div>
      <div class="home-header">
        <UpperButtonMenuSelection/>
      </div>
      <div class="home-footer">
        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
        <SocialMediaButtons/>
      </div>
    </>
  );
}

export default HomeAlternative;