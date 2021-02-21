import React from 'react';
import Header from '../../molecules/header/header';
import Threecolumns from '../../molecules/threecolumns/threecolumns';
import Pattern from '../../atoms/pattern/pattern';

import "../../../scss/main.scss";

const Home = () => {
    return (
        <>
        <div className='container home-container'>
             

                <Header/>
                <Threecolumns/>
                <Pattern props='WYSTARCZĄ 4 PROSTE KROKI'/>
                <p>O nas</p>
                <p>Komu pomagamy ?</p>
                <p>Skontaktuj sie z nami</p>
                <p>footer</p>

            
        </div>
           
        </>
    );
};

export default Home;