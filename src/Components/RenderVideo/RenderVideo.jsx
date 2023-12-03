import React from 'react';
import './RenderVideo.css';

function RenderVideo() {
    return (
        <div className='home-banner'>
            <video playsInline="playsinline" autoPlay="autoplay" muted="muted" loop="loop">
                <source src="./images/acadamy.mp4" type="video/mp4" />
            </video>
        </div>
    );
}

export default RenderVideo;