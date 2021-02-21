import React from 'react';
import pattern from '../../../assets/icons/Decoration.svg';

const Pattern = ({props}) => {
    return (
        <>
            <h1>{props}</h1>
            <img className='pattern-small' src={pattern} alt="pattern"/>
        </>
    );
};
export default Pattern;