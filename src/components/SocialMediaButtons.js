import * as utils from "../utils.js"

const urls = [
    "https://www.facebook.com/RBW.MAMAMOO/",
    "https://www.instagram.com/mamamoo_official/",
    "https://open.spotify.com/artist/0XATRDCYuuGhk0oE7C0o5G?si=R3FSOiBHToCLVX_iUK4oHA",
    "https://twitter.com/rbw_mamamoo",
    "https://www.vlive.tv/channel/FCD4B",
    "https://www.youtube.com/c/MAMAMOO_OFFICIAL/"
];

function SocialMediaButtons() {
    const images = utils.importAll(require.context('../assets', false, /\.svg/));

    function openPage(url) {
        window.open(url, "_blank");
    }

    return (
        <div class="socialmedia-btn-bar">
            <button type="button" class="media-button" onClick={() => openPage(urls[0])}>
              <img class="icon" src={images["facebook.svg"].default}/>
            </button>
            <button type="button" class="media-button" onClick={() => openPage(urls[1])}>
              <img class="icon" src={images["instagram.svg"].default}/>
            </button>
            <button type="button" class="media-button" onClick={() => openPage(urls[2])}>
              <img class="icon" src={images["spotify.svg"].default}/>
            </button>
            <button type="button" class="media-button" onClick={() => openPage(urls[3])}>
              <img class="icon" src={images["twitter.svg"].default}/>
            </button>
            <button type="button" class="media-button" onClick={() => openPage(urls[4])}>
              <img class="icon" src={images["vlive.svg"].default}/>
            </button>
            <button type="button" class="media-button" onClick={() => openPage(urls[5])}>
              <img class="icon" src={images["youtube.svg"].default}/>
            </button>
        </div>
    );
}

export default SocialMediaButtons;