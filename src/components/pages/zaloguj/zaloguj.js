import React from 'react';
import "../../../scss/main.scss";
import LoginForm from '../../molecules/user/form';

const Zaloguj = () => {
     const style={
         width: '200px',
         height: '400px',
         backgroundColor:'green'

     }
    return (
        <div style={style}>
           Jesteś zalogowany
           <LoginForm/>
        </div>
    );
};

export default Zaloguj;