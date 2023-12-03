import React from 'react';
import { Header, RenderVideo, CardItems, Footer }  from './Components';
import './index.css';
import cardItems from './mockData/cardItems.json';
import cardItems2 from './mockData/cardItems2.json';
import cardItems3 from './mockData/cardItems3.json';

export default function App() {
    return (
        <>
            <Header />
            <RenderVideo />
            <CardItems {...cardItems} />
            <CardItems {...cardItems2} isSecond />
            <CardItems {...cardItems3} />
            <Footer />
        </>
    );
};
