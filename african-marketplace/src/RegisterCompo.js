import React, { useState } from 'react';
import axios from 'axios';
import * as yup from 'yup';
import styled from 'styled-components';

// input elements are not clearing up.
// Radio button and checkbox print its value not an actual text.
// checkbox console log page is behaving opposite.
// router need a set up.
// without initial card in register form.
// error msg are not in a proper state.

const Maindiv = styled.div`
    diplay: flex;
    justify-content: center;
    align-content: center;
`;

const Button = styled.button`
    width: 100px;
    height: 40px;
    border: none;
    border-radius: 10px;
    color: green;
    background-color: aquamarine;
    font-size: 20px;
    font-weight: bold;
`;

const Formstyle = styled.form`
    text-align: center;
`;

const Formtitle = styled.h2`
    text-align: center;
`;


const formSchema = yup.object().shape({
    firstname: yup.string().required("First Name is Require"),
    lastname: yup.string().required("Last Name is Required"),
    email: yup.string().email().required("Email is required"),
    password: yup.string().required("Password is Required"),
    conpassword: yup.string().required(),
    state: yup.string(),
    status: yup.string(),
    terms: yup.boolean().oneOf([true], "Please agree to terms and condition")
});

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
        terms: ""
    }
    ]);

    const [errorstate, setErrorstate] = useState([{
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        conpassword: "",
        state: "",
        status: "",
        terms: ""
    }]);

    const validateaForm = (e) => {
        yup.reach(formSchema, e.target.name)
            .validate(e.target.value)
            .then(valid => {
                setErrorstate({ ...errorstate, [e.target.name]: "" })
            })
            .catch(err => {
                setErrorstate({ ...errorstate, [e.target.name]: err.errorstate });
                console.log(err.errors);
            })
    };

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
        validateaForm(e);
        let anyVariable = e.target.type === "checkbox" ? e.target.checked : e.target.value;
        setFormstate({...formState, [e.target.name]: anyVariable})
    };
        

    return (
        <Maindiv>
            <Formtitle> Registration Form </Formtitle>
            <Formstyle onSubmit={formSubmit}>
                
                <p>
                    <label htmlFor="firstName"> First Name : 
                    <input type = "text" name = "firstname" id = "firstName" onChange = {changeHandler}  />
                    </label>
                </p>

                <p>
                    <label htmlFor="lastName"> Last Name : 
                    <input type = "text" name = "lastname" id = "lastName" onChange = {changeHandler} />
                    </label>
                </p>

                <p>
                    <label htmlFor="email"> Email : 
                    <input type = "text" name = "email" id = "email" onChange = {changeHandler} />
                    </label>
                </p>

                <p>
                    <label htmlFor="password"> Password : 
                    <input type = "password" name = "password" id = "password" onChange = {changeHandler} />
                    </label>
                </p>

                <p>
                    <label htmlFor="conPassword"> Confirm Password : 
                    <input type = "password" name = "conpassword" id = "conPassword" onChange = {changeHandler} />
                    </label>
                </p>

                <p><label htmlFor = "listOfState">State : <select onChange = {changeHandler} value = {formState.state} name = "state" id = "state">  
                    <option value = "">--State of residence--</option>
                    <option value = "Alabama">Alabama</option>
                    <option value = "Alaska">Alaska</option>
                    <option value = "arizona">Arizona</option>
                    <option value = "arkansas">Arkansas</option>
                    <option value = "california">California</option>
                    <option value = "colorado">Colorado</option>
                    <option value = "connecticut">Connecticut</option>
                    <option value = "delaware">Delaware</option>
                </select></label></p>

                <p><label htmlFor="status" onChange = {changeHandler} value = {formState.status} >
                        <input type="radio" name="status" id="customer" value = "customer" /> Customer </label>
                    <label htmlFor="status" onChange={changeHandler} value={formState.status}>
                        <input type="radio" name="status" id="businessowner" value="Business Owner" />Business Owner </label>
                    
                </p>

                <p>
                    <label htmlFor="terms">I agree the terms and conditions
                    <input type="checkbox" id="terms" name="terms" onChange={changeHandler} value={formState.terms}/>
                    </label>
                </p>
                <p><Button type = "submit">Register</Button></p>
            </Formstyle>
          
        </Maindiv>
    );
};

export default RegisterCompo;