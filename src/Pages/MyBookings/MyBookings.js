import React, { useEffect, useState } from 'react';
import './myBookings.css';

const MyBookings = () => {
    const [bookings,setBookings] = useState([])
    useEffect(()=>{

    },[])
    return (
        <div className="p-5">
            <div className="my-bookings-container w-100">
                <div className="bookings-header d-flex align-items-center p-2">
                    <i class="fas fa-list pe-2"></i> 
                    <h4>My Bookings List</h4>
                </div>
            </div>
        </div>
    );
};

export default MyBookings;