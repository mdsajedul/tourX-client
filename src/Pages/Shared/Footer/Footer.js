import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <div>
            <div className="news-letter d-flex justify-content-center">
                <div>
                    <h2>Subscribe To Our Newsletter For Latest Update</h2>
                    <div className="  mb-3 d-flex justify-content-center ">
                        <div className="d-flex align-items-center news-letter-content">
                            <input type="text" placeholder="Email"/>
                            <button className="btn-subs">Subscribe</button>
                        </div>
                        
                    </div>
                </div>
               
            </div>

            <div className="main-footer">
                <div className="row gx-0 ">
                    <div className="col-lg-4 mt-5 p-5">
                        <h1>Tour<span>X</span></h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid maxime aut ut voluptate dolorum nisi ducimus ratione</p>
                    </div>
                    <div className="col-lg-4 mt-5 p-5">
                        <h3>Contuct Us</h3>
                        <div>
                            <p>+01852-1265122 <br />
                            +01852-1265122</p>
                        </div>
                        <div>
                            <p>info@example.com <br />
                            support@example.com</p>
                        </div>
                        <div>
                            <p>2752 Willison Street <br />
                            Eagan, United State
                            </p>
                            
                        </div>
                    </div>
                    <div className="col-lg-4 mt-5 p-5">
                    <h3>Keep in touch </h3>
                        <div className="social-icon">
                            <a  rel="noopener noreferrer" target="_blank" href="https://www.facebook.com/"><i className="fab fa-facebook-square"></i></a>
                            <a rel="noopener noreferrer" target="_blank" href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a>
                            <a rel="noopener noreferrer" target="_blank" href="https://twitter.com/"><i className="fab fa-twitter-square"></i></a>
                            <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/"><i className="fab fa-linkedin"></i></a>
                        </div>
                    </div>
                </div>
                <hr />
                <p className="text-center py-3 m-0"><small >Copyright 2021 <span className="tourx-color">TourX</span> | All right reserved </small></p>
            </div>
        </div>
    );
};

export default Footer;