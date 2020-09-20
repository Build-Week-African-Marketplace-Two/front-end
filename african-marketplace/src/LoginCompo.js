import React from 'react';

const LoginCompo = () => {
    return (
        <div className = "component-div">
            <h2>Customer Login</h2>
            <form>
                <p><label htmlFor="customeremail"> Email:  
                    <input type = "email" name = "name" id = "customeremail" />                    
                </label></p>
                <p><label htmlFor="customerPassword"> Password:  
                    <input type = "password" name = "password" id = "customerPassword" />                    
                </label></p>
                <label htmlFor = "rememberMe">Rememebr Me <input type = "checkbox" name = "rememberMe" id = "rememberMe" /></label>
                <button type = "submit">Login</button>
            </form>
        </div>
    );
}

export default LoginCompo;