import React, { useState } from "react";
import axios from "axios";
import * as yup from "yup";
import styled from "styled-components";

// input elements are not clearing up.
// Radio button and checkbox print its value not an actual text.
// checkbox console log page is behaving opposite.
// without initial card in register form.

const Maindiv = styled.div`
  width: 50%;
  margin: auto;

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

const Formstyle = styled.form`
  text-align: center;
`;

const Formtitle = styled.h2`
    display: flex;
    justify-content: center;
    color: green;
`;

const Inputdiv = styled.div`
    margin-bottom: 15px;
`;

const formSchema = yup.object().shape({
    firstname: yup.string().required("First Name is Required"),
    lastname: yup.string().required("Last Name is Required"),
    email: yup.string().email().required("Email is required"),
    password: yup.string().required("Password is Required"),
    conpassword: yup.string().required("Your passwords should match"),
    state: yup.string().required("Please select your state of residence"),
    status: yup.string(),
    terms: yup.boolean().oneOf([true], "Please agree to terms and condition")
});

const RegisterCompo = (props) => {
    const [formState, setFormState] = useState(
        {
            firstname: "",
            lastname: "",
            email: "",
            password: "",
            conpassword: "",
            state: "",
            status: "",
            terms: "",
        }
    );

    const [errorState, setErrorState] = useState(
        {
            firstname: "",
            lastname: "",
            email: "",
            password: "",
            conpassword: "",
            state: "",
            status: "",
            terms: "",
        },
    );

    const validateaForm = (e) => {
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
                console.log(errorState);
            });
    };

    const formSubmit = (e) => {
        e.preventDefault();
        props.registerAttr(formState);
        setFormState({
            firstname: "",
            lastname: "",
            email: "",
            password: "",
            conpassword: "",
            state: "",
            status: "",
        });
        console.log("Registration Confirmed");
        axios
            .post(`https://bw-african-marketplace.herokuapp.com/api/auth/register`, {username: formState.email, password:  formState.password})
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
    };
    
    const changeHandler = (e) => {
        // e.persist allows to the event properties in an asynchronous way
        e.persist(); 
        validateaForm(e);
        let anyVariable = e.target.type === "checkbox" ? e.target.checked : e.target.value;
        setFormState({ ...formState, [e.target.name]: anyVariable });
    };

    return (
        <Maindiv>
            <Formtitle> Registration Form </Formtitle>
            <Formstyle onSubmit={formSubmit}>
                <Inputdiv><label htmlFor="firstname">First Name :
                    <input type="text" name="firstname" id="firstname" value={formState.firstname} onChange={changeHandler}/>
                        {errorState.firstname.length > 0 ? <p>{errorState.firstname}</p> : null}
                    </label>
                </Inputdiv>

                <Inputdiv><label htmlFor="lastName">Last Name :
                    <input type="text" name="lastname" id="lastName" onChange={changeHandler} value={formState.lastname} />
                        {errorState.lastname.length > 0 ? <p>{errorState.lastname}</p> : null}
                    </label>
                </Inputdiv>

                <Inputdiv><label htmlFor="email">Email :
                    <input type="text" name="email" id="email" onChange={changeHandler} value={formState.email} />
                        {errorState.email.length > 0 ? <p>{errorState.email}</p> : null}
                    </label>
                </Inputdiv>

                <Inputdiv><label htmlFor="password">Password :
                    <input type="password" name="password" id="password" onChange={changeHandler} value={formState.password} />
                        {errorState.password.length > 0 ? <p>{errorState.password}</p> : null}
                    </label>
                </Inputdiv>

                <Inputdiv><label htmlFor="conPassword"> Confirm Password :
                    <input type="password" name="conpassword" id="conPassword" onChange={changeHandler} value={formState.conpassword} />
                        {errorState.conpassword.length > 0 ? <p>{errorState.conpassword}</p> : null}
                    </label>
                </Inputdiv>

                <Inputdiv><label htmlFor="listOfState"> State :
                        <select onChange={changeHandler} value={formState.state} name="state" id="state">
                            <option value="">--State of residence--</option>
                            <option value="Alabama">Alabama</option>
                            <option value="Alaska">Alaska</option>
                            <option value="Arizona">Arizona</option>
                            <option value="Arkansas">Arkansas</option>
                            <option value="California">California</option>
                            <option value="Colorado">Colorado</option>
                            <option value="Connecticut">Connecticut</option>
                            <option value="Delaware">Delaware</option>
                        </select>
                        {errorState.state.length > 0 ? <p>{errorState.state}</p> : null}
                    </label>
                </Inputdiv>

                <Inputdiv><label htmlFor="status" onChange={changeHandler} value={formState.status}>
                        <input type="radio" name="status" id="customer" value="Customer" />Customer
                    </label>
                    <label htmlFor="status" onChange={changeHandler} value={formState.status}>
                        <input type="radio" name="status" id="businessowner" value="Business Owner"/> Business Owner
                    </label>
                    {errorState.status.length > 0 ? <p>{errorState.status}</p> : null}
                </Inputdiv>

                <Inputdiv><label htmlFor="terms"> I agree the terms and conditions
                    <input type="checkbox" id="terms" name="terms" onChange={changeHandler} value={formState.terms} />
                    </label>
                </Inputdiv>

                <Inputdiv><Button type="submit">Register</Button></Inputdiv>

            </Formstyle>
        </Maindiv>
    );
};

export default RegisterCompo;
