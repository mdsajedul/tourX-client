import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../Hooks/useAuth';

// import useFirebase from '../../../Hooks/useFirebase';
const Login = () => {
    const {signInWithGoogle,setUser,setLoading} = useAuth()

    const location = useLocation();
    const redirect_uri = (location.state?.from)? '/home#package' : '/home';
    const history = useHistory();

    const handleGoogleLogin=()=>{
        signInWithGoogle()
        .then(result=>{
            setUser(result.user);
            window.location.href = redirect_uri;
        })
        .finally(()=>setLoading(false));
    }

    return (
        <div className="d-flex justify-content-center align-items-center m-5 ">
            <div >
                <h1 className="fs-1">Please Login Here</h1>
                <div className="d-flex justify-content-center m-5">
                    <button className="btn btn-primary text-white" onClick={handleGoogleLogin}>Login with google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;