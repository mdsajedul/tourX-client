import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import './myBookings.css';

const MyBookings = () => {
    const [bookings,setBookings] = useState([])
    const [count,setCount] = useState(0);
    const {user} = useAuth()
    useEffect(()=>{
        fetch(`http://localhost:5000/bookings/${user?.email}`)
        .then(res=>res.json())
        .then(data=>setBookings(data))
    },[])

    const deleteHandler=(id)=>{
        const alertDelete = window.confirm('Are you sure?');
        if(alertDelete){
            const url = `http://localhost:5000/bookings/${id}`;
            fetch(url,{
                method:'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
                if(data.deletedCount > 0){
                    alert('Successfully Deleted Booking');
                    const remainningBookings = bookings.filter(booking => booking._id !==id);
                    setBookings(remainningBookings);
                }
            });
        }
    }

    return (
        <div className="p-5">
            <div className="my-bookings-container w-100">
                <div className="bookings-header  p-2">
                    <div className="d-flex align-items-center">
                        <i class="fas fa-list pe-2"></i> 
                        <h4>My Bookings List</h4>
                    </div>
                </div>
                <div>
                    <ul>
                    {
                        bookings.map(booking=> <li className="booking-content my-3">
                            <div className="d-flex justify-content-between">
                                <div className="d-flex align-items-center ">
                                    <i class="fas fa-chevron-right pe-2"></i>
                                    <h5>{booking.packageName}</h5>
                                </div>
                                <div>
                                    <button onClick={()=>deleteHandler(booking._id)} className="delete-btn"><i class="fas fa-trash-alt"></i></button>
                                </div>
                            </div>
                            
                            <hr />
                        </li>)
                    }
                    </ul>
                    
                </div>
            </div>
        </div>
    );
};

export default MyBookings;