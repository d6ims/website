import React from 'react';
import './CardItems.css';


const renderCardText = ({ title, description1, description2, description3 }, isSecond) => {
    const textAlign = isSecond ? 'card-align-left' : 'card-align-right';
    return (<div className='card-wrapper'>
        <div className='card-padding-wrapper'>
            <div className={`card-title-wrapper ${textAlign}`}>
                <h2 className="card-items-title">{title}</h2>
            </div>
            <div className={`card-desc-wrapper ${textAlign}`}>
                <div className='card-items-description'>
                    <p>{description1}</p>
                    <p>{description2}</p>
                    <p>{description3}</p>
                </div>
            </div>
        </div>
    </div>);
};

const renderCardImage = (imageUrl) => {
    return (<div className='card-wrapper'>
        <div className='card-padding-wrapper'>
            <img className="card-items-image" src={imageUrl} />
        </div>
    </div>);
};

const CardItems = (props) => {
    const { title, description1, description2, description3, imageUrl, isSecond } = props || {};
    return (<section className='card-items-section'>
        <div className="card-items-container">
            {isSecond ? '' : renderCardText({ title, description1, description2, description3 }, isSecond)}
            {renderCardImage(imageUrl)}
            {isSecond ? renderCardText({ title, description1, description2, description3 }, isSecond) : ''}

        </div></section>);
};

export default CardItems;