import sample from '../assets/mmm_aya_1080p.mp4';
import Buttons from '../components/Buttons.js';
import SocialMediaButtons from '../components/SocialMediaButtons.js';

function Home() {
  return (
    <>
      <video id='videoBackground' autoPlay loop muted>
        <source src={sample} type='video/mp4'/>
      </video>
      <div class="home-content">
        <h2>MAMAMOO</h2>
        <Buttons/>
      </div>
      <div class="home-footer">
        <SocialMediaButtons/>
      </div>
    </>
  );
}

export default Home;