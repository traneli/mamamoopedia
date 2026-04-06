// import sample from '../assets/mmm_wawn_1080p_compressed.mp4';
// import sample from '../assets/mmm_mmmuch_1080_compressed.mp4';
// import sample from '../assets/moonbyul_citt_1080p.webm';
import Buttons from '../components/Buttons.js';
import SocialMediaButtons from '../components/SocialMediaButtons.js';
import UpperButtonMenuSelection from './UpperButtonMenuSelection.js';
import PageTemplate from '../PageTemplate'
import * as utils from "../utils.js"

function Home() {
  const images = utils.importAll(require.context('../assets', false, /\.(png|jp?g|svg)/));

  return (
    // <>
    //   <video id='videoBackground' autoPlay loop muted>
    //     <source src={sample} type='video/mp4'/>
    //   </video>
    //   <div class="home-container">
    //     <div class="home-content">
    //       <img class="home-content-logo" src={images["mmm-logo-white.svg"].default}/>
    //       <p>Get to know MAMAMOO and their history.</p>
    //       <Buttons/>
    //     </div>
    //   </div>
    //   <div class="home-footer">
    //     <p>Get connected with MAMAMOO</p>
    //     <SocialMediaButtons background="transparent"/>
    //   </div>
    // </>
    <PageTemplate>
      <section class="home-section-container">
        <video id='videoBackground' autoPlay loop muted>
          {/* <source src={sample} type='video/webm'/> */}
          <source src="/2026_moonbyul_hertz.webm" type='video/webm'/>
        </video>
        {/* <div class="home-container">
          <div class="home-content">
            <img class="home-content-logo" src={images["mmm-logo-white.svg"].default}/>
            <p>Get to know MAMAMOO and their history.</p>
            <Buttons/>
          </div>
        </div> */}
        <div class="home-footer">
          <div class="home-footer-container-description">
            <h1>HERTZ</h1>
            <p>Mamamoo's Moonbyul Comeback Solo</p>
          </div>
          <div class="home-footer-container-buttons">
            <p>Get connected with MAMAMOO</p>
            <SocialMediaButtons background="transparent"/>
          </div>
        </div>
      </section>
    </PageTemplate>
  );
}

export default Home;