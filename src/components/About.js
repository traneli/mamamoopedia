import { useHistory } from "react-router-dom";
import * as utils from "../utils.js"
import UpperButtonMenuSelection from './UpperButtonMenuSelection.js';

function About() {
  let history = useHistory();

  const images = utils.importAll(require.context('../assets', false, /\.svg/));

  function handleBackButton() {
    history.push("/");
  }

  return (
    <div class="about-container">
      <section class="div-header">
        <img class="div-header-logo" src={images["mmm-logo-black.svg"].default}/>
        <UpperButtonMenuSelection/>
      </section>
      <section class="about-content">
        <div class="about-content-top">
          <h2>Who is MAMAMOO?</h2>
          <p>Aliquam porta tincidunt lacus, id vulputate ligula mattis non. Etiam pharetra porttitor semper. </p>
        </div>
      </section>
    </div>
  );
}

export default About;