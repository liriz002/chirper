import React from 'react';
import './ChirpText.css';

const ChirpText = ( props ) => {
    return (
        <div className="Chirp-Text">
            <p>{ props.text }</p>
        </div>
    );
};

export default ChirpText;