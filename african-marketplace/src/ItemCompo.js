import React from 'react';
import styled from 'styled-components';

const Producttitle = styled.h2`
    display: flex;
    justify-content: center;
    color: green;
    font-size: 25px;
    font-weight: bold;

`; 

const Cardstyle = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    
`;

const Productstyle = styled.div`
    margin: 10px;
    border: 1px solid green;
    border-radius: 7px;
    width: 400px;
    text-align: center;
    line-height: 25px;
`;

const Productname = styled.h3`
    font-weight: bold;
    font-family: Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    // font-size: 40px;
`;

const ItemCompo = (props) => {
    console.log(props);
    return (
        <div>
            <Producttitle> Product List </Producttitle>
            <Cardstyle>
            {props.itemAttr.map((item) => {
                return (
                    <Productstyle key = {item.id}>
                        <Productname>{item.name}</Productname>
                        <p>{item.description}</p>
                        <p>{item.price}</p>
                    </Productstyle>
                );
            })}
                </Cardstyle>
        </div>
    );
};

export default ItemCompo;