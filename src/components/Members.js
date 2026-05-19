import React, { useContext, useRef, useEffect, useState } from 'react';
import PageTemplate from '../PageTemplate';

import MembersMain from './MembersMain'
import MembersSolar from './MembersSolar';
import MembersMoonbyul from './MembersMoonbyul';
import MembersWheein from './MembersWheein';
import MembersHwasa from './MembersHwasa';
import MemberContext from '../hoc/context/MainContext';

import SocialMediaButtons from '../components/SocialMediaButtons.js';
import * as utils from "../utils.js"

function Members() {
  const images = utils.importAll(require.context('../assets', false, /\.(png|jp?g|svg|webp)/));

  const [member, setMember] = useState("");
  const value = { member, setMember };

  function MembersContent(props){
    const selectedMember = props.selectedMember;

    if(selectedMember === "moonbyul") {
      return (
        <section class="members-main-content"><MembersMoonbyul/></section>
      )
    } else if(selectedMember === "solar") {
      return (
        <section class="members-main-content"><MembersSolar/></section>
      )
    } else if(selectedMember === "wheein") {
      console.log("Rendering Wheein content");
      return (
        <section class="members-main-content"><MembersWheein/></section>
      )
    } else if(selectedMember === "hwasa") {
      return (
        <section class="members-main-content"><MembersHwasa/></section>
      )
    }

    return <MembersMain/>;
  }

  return (
    <PageTemplate>
      <MemberContext.Provider value={value}>
        <MembersContent selectedMember={member} />
      </MemberContext.Provider>
      <footer className="about-content-footer">
        <div className="footer-information">
          <img className="footer-information-logo" src={images["mmm-logo-white.svg"]} alt="MAMAMOO logo" />
          <p>Made by a secret fan</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lorem tortor, placerat eu malesuada et, ultricies a diam. Suspendisse laoreet diam diam, nec laoreet ipsum volutpat non</p>
          <SocialMediaButtons background="color" />
        </div>
        <div className="footer-feedback">
          <button className="footer-feedback-button">Feedback 🡢</button>
        </div>
      </footer>
    </PageTemplate>
  );
}

export default Members;