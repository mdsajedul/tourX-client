import { useEffect, useState } from "react"
import useAuth from "./useAuth";

const useMyBookings = ()=>{
    const [bookings,setBookings] = useState([]);
    const [count,setCount] =useState(0);
    const {user} = useAuth();
    useEffect(()=>{
        fetch(`https://agile-savannah-26154.herokuapp.com/bookings/${user.email}`)
        .then(res=>res.json())
        .then(data=>{
            setBookings(data);
            setCount(data.length);
        })
    },[])

    return{
        bookings,
        setBookings,
        count,
        setCount,
    }
}

export default useMyBookings;