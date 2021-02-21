import React from 'react';
import {Link} from 'react-router-dom';
import "./header.scss";

 

const Header = () => {
    return (
        <header className="header">
                <div className="header-left_box">
                    
                </div>
                <div className="header-right_box">
                    <nav>
                        <ul>
                            <li><Link to='/Zaloguj/'> Zaloguj</Link></li>
                            <li><Link to='/rejestracja/'> Załóż konto</Link></li>
                        </ul>   
                        <ul>
                            <li>Start</li>
                            <li>O co chodzi</li>
                            <li>O nas</li>
                            <li>Fundacja i Organizacje </li>
                            <li>Kontakt </li>
                        </ul>  
                    </nav> 
                </div>       
        </header>
    );
};

export default Header;