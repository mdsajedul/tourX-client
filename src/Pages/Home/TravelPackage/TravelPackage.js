import React from 'react';
import './travelPack.css';

const TravelPackage = ({travelPackage}) => {
    const {name,overview,_id,image,duration,cost} = travelPackage;
    console.log(travelPackage)
    return (
        <div className="col-lg-4 p-3 ">
            <div className="image-container">
                <img className="image-style" src={image} alt="" />
            </div>
            <div className="d-flex justify-content-between content-conteiner">
                <p>${cost}/Per Person</p>
                <p><i class="far fa-calendar-alt"></i> {duration} Days</p>
                
            </div>
            <h4 className="location"><i class="fas fa-map-marker-alt "></i> {name}</h4>
        </div>
    );
};

export default TravelPackage;