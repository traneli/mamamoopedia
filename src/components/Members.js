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

  // console.log(value.member)

  function MembersContent(props){
    const selectedMember = props.selectedMember

    if(selectedMember === "moonbyul") {
      return (
        <section class="members-main-content"><MembersMoonbyul/></section>
      )
    } else if(selectedMember === "solar") {
      return (
        <section class="members-main-content"><MembersSolar/></section>
      )
    } else if(selectedMember === "wheein") {
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
      {/* <section class="members-main-content"> */}
        {/* <div class="members-main-content-top">
          <h2>Meet the members</h2>
        </div> */}

        <MemberContext.Provider value={value}>
         {
           <MembersContent selectedMember={member}/>
         }
       </MemberContext.Provider>
       <footer class="about-content-footer">
        {/* <p>Get connected with MAMAMOO</p> */}
        <div class="footer-information"> 
          <img class="footer-information-logo"src={images["mmm-logo-white.svg"]} />
          <p>Made by a sikrit fan</p>
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

export default Members;