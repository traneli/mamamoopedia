import { Link, useHistory } from "react-router-dom";
import * as utils from "../utils.js"
import UpperButtonMenuSelection from "./UpperButtonMenuSelection.js";
import SocialMediaButtons from '../components/SocialMediaButtons.js';
import Header from "./Header.js";
import PageTemplate from '../PageTemplate'; // TODO: Test layout/template thing

function About() {
  let history = useHistory();

  const images = utils.importAll(require.context('../assets', false, /\.(jp?g|svg)/));

  function handleBackButton() {
    history.push("/");
  }

  return (
    <div class="about-container">
      <section class="div-header">
        <img class="div-header-logo" src={images["mmm-logo-black.svg"].default}/>
        <UpperButtonMenuSelection/>
      </section>
      <section class="about-content">
        <div class="about-content-top">
          <h2>Who is MAMAMOO?</h2>
          <p>Learn more about the vocal k-pop girl group with immense stage presence</p>
        </div>
        <img class="about-content-top-image" src={images["waw_mmm_ot4.jpg"].default}/>
        <div class="about-content-center">
          <p>
            <span class="span-coloured-text">MAMAMOO</span> (Korean: 마마무, stylized in all caps) is a South Korean girl group formed by RBW (formerly WA Entertainment) in 2014, composed of four members: <span class="span-coloured-text">Solar, Moonbyul, Wheein, and Hwasa</span>. 
            The group officially debuted with their single "Mr. Ambiguous" on June 18, 2014. 
            Their debut was considered by some critics as one of the best K-pop debuts of 2014. They are recognized for their retro, jazz, R&B concepts and their strong vocal performances
          </p>
        </div>
        <div class="about-content-low-center">
          <div class="about-content-low-center-img-wrapper">
            <img src={images["blues_mmm_ot4.jpg"].default}/>
          </div>
          {/* <img src={images["blues_mmm_ot4.jpg"].default}/> */}
          <div class="about-content-low-center-text">
            <p class="about-content-low-center-text-paragraph">
              Their debut was considered by some critics as <span class="span-coloured-text">one of the best K-pop debuts of 2014</span>. They are
              recognized for their retro, jazz, and R&B concepts and strong vocal performances. They were
              debuted with the goal of producing artists that are talented and good with singing but also
              know how to have fun onstage. Now, almost 6 years into their career, Mamamoo has proven to
              be one of the best K-Pop groups of all time!
            </p>
            <p class="about-content-low-center-text-paragraph">
              The girls stand out among others even upon debut because of their
              ’concept,’ which was being their true selves. Mamamoo’s music was
              made not to appeal to the masses but to suit what they can do with their
              voices and performances. Because of this, they received a lot of praises for
              their strong vocal performances and how they have fun on stage. Despite
              being different and coming from a small agency, the girls surely achieved
              amazing success. Recognized by respected seniors in the industry,
              Mamamoo has really made it.
            </p>
            <p class="about-content-low-center-text-paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pulvinar massa est, gravida porta nisi ullamcorper at. Proin malesuada dolor et porta hendrerit. Ut sit amet turpis at nibh iaculis porta. Maecenas faucibus ultricies turpis at ullamcorper. Vestibulum aliquet erat venenatis ante ullamcorper congue. In a vulputate erat. Nullam vitae faucibus ante. Nam sollicitudin vel ante nec pulvinar. Nullam finibus augue sit amet neque sodales, non cursus nisi vulputate. Mauris dapibus interdum nisi, nec rutrum nunc hendrerit at. Quisque id euismod lorem.
              Cras id elit at purus porta feugiat interdum a erat. Nullam laoreet pretium venenatis. Nulla felis ipsum, aliquet nec sollicitudin sed, pharetra sed est. Nam tempus mauris in mauris vulputate facilisis. Fusce nec aliquam nisl. Donec vel urna lacinia, ullamcorper felis sed, posuere lectus. Donec rhoncus velit et ligula convallis imperdiet. Donec eu vestibulum lacus. Duis magna dui, fringilla eu mollis sed, malesuada ut mauris. Suspendisse nec molestie nisi, sit amet finibus nisi. Curabitur a neque mauris. Nulla quis felis ultrices, ultrices mauris non, scelerisque sem. Maecenas imperdiet eros eu tortor dictum, ornare pretium massa hendrerit.
            </p>
            <div class="about-content-low-center-members-btn-container">
              <Link to="/general" className="about-content-low-center-members-btn">
                <p>Get to know the members</p>
                <img src={images["brown_arrow_right.svg"].default}/>
              </Link>
            </div>
          </div>
        </div>
        <div class="about-content-bottom-top">
          <h2>BeLisMaMoo</h2>
          <p>Learn more about the vocal k-pop girl group with immense stage presence</p>
        </div>
        {/* <img class="about-content-bottom-center-image" src={images["destiny_mmm_ot4.jpg"].default}/> */}
        <div class="about-content-bottom-center-image">
          <iframe src="https://www.youtube.com/embed/OwQT8msT8HQ" frameborder="0" allowfullscreen></iframe>
        </div>
        <div class="about-content-bottom">
          <p>
            A casual listener of an artist needs to listen to the 1-minute sample of a track first
            before deciding to click the download button. But for Mamamoo, this does not
            apply. Mamamoo is recognized for their <span class="span-coloured-text">musical diversity</span>. You can name any
            genre under the sun and trust them to do all these with justice, without sacrificing
            their own Mamamoo color.
          </p>
          {/* TODO: Add new link */}
          <Link to="/general">
            SEE THEIR FULL DISCOGRAPHY
          </Link>
        </div>
        <footer class="about-content-footer">
          <p>Get connected with MAMAMOO</p>
          <SocialMediaButtons/>
        </footer>
      </section>
    </div>
  );
}

export default About;