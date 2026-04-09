import * as utils from "../utils.js"

const urls = [
  "https://www.instagram.com/mamamoo_official/",
  "https://cafe.daum.net/mamamoo/_rec",
  "https://music.apple.com/us/artist/mamamoo/818951094",
  "https://www.vlive.tv/channel/FCD4B",
  "https://x.com/rbw_mamamoo",
  "https://www.facebook.com/RBW.MAMAMOO/",
  "https://open.spotify.com/artist/0XATRDCYuuGhk0oE7C0o5G?si=R3FSOiBHToCLVX_iUK4oHA",
  "https://www.youtube.com/c/MAMAMOO_OFFICIAL/",
];

function SocialMediaButtons(props) {
    const images = utils.importAll(require.context('../assets', false, /\.svg/));
    
    function openPage(url) {
        window.open(url, "_blank");
    }

    return (
      <div class={`socialmedia-btn-bar-${props.background}`} position={props.position}>
        <button type="button" class="media-button" onClick={() => openPage(urls[7])}>
          <img class="icon" src={images["icon_youtube_WHITE.svg"]} alt="youtube icon"/>
        </button>
        <button type="button" class="media-button" onClick={() => openPage(urls[0])}>
          <img class="icon" src={images["icon_instagram_WHITE.svg"]} alt="instagram icon"/>
        </button>
        <button type="button" class="media-button" onClick={() => openPage(urls[1])}>
          <img class="icon" src={images["icon_fancafe_WHITE.svg"]} alt="fancafe icon"/>
        </button>
        {/* <button type="button" class="media-button" onClick={() => openPage(urls[3])}>
          <img class="icon" src={images["icon_vlive_WHITE.svg"]} alt="vlive icon"/>
        </button> */}
        <button type="button" class="media-button" onClick={() => openPage(urls[4])}>
          <img class="icon" src={images["icon_x_WHITE.svg"]} alt="x icon"/>
        </button>
        <button type="button" class="media-button" onClick={() => openPage(urls[5])}>
          <img class="icon" src={images["icon_facebook_WHITE.svg"]} alt="facebook icon"/>
        </button>
      </div>
  );
}

export default SocialMediaButtons;