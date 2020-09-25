import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import * as yup from 'yup';
import './App.css';

const Loginheader = styled.h2`
    display: flex;
    justify-content: center;
    color: green;
`;

const Loginform = styled.form`
    width: 70%;
    margin: 10px auto;
    background-color: #bffcbd;
    padding: 20px;
`;
const Button = styled.button`
  width: 100px;
  height: 40px;
  border: none;
  border-radius: 10px;
  color: blue;
  background-color: lightblue;
  font-size: 20px;
  font-weight: bolder;
`;

const formSchema = yup.object().shape({
    username: yup.string().required("Please enter your username"),
    password: yup.string().required("Please enter a valid password"),
    rememberMe: yup.boolean().oneOf([true], "Would you like to remember you")
});

const LoginCompo = (props) => {

    const [login, setLogin] = useState({
        username: "",
        password: "",
        rememberMe: false
    });

    const [errorState, setErrorState] = useState({
        username: "",
        password: "",
        rememberMe: "",
    });

    const validation = (e) => { 
        yup
            .reach(formSchema, e.target.name)
            .validate(e.target.value)
            .then((valid) => {
                setErrorState({ ...errorState, [e.target.name]: "" });
                console.log(valid);
            })
            .catch((err) => { 
                setErrorState({ ...errorState, [e.target.name]: err.errors[0] });
                console.log(err.errors);
            });
    };

    const formSubmit = (e) => { 
        e.preventDefault();
        props.loginAttr(login);
        setLogin({
            username: "",
            password: "",
            rememberMe: ""
        });
        console.log("Welcome Back !!")
        axios
            .post(`https://bw-african-marketplace.herokuapp.com/api/auth/login`, {username: login.username, password: login.password})
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
    };

    const changeHangler = (e) => {
        e.persist();
        validation(e);
        let anyVariable = e.target.type === "checkbox" ? e.target.checked : e.target.value;
        setLogin({ ...login, [e.target.name]: anyVariable });
    };

    return (
        <div>
            <Loginheader>Customer Login</Loginheader>
            <Loginform onSubmit = {formSubmit}>
                <p><label htmlFor="customeremail" className = "textlable"> User Name <br></br>  
                    <input className = "textarea" type="text" name="username" id="username" value={login.username} onChange={changeHangler} />     
                    {errorState.username.length > 0 ? <p className = "error">{errorState.username}</p> : null}
                </label></p>
                <p><label htmlFor="customerPassword" className = "textlable"> Password <br></br>
                    <input className = "textarea" type="password" name="password" id="password" value={login.password} onChange={changeHangler} />  
                    {errorState.password.length > 0 ? <p className = "error">{errorState.password}</p> : null}
                </label></p>
                <p><label htmlFor="rememberMe">Rememebr Me <input type="checkbox" name="rememberMe" id="rememberMe" value={login.terms} onChange={changeHangler} />
                </label></p>
                <Button type = "submit">Login</Button>
            </Loginform>
        </div>
    );
}

export default LoginCompo;
