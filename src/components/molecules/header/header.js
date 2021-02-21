import React from 'react';
import {Link} from 'react-router-dom';
 
import "./header.scss";
import pattern from '../../../assets/icons/Decoration.svg'

const Header = () => {
    return (
        <header className="header">
                <div className="header-left_box">
                </div>

                <div className="header-right_box">

                    <nav className="upmenu" >
                        <ul className='account'>
                            <li><Link to='/Zaloguj/'> Zaloguj</Link></li>
                            <li><Link to='/rejestracja/'> Załóż konto</Link></li>
                        </ul>   
                        <ul className='menu'>
                            <li>Start</li>
                            <li>O co chodzi</li>
                            <li>O nas</li>
                            <li>Fundacja i Organizacje </li>
                            <li>Kontakt </li>
                        </ul>  
                    </nav> 

                    <div className="downmenu">

                        <div className="pattern">
                            <h1>Zacznij pomagać!</h1>
                            <h1>Oddaj niechciane rzeczy w zaufane ręce</h1>
                            <img src={pattern} alt="pattern"/>;
                        </div>

                        <div className="boxes">
                            <div className="boxes-left">Oddaj rzeczy</div>
                            <div className="boxes-right">Zorganizuj zbiórkę</div>
                        </div>

                    </div>  


                </div> 

               
        </header>
    );
};

export default Header;

