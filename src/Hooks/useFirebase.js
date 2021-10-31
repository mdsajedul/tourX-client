import { useEffect, useState } from "react"
import initializeAuthentication from "../Pages/Login/Firebase/firebase.config";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";

initializeAuthentication();

const useFirebase = ()=>{
    const [user,setUser]=useState();
    const [isLoading,setLoading] = useState();

    const auth = getAuth();

    const signInWithGoogle = () =>{
        setLoading(true);
        const googleProvider = new GoogleAuthProvider();

        signInWithPopup(auth,googleProvider)
        .then(result=>{
            setUser(result.user);
        })
        .finally(()=>setLoading(false));
    }

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
            setLoading(false);
        });
        return () => unsubscribed;
    }, [])

    const logOut = () => {
        setLoading(true);
        signOut(auth)
            .then(() => { })
            .finally(() => setLoading(false));
    }
    
    return{
        user,isLoading,signInWithGoogle,logOut
    }
}

export default useFirebase;