import React from 'react';
import Chirp from '../Chirp/Chirp';
import { Motion, spring } from 'react-motion';

import './ChirpsColumn.css';

const ChirpsColumn = ( props ) => {
    return (
        <Motion defaultStyle={{ opacity: 0 }} style={ { opacity: spring( 1, { stiffness: 50, damping: 17 } ) } }>
        { style => (

<div className="Chirps-Column" style={{ opacity: style.opacity }}>
{ props.chirps.map( ( chirp, index ) => {
    return (
        <Chirp key={ index } id={ chirp.id } />
    )
}) 
}
</div>
        )}
         </Motion>
    );
};

export default ChirpsColumn;

/*

*/