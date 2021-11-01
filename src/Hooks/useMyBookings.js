import { useEffect, useState } from "react"
import useAuth from "./useAuth";

const useMyBookings = ()=>{
    const [bookings,setBookings] = useState([]);
    const [count,setCount] =useState();
    const [loading,setLoading] = useState(false);
    const {user} = useAuth();
    useEffect(()=>{
        setLoading(true);
        fetch(`https://agile-savannah-26154.herokuapp.com/bookings/${user.email}`)
        .then(res=>res.json())
        .then(data=>{
            setBookings(data);
            setCount(data.length);
            setLoading(false);
        })
    },[])

    return{
        bookings,
        setBookings,
        count,
        setCount,
        loading,
        setLoading
    }
}

export default useMyBookings;