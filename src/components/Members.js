import React from "react";
import { Link } from "react-router-dom";
import * as utils from "../utils.js"
import PageTemplate from '../PageTemplate';

function Members() {
  const images = utils.importAll(require.context('../assets', false, /\.(png|jp?g|svg)/));

  return (
    <div>
      <PageTemplate>
        <section class="members-main-content">
          {/* <div class="members-main-content-top">
            <h2>Meet the members</h2>
          </div> */}
          <div class="members-main-content-image-group">
            <Link to="/" class="members-main-content-image-group-link">
              <button type="button" class="members-main-content-image-group-btn">
                <img src={images["waw_moonbyul.jpg"].default}/>
              </button>
            </Link>
            <Link to="/" class="members-main-content-image-group-link">
              <button type="button" class="members-main-content-image-group-btn">
                <img src={images["waw_solar.jpg"].default}/>
              </button>
            </Link>
            <Link to="/" class="members-main-content-image-group-link">
              <button type="button" class="members-main-content-image-group-btn">
                <img src={images["waw_wheein.jpg"].default}/>
              </button>
            </Link>
            <Link to="/" class="members-main-content-image-group-link">
              <button type="button" class="members-main-content-image-group-btn">
                <img src={images["waw_hwasa.jpg"].default}/>
              </button>
            </Link>
          </div>
        </section>
      </PageTemplate>
    </div>
  );
}

export default Members;