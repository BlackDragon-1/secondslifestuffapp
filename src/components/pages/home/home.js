import React from 'react';
import Header from '../../molecules/header/header';
import Threecolumns from '../../molecules/threecolumns/threecolumns';

import "../../../scss/main.scss";

const Home = () => {
    return (
        <>
        <div className='container home-container'>
             

                <Header/>
                <Threecolumns/>
                <p>wystarczą 4 proste kroki</p>
                <p>O nas</p>
                <p>Komu pomagamy ?</p>
                <p>Skontaktuj sie z nami</p>
                <p>footer</p>

            
        </div>
           
        </>
    );
};

export default Home;