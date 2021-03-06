import React from 'react';
import { Link } from 'react-router-dom';
import './travelPack.css';

const TravelPackage = ({travelPackage}) => {
    const {name,_id,image,duration,cost} = travelPackage;
    return (
        <div className="col-lg-4 card-style gx-5 gy-5">
            <div className="image-container">
                <img className="image-style" src={image} alt="" />
            </div>
            <div className="d-flex justify-content-between content-conteiner">
                <p>${cost}/Per Person</p>
                <p><i className="far fa-calendar-alt"></i> {duration} Days</p>
            </div>
            <div className="btn-conteiner">
                <h4 className="location"><i className="fas fa-map-marker-alt "></i> {name}</h4>
                <Link to={`/packagedetail/${_id}`}>
                    <button className="btn-book">Book Now</button>
                </Link>
                
            </div>
            
        </div>
    );
};

export default TravelPackage;