import React from 'react';
import ReactDom from 'react-dom';
import NavCompo from './NavCompo';
import LoginCompo from './LoginCompo';
import RegisterCompo from './RegisterCompo';

function App() {
  return (
    <div>
            <NavCompo />
            <LoginCompo />
            <RegisterCompo />
        </div>
  );
}

export default App;
