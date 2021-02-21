import React from 'react';
import NavigationMenu from '../../atoms/navigationMenu/navigationMenu';
import AccountLoginRegoster from '../../atoms/accountLoginRegoster/accountLoginRegoster';
import './allmenu.scss';

const Allmenu = () => {
    return (
        <div className='allmenu'>
            <nav className="upmenu" >
                <AccountLoginRegoster/>  
                <NavigationMenu/>
            </nav> 
        </div>
    );
};

export default Allmenu;