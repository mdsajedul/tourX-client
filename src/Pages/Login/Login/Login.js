import React from 'react';

const Login = () => {
    return (
        <div className="d-flex justify-content-center align-items-center m-5 ">
            <div >
                <h1 className="fs-1">Please Login Here</h1>
                <div className="d-flex justify-content-center m-5">
                    <button className="btn btn-primary text-white ">Login with google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;