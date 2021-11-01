import React from 'react';
import './travellerSay.css';

const TravellerSay = () => {
    return (
        <div >
            <div className="traveller-haeder">
                <h4>Our Traveller Story</h4>
                <h1>What Oue Traveller Say <br /> About Us</h1>
            </div>

            <div class="row row-cols-1 mx-1 row-cols-md-3 g-4">
                <div class="col">
                    <div class="card-traveller d-flex align-items-center">
                       <img className="traveller-img" src="https://i.ibb.co/jWDCZQj/1.png" alt="" />
                       <div className="ps-3">
                           <h4>Shwan Pull</h4>
                           <h5>Traveller</h5>
                           <p>TourX is one of the best company ever I have seen.They provide world class service</p>
                       </div>
                    </div>
                </div>
                <div class="col">
                <div class="card-traveller d-flex align-items-center">
                       <img className="traveller-img" src="https://i.ibb.co/JR8qNxK/2.png" alt="" />
                       <div className="ps-3">
                           <h4>Dina Jems</h4>
                           <h5>Traveller</h5>
                           <p>My last trip was with TourX. I am very much for their service. Their selected tour guide was so friendly</p>
                       </div>
                    </div>
                </div>
                <div class="col">
                <div class="card-traveller d-flex align-items-center">
                    
                       <img className="traveller-img" src="https://i.ibb.co/kJdrtqq/3.png" alt="" />
                       <div className="ps-3">
                           <h4>Jahid Hassan</h4>
                           <h5>Traveller</h5>
                           <p>I just love their services. I am planning my next trip with them. My last trip was so much fun with them</p>
                       </div>
                    </div>
                </div>
               
            </div>
        </div>
    );
};

export default TravellerSay;