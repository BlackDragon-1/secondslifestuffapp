import React from 'react';
import LoginForm from '../../molecules/user/login';
import Allmenu from '../../molecules/allmenu/allmenu';
import "../../../scss/main.scss";
import Pattern from '../../atoms/pattern/pattern';
import './zaloguj.scss';


const Zaloguj = () => {
     
    return (
        <div>
            <Allmenu/>
            <div className="login">

                <div className="login-pattern">
                    <Pattern props='Zaloguj się'/>
                </div>

                <div className="login-form">
                    <LoginForm/>
                </div>

            </div>

            <div className="choice">

               
            </div>

           
        </div>
    );
};

export default Zaloguj;