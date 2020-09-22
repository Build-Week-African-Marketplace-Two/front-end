import React, { useState } from 'react';
import styled from 'styled-components';

const Loginheader = styled.h2`
    display: flex;
    justify-content: center;
    color: green;
`;

const Loginform = styled.form`
    // display: flex;
    // justify-content: center;
    text-align: center
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

const LoginCompo = (props) => {

    const [login, setLogin] = useState({
        email: "",
        password: "",
        terms: false
    });

    return (
        <div>
            <Loginheader>Customer Login</Loginheader>
            <Loginform>
                <p><label htmlFor="customeremail"> Email:  
                    <input type = "email" name = "name" id = "customeremail" />                    
                </label></p>
                <p><label htmlFor="customerPassword"> Password:  
                    <input type = "password" name = "password" id = "customerPassword" />                    
                </label></p>
                <p><label htmlFor = "rememberMe">Rememebr Me <input type = "checkbox" name = "rememberMe" id = "rememberMe" /></label></p>
                <Button type = "submit">Login</Button>
            </Loginform>
        </div>
    );
}

export default LoginCompo;