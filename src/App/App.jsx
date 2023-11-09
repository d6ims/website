import React from 'react';

export default function App() {
    return (
        <>
            <h1>Hello, world!</h1>
            <RenderVideo />
        </>
    );
}

function RenderVideo() {
    return (
        <div>
            <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
                <source src="./acadamy.mp4" type="video/mp4" />
            </video>
        </div>
    );
}
