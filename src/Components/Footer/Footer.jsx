import React from 'react';
import './Footer.css';

const Footer = () => {
    return(<>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <div className='footer-wrapper'>
            <div className="footer-container">
                <div className="footer-box-content">
                    <div className="footer-logo-container">
                        <img src="./images/logo.png" className="footer-logo"></img>
                    </div>
                    <div className="footer-description">
                        <p>Providing immersive experiences in audio-visual, theatrical lighting, low voltage and user-friendly control systems. </p>
                    </div>
                </div>
                <div className="footer-conatiner">
                    <div className="footer-media-wrapper footer-icon-font">
                        <div className="footer-address-wrap">
                            <i class="fa-solid fa-location-dot fa-beat"></i>
                            <div className="footer-text-address">
                                <span> #42, HN Halli Lake Road, Doddakenalli, Bengaluru, Karnataka 560035</span>
                            </div>
                        </div>
                        <div className='footer-email-wrap'>
                            <i class="fa-solid fa-envelope"></i>
                        </div>
                        <div className='footer-phone-wrap'>
                            <i class="fa-solid fa-phone fa-beat"></i>
                        </div>
                        <div className='footer-social-media-wrap'>
                        <i class="fab fa-twitter"></i>
                        <i class="fab fa-facebook"></i>
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