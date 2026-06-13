import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import * as utils from '../utils.js';
import PageTemplate from '../PageTemplate'
import SocialMediaButtons from '../components/SocialMediaButtons.js';

import './Members.style.css';

import { MembersInfo } from '../data/MembersInfoData';
import MemberContext from '../hoc/context/MainContext';

function MembersSolar() {
  let history = useHistory();

  const images = utils.importAll(require.context('../assets', false, /\.(png|jp?g|svg)/));
  const { member, setMember } = useContext(MemberContext);

  function handleBackButton() {
    history.push("/members");
    return (
      setMember("")
    )
  }

  function openMediaLink(props) {
    window.open(props, "_blank");
  }

  function ChangeStringToHTML(data) {
    const result = utils.jsonToHTML(data);
    return result;
  }

  function NewlineText(props) {
    const text = props.text;
    const className = props.className;
    // const newText = text.split('\\n').map(str => <p class={className}>{str}</p>);
    const newText = text.split('\\n').map(str => ChangeStringToHTML({ str }.str));
    return newText;
  }

  return (
    <PageTemplate>
      <div class="member-page-container">
        <div class="member-page-back-button-content">
          <button class="member-page-back-button" onClick={() => handleBackButton()}>
            <img src={images["arrow_left_black.svg"]} />
            Back to members
          </button>
        </div>
        <div class="member-page-content">
          <img class="member-page-img-pfp" src={images[MembersInfo[1].image]} />
          <div class="member-page-information-box">
            <div class="member-page-information-gradient-line"></div>
            <h1>{MembersInfo[1].name}</h1>
            <h2>{MembersInfo[1].fullName}</h2>
            <div class="member-page-information-box-text-content">
              <NewlineText text={MembersInfo[1].information} />
            </div>
            <div class="member-page-information-box-text-content">
              <NewlineText text={MembersInfo[1].description} />
            </div>
            <button class="member-page-information-box-solo-btn" onClick={() => openMediaLink(MembersInfo[1].solo.url)}>Solar's latest solo work: {MembersInfo[1].solo.name}</button>
            <p class="member-page-information-box-social-title">Socials:</p>
            <div class="member-page-information-box-media-btn-content">
              <img class="member-page-information-box-media-btn" src={images["waw_spotify_dark.svg"]} onClick={() => openMediaLink(MembersInfo[1].socials[0].url)} />
              <img class="member-page-information-box-media-btn" src={images["waw_instagram_dark.svg"]} onClick={() => openMediaLink(MembersInfo[1].socials[1].url)} />
              <img class="member-page-information-box-media-btn" src={images["waw_youtube_dark.svg"]} onClick={() => openMediaLink(MembersInfo[1].socials[2].url)} />
            </div>
          </div>
        </div>
        <div class="member-page-back-button-content">
          <button class="member-page-back-button" onClick={() => handleBackButton()}>
            {/* <img src={images["arrow_left_black.svg"]}/>
            Back to members */}
          </button>
        </div>
      </div>
      <footer class="about-content-footer">
        {/* <p>Get connected with MAMAMOO</p> */}
        <div class="footer-information">
          <img class="footer-information-logo" src={images["mmm-logo-white.svg"]} />
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

export default MembersSolar;