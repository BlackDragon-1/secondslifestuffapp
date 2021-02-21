import React from 'react';
import {Link} from 'react-router-dom';
 
import "./header.scss";
import AccountLoginRegoster from '../../atoms/accountLoginRegoster/accountLoginRegoster';
import PatternBlock from '../patternBlock/patternBlock';
import InfoBlock from '../../atoms/infoBlock/infoBlock';

const Header = () => {
    return (
        <header className="header">
            <div className="header-left_box">
             </div>
            <div className="header-right_box">
               <nav className="upmenu" >
                    <AccountLoginRegoster/>  
                    <ul className='menu'>
                        <li>Start</li>
                        <li>O co chodzi</li>
                        <li>O nas</li>
                        <li>Fundacja i Organizacje </li>
                        <li>Kontakt </li>
                    </ul>  
                </nav> 

                <div className="downmenu">
                    <PatternBlock/>
                    <div className="boxes">
                        <InfoBlock props='ODDAJ RZECZY'/>
                        <InfoBlock props='ZORGANIZUJ ZBIÓRKĘ'/>
                    </div>
                </div>  
            </div>          
        </header>
    );
};
export default Header;

