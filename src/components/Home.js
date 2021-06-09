import sample from '../assets/mmm_wawn_1080p.mp4';
import Buttons from '../components/Buttons.js';
import SocialMediaButtons from '../components/SocialMediaButtons.js';
import UpperButtonMenuSelection from './UpperButtonMenuSelection.js';
import * as utils from "../utils.js"

//https://www.youtube.com/embed/UoI9riNffEU?rel=0&wmode=transparent&controls=0&showinfo=0&loop=1&autoplay=1&mute=1

// https://codepen.io/dudleystorey/pen/PZyMrd

function Home() {
  const images = utils.importAll(require.context('../assets', false, /\.(png|jp?g|svg)/));

  return (
    <>
      <video id='videoBackground' autoPlay loop muted>
        <source src={sample} type='video/mp4'/>
      </video>
      <div class="home-container">
        <div class="home-content">
          <img class="home-content-logo" src={images["mmm-logo-white.svg"].default}/>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          {/* <h2>MAMAMOO</h2> */}
          <Buttons/>
        </div>
      </div>
      {/* <div class="home-header">
        <UpperButtonMenuSelection/>
      </div> */}
      <div class="home-footer">
        <p>Lorem ipsum dolor sit amet, consectetur media buttons.</p>
        <SocialMediaButtons/>
      </div>
    </>
  );
}

export default Home;