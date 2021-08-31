import './Timeline.style.css';

import React from "react";
import * as utils from "../utils.js"
import PageTemplate from '../PageTemplate';

function Timeline() {
  const images = utils.importAll(require.context('../assets', false, /\.(png|jp?g|svg)/));

  return (
    <div>
      <PageTemplate>
        <section class="timeline-content">
          <div class="temp-timeline-underconstruction-container">
            <h2>WAITING FOR RBW TO RESTOCK</h2>
            <h3>Under Construction</h3>
          </div>
        </section>
      </PageTemplate>
    </div>
  );
}

export default Timeline;