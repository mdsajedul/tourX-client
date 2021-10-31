import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import "./packageDetails.css";
import useAuth from '../../Hooks/useAuth';
import axios from 'axios';

const PackageDetails = () => {
    const {packageId} = useParams();
    const { register, handleSubmit,reset } = useForm();
    const [travelPackage,setTravelPackage]= useState({});
    const {user} = useAuth()
    useEffect(()=>{
        fetch(`http://localhost:5000/packages/${packageId}`)
        .then(res=>res.json())
        .then(data=>setTravelPackage(data));
    },[])

    

    const onSubmit = data => {
        data.packageName = travelPackage?.name;
        data.status='Pending';
        axios.post('http://localhost:5000/bookings',data)
        .then(res=>{
            console.log(res);
            if(res.data.insertedId){
                alert('Successfully added!')
                reset();
            }
        })
    }
    
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
                    <div className="col-lg-4 mt-5 pe-5">
                        <div className="right-part">
                            <h3 className="text-center">Book This Package</h3>
                            <div className="m-4">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div>
                                        <input type="text" {...register("name", { required: true, maxLength: 20 })} value={user?.displayName} placeholder="Your Full Name" />
                                    </div>
                                    <div>
                                        <input type="text" {...register("email")}  value={user?.email} placeholder="Your Email"/>
                                    </div>
                                    <div>
                                        <input type="text" {...register("phone")}  placeholder="Your Contact Number"/>
                                    </div>
                                    <div>
                                        <input type="text" {...register("age")}  placeholder="Your Age"/>
                                    </div>
                                    <div>
                                        <input type="text" {...register("address")}  placeholder="Your Address"/>
                                    </div>

                                    <input type="submit" />
                                </form>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PackageDetails;