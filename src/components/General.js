import { useHistory } from "react-router-dom";
import * as utils from "../utils.js"

function General() {
  let history = useHistory();

  const images = utils.importAll(require.context('../assets', false, /\.svg/));

  function handleBackButton() {
    history.push("/");
  }

  return (
    <div class="general-container">
      <div class="general-content">
        <div class="general-title">
          <h2>GENERAL</h2>
        </div>
        <div class="general-description">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Aenean vulputate ipsum ex, non tempor turpis laoreet eget. 
            Cras venenatis scelerisque ligula, eget viverra justo tincidunt non. 
            Vivamus dui neque, tempus non sagittis ac, fermentum id odio. 
            Donec elementum pharetra convallis. Phasellus pellentesque hendrerit tortor ac dignissim. 
            Mauris faucibus turpis a ligula tempus lacinia. Donec eleifend lacus gravida enim pretium,
            ut volutpat velit tincidunt. Integer volutpat pellentesque elit, ut efficitur est varius ut.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Aenean vulputate ipsum ex, non tempor turpis laoreet eget. 
            Cras venenatis scelerisque ligula, eget viverra justo tincidunt non. 
            Vivamus dui neque, tempus non sagittis ac, fermentum id odio. 
            Donec elementum pharetra convallis. Phasellus pellentesque hendrerit tortor ac dignissim. 
            Mauris faucibus turpis a ligula tempus lacinia. Donec eleifend lacus gravida enim pretium,
            ut volutpat velit tincidunt. Integer volutpat pellentesque elit, ut efficitur est varius ut.
          </p>
          <h3>Latest Comeback</h3>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/UoI9riNffEU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <button class="media-button" onClick={handleBackButton}>
            <img class="icon" src={images["home.svg"].default}/>
          </button>
        </div>
      </div>
      {/* <div class="footer">
        <button class="media-button" onClick={handleBackButton}>
          <img class="icon" src={images["home.svg"].default}/>
        </button>
      </div> */}
    </div>
  );
}

export default General;