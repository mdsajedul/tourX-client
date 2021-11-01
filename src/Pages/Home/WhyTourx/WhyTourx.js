import React from 'react';
import './WhyTourx.css';

const WhyTourx = () => {
    return (
        <div className="m-5">
            <div className="why-header">
                <h4>Why TourX</h4>
                <h1>Why You Travel With <br /> Tourx</h1>
            </div>
            <div class="row row-cols-1 row-cols-md-4 g-4">
                <div class="col">
                    <div class="card">
                        <i className="fas why-card-icon fa-user-shield"></i>
                        <h4>2000+ Our worldwide guide</h4>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <i className="far why-card-icon fa-handshake"></i>
                        <h4>100% trusted travel agency</h4>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <i className="fas why-card-icon fa-user-clock"></i>
                        <h4>10+ year of travel experience</h4>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <i className="fas why-card-icon fa-users"></i>
                        <h4>90% of our traveller happy</h4>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default WhyTourx;