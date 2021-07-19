import sample from '../assets/mmm_wawn_1080p_compressed.mp4';
import Buttons from '../components/Buttons.js';
import SocialMediaButtons from '../components/SocialMediaButtons.js';
import UpperButtonMenuSelection from './UpperButtonMenuSelection.js';
import * as utils from "../utils.js"

function Home() {
  const images = utils.importAll(require.context('../assets', false, /\.(png|jp?g|svg)/));

  return (
    <>
      <video id='videoBackground' autoPlay loop muted>
        <source src={sample} type='video/mp4'/>
      </video>
      <div class="home-container">
        <div class="home-content">
          <img class="home-content-logo" src={images["mmm-logo-brown.svg"].default}/>
          <p>Get to know MAMAMOO and their history.</p>
          <Buttons/>
        </div>
      </div>
      <div class="home-footer">
        <p>Get connected with MAMAMOO</p>
        <SocialMediaButtons background="transparent"/>
      </div>
    </>
  );
}

export default Home;