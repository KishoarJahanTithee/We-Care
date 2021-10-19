import React from 'react';
import useAuth from '../../../Hooks/useAuth';

const Login = () => {
    const {sinInUsingGoogle} = useAuth();
    return (
        <div>
            <h2>Please Login</h2>
            <button onClick={sinInUsingGoogle} className="btn btn-dark">Google Sign In</button>
        </div>
    );
};

export default Login;