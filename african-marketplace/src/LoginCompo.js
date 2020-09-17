import React, { useState } from "react";
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { useHistory } from 'react-router-dom';

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  const[user, setUser] = useState({
    credentials: {
      email: "",
      password: "",
    }
  });

  const history = useHistory();

  const handleChange = e => {
    setUser({
      credentials: {
        ...user.credentials,
        [e.target.name]: e.target.value
      }
    })
  };

  const login = e => {
    console.log(user.credentials);
    e.preventDefault();
    axiosWithAuth()
      .post("api/login", user.credentials)
      .then((res) => {
        console.log(res);
        window.localStorage.setItem("token", res.data.payload);
        history.push("/bubblepage");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <form onSubmit={login}>
        <label>Email:</label>
        <input
          type="text"
          name="email"
          value={user.credentials.email}
          onChange={handleChange}
        />
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={user.credentials.password}
          onChange={handleChange}
        />
        <button type="submit">Log in</button>
      </form>
    </div>
  );
};

export default Login;