import {  getAuth, createUserWithEmailAndPassword } from '@firebase/auth';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import useAuth from '../../../Hooks/useAuth';

const Login = () => {
    const auth = getAuth();
    const {sinInUsingGoogle} = useAuth();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
   

    const handleEmailChange = e =>{
        setEmail(e.target.value);
    }

    const handlePasswordChange = e =>{
        setPassword(e.target.value);
    }

     const handleRegistration = e => {
        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
       
          const user = result.user;
          console.log(user);
        });
       e.preventDefault();
     }

    return (
        <div className="mx-auto w-50">
            <h2>Please Login</h2>
            <button onClick={sinInUsingGoogle} className="btn btn-dark mt-5 px-5">Google Sign In</button>

 <Form onSubmit={handleRegistration}>
  <Form.Group className="mb-3 mt-5" controlId="formBasicEmail">
    <Form.Label>Email</Form.Label>
    <Form.Control onBlur={handleEmailChange} type="email" placeholder="Enter email" required/>
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control onBlur={handlePasswordChange} type="password" placeholder="Password" required/>
  </Form.Group>
  {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group> */}
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>

        </div>
    );
};

export default Login;