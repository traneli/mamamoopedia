import { useContext } from 'react';
import { Link } from "react-router-dom";
import Buttons from '../components/Buttons.js';
import SocialMediaButtons from '../components/SocialMediaButtons.js';
import UpperButtonMenuSelection from './UpperButtonMenuSelection.js';
import PageTemplate from '../PageTemplate'
import MemberContext from '../hoc/context/MainContext';
import * as utils from "../utils.js"

function Home() {
  const images = utils.importAll(require.context('../assets', false, /\.(png|jp?g|svg|webp)/));

  const { member, setMember } = useContext(MemberContext);
  const value = { member, setMember }

  return (
    <PageTemplate>
      <section class="home-section-container">
        <div class="home-video-wrap">
          <div class="home-video-container">
            <h1>MAMAMOOPEDIA</h1>
            <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h2>
            <iframe src="https://www.youtube.com/embed/pLKOEfMc09E?mute=1&autoplay=1&controls=0&showinfo=0&playlist=pLKOEfMc09E" title="[MV] 문별 (Moon Byul) &#39;Hertz&#39;" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            <div class="home-video-overlay"></div>
            <button type="button" class="home-video-button">🡣</button>
          </div>
        </div>
      </section>

      {/* <video id='videoBackground' autoPlay loop muted> */}
      {/* <source src={sample} type='video/webm'/> */}
      {/* <source src="/2026_moonbyul_hertz.webm" type='video/webm'/> */}
      {/* </video> */}
      {/* <div class="home-footer">
          <div class="home-footer-container-description">
            <h1>HERTZ</h1>
            <p>Mamamoo's Moonbyul Comeback Solo</p>
          </div>
          <div class="home-footer-container-buttons">
            <p>Get connected with MAMAMOO</p>
            <SocialMediaButtons background="transparent" />
          </div>
        </div> */}
        
      <section home-section-container>
        <div class="home-content-center">
          <div class="home-content-center-text">
            <h1>MAMAMOO</h1>
            <p>
              <span class="span-coloured-text">MAMAMOO</span> (Korean: 마마무, stylized in all caps) is a South Korean girl group formed by RBW (formerly WA Entertainment) in 2014, composed of four members: <span class="span-coloured-text">Solar, Moonbyul, Wheein, and Hwasa.</span> The group officially debuted with their 1st mini album, <span class="span-coloured-text">'Hello'</span> with the title track, <span class="span-coloured-text">'Mr. Ambiguous'</span> on <span class="span-coloured-text">June 19, 2014.</span>
              They are recognized for their vocal prowess, versatile discography, and dynamic stages. It is also worth noting that each member has their own solo career. 
              <br/><br/>
              Their fandom name is: <span class="span-coloured-text">Moomoo</span>
            </p>
            <img src={images["mmm-logo-green.svg"]} />
            <p class="home-content-center-logo-description">MAMAMOO's official logo</p>
          </div>
          <div class="home-content-center-picture">
            <img src={images["mmm_illella.webp"]} />
          </div>
        </div>
        <div class="home-content-bottom">
          <div class="home-content-bottom-button">
            <Link to={"/members/solar"}>
              <img src={images["2026_solar_solo.webp"]} onClick={() => setMember("solar")}/>
            </Link>
            <button type="button" class="home-content-bottom-button-member">Solar</button>
          </div>
          <div class="home-content-bottom-button">
            <Link to={"/members/moonbyul"}>
              <img src={images["2026_moonbyul_solo.webp"]} onClick={() => setMember("moonbyul")}/>
            </Link>
            <button type="button" class="home-content-bottom-button-member">Moonbyul</button>
          </div>
          <div class="home-content-bottom-button">
            <Link to={"/members/wheein"}>
              <img src={images["2026_wheein_solo.webp"]} onClick={() => setMember("wheein")}/>
            </Link>
            <button type="button" class="home-content-bottom-button-member">Wheein</button>
          </div>
          <div class="home-content-bottom-button">
            <Link to={"/members/hwasa"}>
              <img src={images["2026_hwasa_solo.webp"]} onClick={() => setMember("hwasa")}/>
            </Link>
            <button type="button" class="home-content-bottom-button-member">Hwasa</button>
          </div>
        </div>
      </section>
      <footer class="about-content-footer">
          <p>Get connected with MAMAMOO</p>
          <SocialMediaButtons background="color" />
        </footer>
    </PageTemplate>
  );
}

export default Home;