import { useHistory } from "react-router-dom";
import * as utils from "../utils.js"

function MembersWheein() {
  let history = useHistory();

  const images = utils.importAll(require.context('../assets', false, /\.(png|jp?g|svg)/));

  function handleBackButton() {
    history.push("/members");
  }

  return (
    <div class="member-page-container">
      <div class="member-page-content">
        <div class="member-page-title">
          <h2>Wheein</h2>
          <p>Jung Whee In, 정휘인</p>
          <p>1995/04/17</p>
        </div>
        <div class="member-page-description">
          <img class="member-page-img" src={images["wheein_travel.jpg"].default}/>
          <div class="member-page-text-container">
            <p class="member-page-desc-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Aenean vulputate ipsum ex, non tempor turpis laoreet eget. 
              Cras venenatis scelerisque ligula, eget viverra justo tincidunt non. 
              Vivamus dui neque, tempus non sagittis ac, fermentum id odio. 
              Donec elementum pharetra convallis. Phasellus pellentesque hendrerit tortor ac dignissim. 
              Mauris faucibus turpis a ligula tempus lacinia. Donec eleifend lacus gravida enim pretium,
              ut volutpat velit tincidunt. Integer volutpat pellentesque elit, ut efficitur est varius ut.
            </p>
            <p class="member-page-desc-text">
              Habla habla ipsum dolor sit amet, consectetur adipiscing elit. 
              Aenean vulputate ipsum ex, non tempor turpis laoreet eget. 
              Cras venenatis scelerisque ligula, eget viverra justo tincidunt non. 
              Vivamus dui neque, tempus non sagittis ac, fermentum id odio. 
              Donec elementum pharetra convallis. Phasellus pellentesque hendrerit tortor ac dignissim. 
              Mauris faucibus turpis a ligula tempus lacinia. Donec eleifend lacus gravida enim pretium,
              ut volutpat velit tincidunt. Integer volutpat pellentesque elit, ut efficitur est varius ut.
            </p>
            <ul class="member-page-desc-list">
              <li>One</li>
              <li>Two</li>
              <li>Three</li>
            </ul>
            <p class="member-page-desc-text">
              Wheein's latest comeback: 
              <a target="_blank" href="https://youtu.be/ShFKF2YN7H0"> water color (2021)</a>
            </p>
          </div>
        </div>
        <button class="media-button" onClick={handleBackButton}>
          <img class="icon" src={images["home.svg"].default}/>
        </button>
      </div>
    </div>
  );
}

export default MembersWheein;