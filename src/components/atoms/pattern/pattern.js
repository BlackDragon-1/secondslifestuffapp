import React from 'react';
import pattern from '../../../assets/icons/Decoration.svg';
import './pattern.scss';

const Pattern = ({props}) => {
    return (
        <div className='descriptionAndPattern'>
            <h1 className='h1-description'>{props}</h1>
            <img className='pattern-small' src={pattern} alt="pattern"/>
        </div>
    );
};
export default Pattern;