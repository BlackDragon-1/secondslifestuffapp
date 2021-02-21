import React from 'react';
import {Link} from 'react-router-dom';
import './accountLoginRegoster.scss';

const  AccountLoginRegoster = () => {
    return (
        <>
            <ul className='account'>
                <li className='link-zaloguj'><Link to='/Zaloguj/'> Zaloguj</Link></li>
                <li><Link to='/rejestracja/'> Załóż konto</Link></li>
            </ul> 
        </>
    );
};

export default AccountLoginRegoster;