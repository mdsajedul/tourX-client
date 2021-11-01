import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import './manageAllBookings.css';

const ManageAllBookings = () => {

    const [bookings,setBookings] = useState([])
    const [booking,setBooking] = useState({status:'Approved'});
    const [loading,setLoading] = useState(false);
    const {user} = useAuth()
    useEffect(()=>{
        setLoading(true);
        fetch(`https://agile-savannah-26154.herokuapp.com/bookings/`)
        .then(res=>res.json())
        .then(data=>{
            setBookings(data);
            setLoading(false);
        })
    },[booking])

    const deleteHandler=(id)=>{
        const alertDelete = window.confirm('Are you sure?');
        if(alertDelete){
            const url = `https://agile-savannah-26154.herokuapp.com/bookings/${id}`;
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
    const aproveHandler=(id)=>{
        
        setBooking({status:'Approved'});
        const url = `https://agile-savannah-26154.herokuapp.com/bookings/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Update Successful');
                    window.location.href = '/manageallbookings';
                }
            })
    }

    return (
        <div className="p-5">
            <div className="my-bookings-container w-100">
                <div className="bookings-header  p-2">
                    <div className="d-flex align-items-center">
                        <i className="fas fa-list pe-2"></i> 
                        <h4>All Bookings</h4>
                    </div>
                </div>
                <div>

                <div className="d-flex justify-content-center">
                {
                   loading && 
                    <div className="spinner-grow text-dark"></div>
                }
                </div>
                    <ul>
                    {
                        bookings.map(booking=> <li key={booking._id} className="booking-content my-3">
                            <div className="d-flex justify-content-between">
                                <div className="d-flex align-items-center ">
                                    <i className="fas fa-chevron-right pe-2"></i>
                                    <h5>{booking.packageName}</h5>
                                    <p className="ps-3">Status: {booking.status}</p>
                                </div>
                                <div>
                                    <button onClick={()=>aproveHandler(booking._id)} className="aprove-btn">Aprove</button>
                                    <button onClick={()=>deleteHandler(booking._id)} className="delete-btn"><i className="fas fa-trash-alt"></i></button>
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

export default ManageAllBookings;