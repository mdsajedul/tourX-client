import React from 'react';
import { Carousel } from 'react-bootstrap';
import './banner.css';
import one from '../../../Images/one.png';
import two from '../../../Images/two.png';
import three from '../../../Images/three.png';

const Banner = () => {
    return (
        <div>
            <Carousel fade>
                <Carousel.Item>
                    <img
                    className="d-block w-100 banner-img"
                    src={one}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                        <div className="carosel-style">
                            <h1>Amazing Tour In Madagascar</h1>
                        </div>
                    
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100 banner-img"
                    src={two}
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                        <div className="carosel-style">
                            <h1>Amazing Tour In Indonesia</h1>
                        </div>
                    
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100 banner-img"
                    src={three}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                        <div className="carosel-style">
                            <h1>Amazing Tour In Hampshire</h1>
                        </div>
                    
                    </Carousel.Caption>
                </Carousel.Item>
        </Carousel>
        </div>
    );
};

export default Banner;