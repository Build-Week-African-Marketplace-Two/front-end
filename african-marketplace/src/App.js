import React, { useState } from 'react';
import NavCompo from './NavCompo';
import LoginCompo from './LoginCompo';
import RegisterCompo from './RegisterCompo';
import RegisterCard from './RegisterCard';
import { Route } from 'react-router';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import './App.css';


function App() {

  const [register, setRegister] = useState([
    {
      firstname: "Sathya",
      lastname: "Ganesan",
      email: "sathya@gmail.com",
      password: "password",
      conpassword: "password",
      state: "Virginia",
      status: "Business Owner"
    }
  ]);

  const addNewUser = (formData) => {
    const newUser = {
      firstname: formData.firstname,
      lastname: formData.lastname,
      email: formData.email,
      password: formData.password,
      conpassword: formData.conpassword,
      state: formData.state,
      status: formData.status
    }
    setRegister([...register, newUser]);
  };

  const [signin, setSignin] = useState([{
    email: "John",
    password: "password"
  }]);

  const userSignin = (signinData) => {
    const welcomeUser = {
      email: signinData.email,
      password: signinData.password,
    }
    setSignin([...signin, welcomeUser]);
  };

  const Navbar = styled.nav`
    display: flex;
    justify-content: space-between;
    align-content: center;
  `;

  const Navdiv = styled.div`
    margin: 10px;
  `;

 
  return (
    <div>
      <nav className = "navbar">
        <h2 className = "nav-title">African Marketplace</h2>
        <div className = "nav-div">
          <Link to = "/">Home</Link>
          <Link to = "/register">Sign Up</Link>
          <Link to = "/login">Login</Link>
        </div>
      </nav>

      <Route path = "/NewUser">
        <NavCompo />
      </Route>

      <Route path = "/login">
        <LoginCompo loginAttr={userSignin} />
      </Route>
      
      
      <Route path = "/register">
        <RegisterCompo registerAttr={addNewUser} />
        <RegisterCard cardAttr = {register} />
      </Route>   
      
    </div>
  );
}

export default App;
