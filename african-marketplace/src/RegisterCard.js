import React from 'react';

const RegisterCard = (props) => {
    return (
        <div>
            <h2>Register Card</h2>
            {props.cardAttr.map(item => (
                <div key={item.id}>
                    <p>{item.firstname}</p>
                    <p>{item.lastname}</p>
                    <p>{item.email}</p>
                    <p>{item.status}</p>
                    <p>{item.state}</p>
                </div>
            ))}
        </div>
    );
};

export default RegisterCard;