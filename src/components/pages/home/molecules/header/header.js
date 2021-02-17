import React from 'react';
import "./header.scss";

const Header = () => {
    return (
        <header className="header">
                <div className="header-left_box">Test</div>
                <div className="header-right_box">
                    <nav>
                    <ul>
                        <li>Zaloguj</li>
                        <li>Załóż konto</li>
                    </ul>   
                    <ul>
                        <li>Start</li>
                        <li>Załóż konto</li>
                        <li>Zaloguj</li>
                        <li>Załóż konto</li>
                    </ul>  
                    </nav> 
                </div>       
        </header>
    );
};

export default Header;