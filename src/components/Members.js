import React from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import * as utils from "../utils.js"
import PageTemplate from '../PageTemplate';

function Members() {
  const images = utils.importAll(require.context('../assets', false, /\.(png|jp?g|svg)/));
  let history = useHistory();
  let location = useLocation();

  function handleBackButton() {
    history.push("/");
  }

  console.log(location);

  // https://codepen.io/jenniferleigh/pen/rVpeGG/

  return (
    // <div>
    //   <Layout>
    //     <p>testi</p>
    //   </Layout>
    // </div>

    <div>
      <PageTemplate>
        <p>testi</p>
      </PageTemplate>
    </div>

    // <div class="members-container">
    //   <div class="members-title">
    //     <h2>MEMBERS</h2>
    //   </div>
    //   <div class="members-btn-toolbar">
    //     <div class="members-button-container">
    //       <Link to="/members/solar" class="members-button-label">
    //         <span class="members-button-label-text">Solar</span>
    //         <img class="members-solar-img" src={images["solar_travel.jpg"].default}/>
    //       </Link>
    //     </div>
    //     <div class="members-button-container">
    //       <Link to="/members/moonbyul" class="members-button-label">
    //         <span class="members-button-label-text">Moonbyul</span>
    //         <img class="members-moonbyul-img" src={images["moonbyul_travel.png"].default}/>
    //       </Link>
    //     </div>
    //     <div class="members-button-container">
    //       <Link to="/members/wheein" class="members-button-label">
    //         <span class="members-button-label-text">Wheein</span>
    //         <img class="members-wheein-img" src={images["wheein_travel.jpg"].default}/>
    //       </Link>
    //     </div>
    //     <div class="members-button-container">
    //       <Link to="/members/hwasa" class="members-button-label">
    //         <span class="members-button-label-text">Hwasa</span>
    //         <img class="members-hwasa-img" src={images["hwasa_travel.jpg"].default}/>
    //       </Link>
    //     </div>
    //   </div>
    //   <button class="media-button" onClick={handleBackButton}>
    //     <img class="icon" src={images["home.svg"].default}/>
    //   </button>
    // </div>
  );
}

export default Members;