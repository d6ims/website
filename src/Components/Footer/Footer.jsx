import React from 'react';
import './Footer.css';

const Footer = () => {
    return (<>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
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
                                <i class="fa-solid fa-location-dot fa-beat"></i>
                            </div>
                            <div className="footer-text-address">
                                <span> #42, HN Halli Lake Road, Doddakenalli, Bengaluru - 560035</span>
                            </div>
                        </div>
                        <div class="footer-email-wrap footer-wrap">
                            <div class="email-content-icon">
                                <a href="mailto:info@d6immersivestudio.com" tabindex="-1">
                                    <i aria-hidden="true" class="fa-solid fa-envelope fa-beat"></i>
                                </a>
                            </div>
                            <div class="email-text-wrapper">
                                <h3 class="email-content-text">
                                    <a href="mailto:info@d6immersivestudio.com">info@d6immersivestudio.com</a>
                                </h3>
                            </div>
                        </div>
                        <div className='footer-phone-number-wrap footer-wrap'>
                            <div className="phone-number-icon">
                                <i class="fa-solid fa-phone fa-beat"></i>
                            </div>
                            <h3 class="phone-number-text">
                                <span>987-654-3210</span>
                            </h3>

                        </div>
                        <div className='footer-social-media-wrap footer-wrap'>
                            <i class="fab fa-facebook"></i>
                            <i class="fab fa-x-twitter"></i>
                            <i class="fab fa-instagram"></i>
                            <i class="fab fa-linkedin"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>);
};

export default Footer;