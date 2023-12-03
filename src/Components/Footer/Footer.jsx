import React from 'react';
import './Footer.css';

const Footer = () => {
    return (<>
        <div className='footer-wrapper'>
            <div className="footer-container">
                <div className="footer-logo-content">
                    <div className="footer-logo-container">
                        <img src="./images/logo.png" className="footer-logo"></img>
                    </div>
                    <div className="footer-description"><p></p>
                    </div>
                </div>
                <div className="footer-text-content">
                    <div className="footer-content-wrapper">
                        <div className="footer-address-wrap footer-wrap">
                            <div className="footer-text-address-icon">
                                <i className="fa-solid fa-location-dot fa-beat"></i>
                            </div>
                            <div className="footer-text-address">
                                <span> #42, HN Halli Lake Road, Doddakenalli, Bengaluru - 560035</span>
                            </div>
                        </div>
                        <div className="footer-email-wrap footer-wrap">
                            <div className="email-content-icon">
                                <a href="mailto:info@d6immersivestudio.com">
                                    <i aria-hidden="true" className="fa-solid fa-envelope fa-beat"></i>
                                </a>
                            </div>
                            <div className="email-text-wrapper">
                                <h3 className="email-content-text">
                                    <a href="mailto:info@d6immersivestudio.com">info@d6immersivestudio.com</a>
                                </h3>
                            </div>
                        </div>
                        <div className='footer-phone-number-wrap footer-wrap'>
                            <div className="phone-number-icon">
                                <i className="fa-solid fa-phone fa-beat"></i>
                            </div>
                            <h3 className="phone-number-text">
                                <span>987-654-3210</span>
                            </h3>

                        </div>
                        <div className='footer-social-media-wrap footer-wrap'>
                            <i className="fab fa-facebook"></i>
                            <i className="fab fa-x-twitter"></i>
                            <i className="fab fa-instagram"></i>
                            <i className="fab fa-linkedin"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>);
};

export default Footer;