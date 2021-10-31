import React from 'react';
import useAuth from '../../../Hooks/useAuth';

// import useFirebase from '../../../Hooks/useFirebase';
const Login = () => {
    const {signInWithGoogle} = useAuth()
    return (
        <div className="d-flex justify-content-center align-items-center m-5 ">
            <div >
                <h1 className="fs-1">Please Login Here</h1>
                <div className="d-flex justify-content-center m-5">
                    <button className="btn btn-primary text-white" onClick={signInWithGoogle}>Login with google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;