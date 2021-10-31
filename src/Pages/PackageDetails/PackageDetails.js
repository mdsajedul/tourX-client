import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import "./packageDetails.css";

const PackageDetails = () => {
    const {packageId} = useParams();
    const [travelPackage,setTravelPackage]= useState({});
    useEffect(()=>{
        fetch(`http://localhost:5000/packages/${packageId}`)
        .then(res=>res.json())
        .then(data=>setTravelPackage(data));
    },[])
    console.log(travelPackage)
    
    return (
        <div>
            <div className="package-banner "/>
            <div className="package-content d-flex justify-content-center align-items-center">
                <h1>Tour Package Details</h1>
            </div>
            <div className="package-details">
                <div className="row gx-0 m-2">
                    <div className="col-lg-8 p-5">
                        <img className="package-img" src={travelPackage.image} alt="" />
                        <h1 className="my-3">{travelPackage.name}</h1>
                        < hr className="hr-color" />
                        <div className="d-flex justify-content-between content-conteiner">
                            <p>${travelPackage.cost}/Per Person</p>
                            <p><i className="far fa-calendar-alt"></i> {travelPackage.duration} Days</p>
                        </div>
                        < hr className="hr-color" />
                        <div>
                            <h4>Overview</h4>
                            <p>{travelPackage.overview}</p>
                        </div>
                    </div>
                    <div className="col-lg-4 ">

                    </div>
                </div>
            </div>
        </div>
    );
};

export default PackageDetails;