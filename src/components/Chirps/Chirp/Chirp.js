import React from 'react';
import ChirpUser from '../Chirp/ChirpUser/ChirpUser';
import ChirpText from '../Chirp/ChirpText/ChirpText';
import ChirpPhotos from '../Chirp/ChirpPhotos/ChirpPhotos';
import ChirpControls from '../Chirp/ChirpControls/ChirpControls';

import './Chirp.css';

const Chirp = () => {
    return (
        <div className="Chirp">
            <ChirpUser />
        </div>
    );
};

export default Chirp;

/*

            <ChirpText />
            <ChirpPhotos />
            <hr />
            <ChirpControls />

            */