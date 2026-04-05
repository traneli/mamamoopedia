import './Resources.style.css';

import PageTemplate from "../PageTemplate";
import SocialMediaButtons from './SocialMediaButtons';

function Resources() {
  return (
    <PageTemplate>
      <section class="resources-content">
        <div class="resources-content-top">
          <h2>Learn more about MAMAMOO</h2>
          <p>Listed below are the references used for this website and other various sources of Mamamoo related resources.</p>
        </div>
        <div class="resources-content-row-section">
          <div class="resources-container-row-content">
            <h3>WEBSITES</h3>
            <a href="https://kpop.fandom.com/wiki/MAMAMOO" target="_blank" rel="noopener noreferrer">Kpop Wiki</a>
            <a href="https://mamamoo.fandom.com/wiki/MAMAMOO" target="_blank" rel="noopener noreferrer">Mamamoo Wiki</a>
            <a href="https://en.wikipedia.org/wiki/Mamamoo" target="_blank" rel="noopener noreferrer">Wikipedia</a>
          </div>
          <div class="resources-container-row-content">
            <h3>FILES</h3>
            <a href="https://drive.google.com/file/d/1b0STqqLLffv1WjroD7lFX7bAy14jEChF/view" target="_blank" rel="noopener noreferrer">Stan Mamamoo - PDF</a>
            <a href="https://t.co/IrAUGnId38?amp=1" target="_blank" rel="noopener noreferrer">MAMAMOO Video Index - Spreadsheet</a>
          </div>
        </div>
        <div class="resources-content-row-section">
          <div class="resources-container-row-content">
            <h3>COMMUNITY</h3>
            <a href="https://discord.gg/mamamoo" target="_blank" rel="noopener noreferrer">MAMAMOO Discord server</a>
            <a href="https://reddit.com/r/mamamoo" target="_blank" rel="noopener noreferrer">MAMAMOO Subreddit</a>
            <a href="https://mapocaco.com/" target="_blank" rel="noopener noreferrer">MAMAMOO Online Photocard database</a>
          </div>
          <div class="resources-container-row-content">
            <h3>FEEDBACK</h3>
            <p>
              We are open to any user suggestions or comments regarding the website. Feel free to leave a message: stanmamamoo@testmail.com
            </p>
          </div>
        </div>
        <footer class="about-content-footer">
          <p>Get connected with MAMAMOO</p>
          <SocialMediaButtons background="color"/>
        </footer>
      </section>
    </PageTemplate>
  )
}

export default Resources;