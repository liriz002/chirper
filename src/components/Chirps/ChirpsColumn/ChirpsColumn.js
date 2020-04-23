import React from 'react';
import Chirp from '../Chirp/Chirp';

import './ChirpsColumn.css';

const ChirpsColumn = ( props ) => {
    return (
        <div className="Chirps-Column">
        { props.chirps.map( ( chirp, index ) => {
            return (
                <Chirp key={ index } id={ chirp.id } />
            )
         }) 
        }
        </div>
    );
};

export default ChirpsColumn;

/*

*/