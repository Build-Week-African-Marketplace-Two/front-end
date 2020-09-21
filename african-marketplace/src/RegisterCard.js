import React from 'react';
import styled from 'styled-components';

const Maindiv = styled.div`
border: 1px solid red;
display: flex;
justify-content: center;
flex-direction: column;

`;

const Cardtitle = styled.h2`
color: blue;
`;

const Carddiv = styled.div`
width: 700px
border: 1px solid red;
 background-color: lightblue;
 border-radius: 10px;
 margin: 10px;
 padding: 10px;
`;

const RegisterCard = (props) => {
    return (
        <Maindiv>
            <Cardtitle>Register Card</Cardtitle>
            <Carddiv>
            {props.cardAttr.map(item => (
                <div key={item.id}>
                    <p>First Name: {item.firstname}</p>
                    <p>Last Name: {item.lastname}</p>
                    <p>Email Address: {item.email}</p>
                    <p>Coustomer/Business Owner: {item.status}</p>
                    <p>State of Residence: {item.state}</p>
                </div>
            ))}
            </Carddiv>
        </Maindiv>
    );
};

export default RegisterCard;