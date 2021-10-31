import React, { useEffect, useState } from 'react';
import TravelPackage from '../TravelPackage/TravelPackage';
import './travelPackage.css';

const TravelPackages = () => {
    const [packages,setPackages] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/packages')
        .then(res=>res.json())
        .then(data=>setPackages(data))
    },[])
    return (
        <div>
            <div className="package-head my-5">
                <h4>Choose Your Package</h4>
                <h1>Select Your Best Package <br /> For Your Travel</h1>
            </div>
            <div className="row gx-0 p-3">
                {
                    packages.map(travelPackage=><TravelPackage key={travelPackage._id}
                        travelPackage={travelPackage} ></TravelPackage>)
                }
            </div>
        </div>
    );
};

export default TravelPackages;