import React, { useState } from "react";
import { axiosWithAuth } from '../src/axiosWithAuth';
import { useHistory } from 'react-router-dom';

const Login = () => {

  const[user, setUser] = useState({
    credentials: {
      username: "",
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
      .post("/api/auth/login", {username: user.credentials.username, password:  user.credentials.password})
      .then((res) => {
        console.log(res);
        setUser({username: user.credentials.username, password:  user.credentials.password})
        window.localStorage.setItem("token", res.data.payload);
        history.push("/cart");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <form onSubmit={login}>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={user.username}
          onChange={handleChange}
        />
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={user.password}
          onChange={handleChange}
        />
        <button type="submit">Log in</button>
      </form>
    </div>
  );
};

export default Login;