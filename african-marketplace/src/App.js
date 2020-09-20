import React, { useState } from 'react';
import NavCompo from './NavCompo';
import LoginCompo from './LoginCompo';
import RegisterCompo from './RegisterCompo';
import RegisterCard from './RegisterCard';
import { Route, Link } from 'react-router-dom';

function App() {

  const [register, setRegister] = useState([
    {
      firstname: "Sathya",
      lastname: "Ganesan",
      email: "sathya@gmail.com",
      password: "password",
      conpassword: "password",
      state: "",
      status: ""
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
  }

  return (
    <div className = "App">
      <nav>
        <div>
          {/* <Link to = "/">Home</Link> */}
          {/* <Link to='/NewUser'>SignUp</Link> */}
          {/* <Link to = '/existingUser'>Login</Link> */}
        </div>
      </nav>
      {/* <Route path = "/NewUser"> */}
          <NavCompo />
        {/* </Route> */}
            <LoginCompo />
      <RegisterCompo registerAttr={addNewUser} />
      <RegisterCard cardAttr = {register} />
        </div>
  );
}

export default App;
