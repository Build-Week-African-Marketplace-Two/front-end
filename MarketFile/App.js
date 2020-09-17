import React from 'react';
import ReactDom from 'react-dom';
import LoginCompo from './LoginCompo';
import NavCompo from './NavCompo';
import LoginCompo from './LoginCompo';
import RegisterCompo from './RegisterCompo';

const App = () => {
    return (
        <div>
            <NavCompo />
            <LoginCompo />
            <RegisterCompo />
        </div>
    );
};

export default App;