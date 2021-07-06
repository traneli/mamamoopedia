import React from "react";
import sample from '../assets/mmm_aya_1080p_compressed.mp4';

function VideoBackground() {
    return (
        <video className='videoBackground' autoPlay loop muted>
          <source src={sample} type='video/mp4'/>
        </video>
    );
}

export default VideoBackground;