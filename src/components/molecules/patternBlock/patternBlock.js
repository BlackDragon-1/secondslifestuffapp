import React from 'react';

import Pattern from '../../atoms/pattern/pattern';

const PatternBlock = () => {
    return (
        <>
            <div className="pattern">
                <h1>Zacznij pomagać!</h1>
                <Pattern props='Oddaj niechciane rzeczy w zaufane ręce'/>
            </div>
        </>
    );
};

export default PatternBlock;