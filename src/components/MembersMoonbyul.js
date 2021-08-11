import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import * as utils from '../utils.js';

import './Members.style.css';

import { MembersInfo } from '../data/MembersInfoData';
import MemberContext from '../hoc/context/MainContext';

function MembersMoonbyul() {
  let history = useHistory();

  const images = utils.importAll(require.context('../assets', false, /\.(png|jp?g|svg)/));
  const { member, setMember } = useContext(MemberContext);

  function handleBackButton() {
    history.push("/members");
    return(
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
    const newText = text.split('\\n').map(str => ChangeStringToHTML({str}.str));
    return newText;
  }

  return (
    <div class="member-page-container">
      <div class="member-page-back-button-content">
        <button onClick={() => handleBackButton()}>
          <img src={images["arrow_left_black.svg"].default}/>
          Back to members
        </button>
      </div>
      <div class="member-page-content">
        <img class="member-page-img-pfp" src={images[MembersInfo[0].image].default}/>
        <div class="member-page-information-box">
          <h1>{MembersInfo[0].name}</h1>
          <h2>{MembersInfo[0].fullName}</h2>
          <div class="member-page-information-box-text-content">
            <NewlineText text={MembersInfo[0].information}/>
          </div>
          <div class="member-page-information-box-text-content">
            <NewlineText text={MembersInfo[0].description}/>
          </div>
          <button class="member-page-information-box-solo-btn" onClick={() => openMediaLink(MembersInfo[0].solo)}>Moonbyul's latest solo work: AM3DA</button>
          <p class="member-page-information-box-social-title">Socials:</p>
          <div class="member-page-information-box-media-btn-content">
            <img class="member-page-information-box-media-btn" src={images["waw_spotify_dark.svg"].default} onClick={() => openMediaLink(MembersInfo[0].socials[0].url)}/>
            <img class="member-page-information-box-media-btn" src={images["waw_instagram_dark.svg"].default} onClick={() => openMediaLink(MembersInfo[0].socials[1].url)}/>
            <img class="member-page-information-box-media-btn" id="member-page-information-box-media-btn-special" src={images["waw_smn_dark.svg"].default} onClick={() => openMediaLink(MembersInfo[0].socials[2].url)}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MembersMoonbyul;