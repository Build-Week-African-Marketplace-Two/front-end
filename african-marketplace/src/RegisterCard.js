import React from 'react';
import styled from 'styled-components';

const Maindiv = styled.div`
// border: 1px solid red;
display: flex;
justify-content: center;
flex-direction: column;
`;

const Cardtitle = styled.h2`
color: blue;
text-align: center;
font-size: 25px;
font-weight: bold;
margin-top: 25px;
`;

const Carddiv = styled.div`
width: 700px;
border: 1px solid red;
 background-color: lightblue;
 border-radius: 10px;
 margin: 10px auto;
 padding: 10px;
 line-height: 25px;
`;

const RegisterCard = (props) => {
    return (
        <Maindiv>
            <Cardtitle>Register Card</Cardtitle>
            <div>
            {props.cardAttr.map(item => (
                <Carddiv key={item.id}>
                    <p>First Name: {item.firstname}</p>
                    <p>Last Name: {item.lastname}</p>
                    <p>Email Address: {item.email}</p>
                    <p>Coustomer/Business Owner: {item.status}</p>
                    <p>State of Residence: {item.state}</p>
                </Carddiv>
            ))}
            </div>
        </Maindiv>
    );
};

export default RegisterCard;