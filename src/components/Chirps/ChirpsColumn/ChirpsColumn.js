import React from 'react';
import Chirp from '../Chirp/Chirp';

const ChirpsColumn = ( props ) => {
    return (
        <div>
            <Chirp index={ props.startIndex } />
        </div>
    );
};

export default ChirpsColumn;