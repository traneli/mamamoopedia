import { Link } from "react-router-dom";
import * as utils from "../utils.js"
import UpperButtonMenuSelection from "./UpperButtonMenuSelection.js";
import SocialMediaButtons from '../components/SocialMediaButtons.js';
import Header from "./Header.js";
import PageTemplate from '../PageTemplate'; // TODO: Test layout/template thing

function About() {
  const images = utils.importAll(require.context('../assets', false, /\.(jp?g|svg)/));

  function laptopAboutLowCenter() {
    return (
      <>
        <img src={images["waw_group.jpg"].default}/>
        <div class="column-about-content-low-center-text">
          <p class="about-content-low-center-text-paragraph">
            The girls stood out among others for consistently delivering fun and entertaining performances. 
            They performed in multiple festivals, concerts, music shows, and award shows and they never fail to get the crowd going. 
            Alongside their iconic stages, they explored different musical genres and produced songs with 
            messages varying from talking about their heights <span class="span-coloured-text">(Taller than you)</span> to self-empowerment <span class="span-coloured-text">(HIP)</span>. 
          </p>
          <p class="about-content-low-center-text-paragraph">
            Mamamoo also participate in producing their songs, with Moonbyul writing her own rap lyrics for most songs. Currently they have over 200 songs, 11 mini albums, 3 full albums, and 1 repackaged album. Their discography also includes several OSTs, collaborations and CF songs. 
            For their repackaged album, they re-recorded 21 different tracks from their previous albums and produced 2 new songs, <span class="span-coloured-text">‘Happier than Ever’</span> and <span class="span-coloured-text">‘mumumumuch’</span>, dedicated to their journey and to the Moomoo fandom respectively.
          </p>
          <p class="about-content-low-center-text-paragraph">
            They debuted with the goal of being artists that are talented and good with singing but also
            know how to have fun onstage. Now, 7 years into their career, Mamamoo has proven to
            be one of the best K-Pop groups of all time.
          </p>
          <div class="about-content-low-center-members-btn-container">
            <Link to="/members" className="about-content-low-center-members-btn">
              <p>Get to know the members</p>
              <img src={images["brown_arrow_right.svg"].default}/>
            </Link>
          </div>
        </div>
      </>
    )
  }

  return (
    <PageTemplate>
      <section class="about-content">
        <div class="about-content-top">
          <h2>Who is MAMAMOO?</h2>
          <p>Learn more about the vocal k-pop girl group with immense stage presence</p>
        </div>
        {/* <img class="about-content-top-image" src={images["waw_mmm_ot4.jpg"].default}/> */}
        <img class="about-content-top-image" src={images["waw_mmm_concert.jpg"].default}/>
        <div class="about-content-center">
          <p>
            <span class="span-coloured-text">MAMAMOO</span> (Korean: 마마무, stylized in all caps) is a South Korean girl group formed by RBW (formerly WA Entertainment) in 2014, composed of four members: <span class="span-coloured-text">Solar, Moonbyul, Wheein, and Hwasa</span>. 
            The group officially debuted with their single "Mr. Ambiguous" on June 18, 2014. 
            Their debut was considered by some critics as one of the best K-pop debuts of 2014. They are recognized for their retro, jazz, R&B concepts and their strong vocal performances
          </p>
        </div>
        <div class="about-content-low-center">
          <div class="about-content-low-center-img-wrapper">
            <img src={images["waw_group.jpg"].default}/>
          </div>
          <div class="about-content-low-center-text">
            <p class="about-content-low-center-text-paragraph">
              The girls stood out among others for consistently delivering fun and entertaining performances. 
              They performed in multiple festivals, concerts, music shows, and award shows and they never fail to get the crowd going. 
              Alongside their iconic stages, they explored different musical genres and produced songs with 
              messages varying from talking about their heights <span class="span-coloured-text">(Taller than you)</span> to self-empowerment <span class="span-coloured-text">(HIP)</span>. 
            </p>
            <p class="about-content-low-center-text-paragraph">
              Mamamoo also participate in producing their songs, with Moonbyul writing her own rap lyrics for most songs. Currently they have over 200 songs, 11 mini albums, 3 full albums, and 1 repackaged album. Their discography also includes several OSTs, collaborations and CF songs. 
              For their repackaged album, they re-recorded 21 different tracks from their previous albums and produced 2 new songs, <span class="span-coloured-text">‘Happier than Ever’</span> and <span class="span-coloured-text">‘mumumumuch’</span>, dedicated to their journey and to the Moomoo fandom respectively.
            </p>
            <p class="about-content-low-center-text-paragraph">
              They debuted with the goal of being artists that are talented and good with singing but also
              know how to have fun onstage. Now, 7 years into their career, Mamamoo has proven to
              be one of the best K-Pop groups of all time.
            </p>
            <div class="about-content-low-center-members-btn-container">
              <Link to="/members" className="about-content-low-center-members-btn">
                <p>Get to know the members</p>
                <img src={images["brown_arrow_right.svg"].default}/>
              </Link>
            </div>
          </div>
        </div>
        <div class="about-content-bottom-top">
          <h2>BeLisMaMoo</h2>
          <p>Believe and Listen to Mamamoo</p>
        </div>
        {/* <img class="about-content-bottom-center-image" src={images["destiny_mmm_ot4.jpg"].default}/> */}
        <div class="about-content-bottom-center-image">
          <iframe src="https://www.youtube.com/embed/OwQT8msT8HQ" frameborder="0" allowfullscreen></iframe>
        </div>
        <div class="about-content-bottom">
          <p>
            Mamamoo is known for their <span class="span-coloured-text">musical diversity</span>. You can name any
            genre under the sun and trust them to do all these with justice, without sacrificing
            their own color.
          </p>
          {/* TODO: Change to new link */}
          <Link to="/discography">
            SEE THEIR FULL DISCOGRAPHY
          </Link>
        </div>
        <footer class="about-content-footer">
          <p>Get connected with MAMAMOO</p>
          <SocialMediaButtons background="color"/>
        </footer>
      </section>
    </PageTemplate>
  );
}

export default About;