import sample from '../assets/mmm_aya_1080p.mp4';
import Buttons from '../components/Buttons.js';
import SocialMediaButtons from '../components/SocialMediaButtons.js';
import UpperButtonMenuSelection from './UpperButtonMenuSelection.js';

//https://www.youtube.com/embed/UoI9riNffEU?rel=0&wmode=transparent&controls=0&showinfo=0&loop=1&autoplay=1&mute=1

// https://codepen.io/dudleystorey/pen/PZyMrd

function Home() {
  return (
    <>
      <video id='videoBackground' autoPlay loop muted>
        <source src={sample} type='video/mp4'/>
      </video>
      {/* <div class="video-background">
        <div class="video-foreground"> */}
          {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/UoI9riNffEU?rel=0&wmode=transparent&controls=0&showinfo=0&loop=1&autoplay=1&mute=1" allow="autoplay; fullscreen" frameborder="0" allowFullScreen></iframe> */}
          {/* <iframe src="https://www.youtube.com/embed/UoI9riNffEU?controls=0&showinfo=0&rel=0&autoplay=1&mute=1" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
        </div>
      </div> */}
      <div class="home-container">
        <div class="home-content">
          {/* <img src="./assets/mamamoo-logo.png"></img> */}
          <h2>MAMAMOO</h2>
          <Buttons/>
        </div>
      </div>
      {/* <div class="home-header">
        <UpperButtonMenuSelection/>
      </div> */}
      <div class="home-footer">
        <SocialMediaButtons/>
      </div>
    </>
  );
}

export default Home;