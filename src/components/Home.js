import { useContext, useEffect, useRef, useState } from 'react';
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

  const contentRef = useRef(null);
  const [contentVisible, setContentVisible] = useState(false);

  const homeVideoID = "xnwOfIiZ-zQ";
  const homeVideoSettings = "?controls=0&showinfo=0&loop=1&mute=1&autoplay=1&playlist="
  const homeVideoUrl =  `https://www.youtube.com/embed/${homeVideoID}?si=rdjw4Jl73s71UqY9${homeVideoSettings}${homeVideoID}`;

  /* If 50% of the element is visible -> show content */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry], obs) => {
        if (entry.intersectionRatio >= 0.5) {
          setContentVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (contentRef.current) {
      observer.observe(contentRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <PageTemplate>
      <section class="home-section-container">
        <div class="home-video-wrap">
          <div class="home-video-container">
            <h1>MAMAMOOPEDIA</h1>
            <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h2>
            <iframe src={homeVideoUrl} frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; web-share" referrerPolicy="strict-origin-when-cross-origin"></iframe>
            <div class="home-video-overlay"></div>
            {/* <button type="button" class="home-video-button">🡣</button> */}
          </div>
        </div>
      </section>
      <section home-section-container>
        <div ref={contentRef} class={`home-content-center ${contentVisible ? 'visible' : 'hidden'}`}>
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
            <Link to={"/members/moonbyul"}>
              <img src={images["2026_moonbyul_solo.webp"]} onClick={() => setMember("moonbyul")}/>
              <button type="button" class="home-content-bottom-button-member">Moonbyul</button>
            </Link>
          </div>
          <div class="home-content-bottom-button">
            <Link to={"/members/solar"}>
              <img src={images["2026_solar_solo.webp"]} onClick={() => setMember("solar")}/>
              <button type="button" class="home-content-bottom-button-member">Solar</button>
            </Link>
          </div>
          <div class="home-content-bottom-button">
            <Link to={"/members/wheein"}>
              <img src={images["2026_wheein_solo.webp"]} onClick={() => setMember("wheein")}/>
              <button type="button" class="home-content-bottom-button-member">Wheein</button>
            </Link>
          </div>
          <div class="home-content-bottom-button">
            <Link to={"/members/hwasa"}>
              <img src={images["2026_hwasa_solo.webp"]} onClick={() => setMember("hwasa")}/>
              <button type="button" class="home-content-bottom-button-member">Hwasa</button>
            </Link>
          </div>
        </div>
      </section>
      <footer class="about-content-footer">
        {/* <p>Get connected with MAMAMOO</p> */}
        <div class="footer-information"> 
          <img class="footer-information-logo"src={images["mmm-logo-white.svg"]} />
          <p>Made by a secret fan</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lorem tortor, placerat eu malesuada et, ultricies a diam. Suspendisse laoreet diam diam, nec laoreet ipsum volutpat non</p>
          <SocialMediaButtons background="color" />
        </div>
        <div class="footer-feedback">
          <button class="footer-feedback-button">Feedback 🡢</button>
        </div>
      </footer>
    </PageTemplate>
  );
}

export default Home;