import React, { useState } from 'react';
import axios from 'axios';
import RegisterCard from './RegisterCard';



const RegisterCompo = (props) => {
    const [formState, setFormstate] = useState([
    {
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        conpassword: "",
        state: "",
        status: "",
        terms: false
    }
    ]);

    const formSubmit = (e) => {
        e.preventDefault();
        props.registerAttr(formState);
        setFormstate({ firstname: "", lastname: "", email: "", password: "", conpassword: "", state: "", status: "" });
        console.log("Registration Confirmed");
        axios.post(`https://reqres.in/api/users`, formState)
          .then(res => console.log(res))
          .catch(err => console.log(err));
    };

    const changeHandler = (e) => {
        console.log(e.target.value);
        e.persist();
        let anyVariable = e.target.type === "checkbox" ? e.target.checked : e.target.value;
        setFormstate({...formState, [e.target.name]: anyVariable})
    };
        

    return (
        <div className = "component-div">
            <h2> Registration Form </h2>
            <form onSubmit = {formSubmit}>
                <p><label htmlFor="firstName"> First Name : 
                    <input type = "text" name = "firstName" id = "firstName" onChange = {changeHandler}  />
                </label></p>
                <p><label htmlFor="lastName"> Last Name : 
                    <input type = "text" name = "lastName" id = "lastName" onChange = {changeHandler} />
                </label></p>
                <p><label htmlFor="email"> Email : 
                    <input type = "text" name = "email" id = "email" onChange = {changeHandler} />
                </label></p>
                <p><label htmlFor="password"> Password : 
                    <input type = "password" name = "password" id = "password" onChange = {changeHandler} />
                </label></p>
                <p><label htmlFor="conPassword"> Confirm Password : 
                    <input type = "password" name = "conPassword" id = "conPassword" onChange = {changeHandler} />
                </label></p>

                <p><label htmlFor = "listOfState">State : <select onChange = {changeHandler} value = {formState.state} name = "state" id = "state">  
                    <option value = "">--State of residence--</option>
                    <option value = "alabama">Alabama</option>
                    <option value = "alaska">Alaska</option>
                    <option value = "arizona">Arizona</option>
                    <option value = "arkansas">Arkansas</option>
                    <option value = "california">California</option>
                    <option value = "colorado">Colorado</option>
                    <option value = "connecticut">Connecticut</option>
                    <option value = "delaware">Delaware</option>
                </select></label></p>

                <p><label htmlFor="busiStatus" onChange = {changeHandler} ></label>
                        <input type="radio" name="busiStatus" id="customer" value = "customer" /> Customer
                        <input type="radio" name="busiStatus" id="businessowner" value = "businessowner" />Business Owner
                    
                </p>

                <p><label htmlFor="terms">I agree the terms and conditions<input type="checkbox" id="terms" name="terms" onChange = {changeHandler} value = {formState.terms} /></label></p>
                <p><button type = "submit">Register</button></p>
            </form>
          
        </div>
    );
};

export default RegisterCompo;