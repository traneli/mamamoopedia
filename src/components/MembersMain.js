import { useContext, useState } from 'react';
import {  Link, useRouteMatch } from 'react-router-dom';
import MemberContext from '../hoc/context/MainContext';
import * as utils from '../utils.js';

import './Members.style.css';

const images = utils.importAll(require.context('../assets', false, /\.(png|jp?g|svg)/));

function MembersMain() {
  const { member, setMember } = useContext(MemberContext);
  const value = { member, setMember }

  console.log(value.member)

  const { url } = useRouteMatch();

  return (
    <section class="members-main-content">
      <div class="members-main-content-image-group">
        <Link to={`${url}/moonbyul`} class="members-main-content-image-group-link">
          <button type="button" class="members-main-content-image-group-btn" onClick={() => setMember("moonbyul")}>
            <img src={images["thebest_moonbyul.jpg"].default}/>
          </button>
        </Link>
        <Link to={`${url}/solar`} class="members-main-content-image-group-link" onClick={() => setMember("solar")}>
          <button type="button" class="members-main-content-image-group-btn">
            <img src={images["thebest_solar.jpg"].default}/>
          </button>
        </Link>
        <Link to={`${url}/wheein`} class="members-main-content-image-group-link" onClick={() => setMember("wheein")}>
          <button type="button" class="members-main-content-image-group-btn">
            <img src={images["thebest_wheein.jpg"].default}/>
          </button>
        </Link>
        <Link to={`${url}/hwasa`} class="members-main-content-image-group-link" onClick={() => setMember("hwasa")}>
          <button type="button" class="members-main-content-image-group-btn">
            <img src={images["thebest_hwasa.jpg"].default}/>
          </button>
        </Link>
      </div>
    </section>
  )
}

export default MembersMain;