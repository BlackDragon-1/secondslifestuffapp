import React from 'react';
import {Link} from 'react-router-dom';

import PatternBlock from '../patternBlock/patternBlock';
import InfoBlock from '../../atoms/infoBlock/infoBlock';

import Allmenu from '../allmenu/allmenu';
import "./header.scss";

const Header = () => {
    return (
        <header className="header">
            <div className="header-left_box">
             </div>
            <div className="header-right_box">
               <Allmenu/>

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

