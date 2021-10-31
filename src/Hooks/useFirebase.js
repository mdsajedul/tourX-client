import {getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged,signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/Login/Firebase/firebase.config";

initializeAuthentication()

const useFirebase =()=>{
    const [user,setUser] =useState({});
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();

    const signInWithGoogle = () => {
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();

        return signInWithPopup(auth, googleProvider);
           
    }
 
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [])

   

    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => { })
            .finally(() => setIsLoading(false));
    }

    return{
        setUser,
        setIsLoading,
        user,
        isLoading,
        signInWithGoogle,
        logOut
    
    }

}

export default useFirebase;