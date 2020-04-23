import React from 'react';
import './ChirpPhotos.css';

const ChirpPhotos = ( props ) => {

    let photosJSX;

    if ( props.photos.length >= 3 ) {
        photosJSX = 
        <div>
        <img className="Chirp-Single-Photo" src={ "img/birds/" + props.photos[0] } />
        <div className="Multiple-Photos-Container"> 
            <div className="Multiple-Photo-Container">
             <img className="Chirp-Multiple-Photos Chirp-Multiple-Left-Photo" src={ "img/birds/" + props.photos[1] } />
            </div>
            <div className="Multiple-Photo-Container Multiple-Photo-Right">
                <img className="Chirp-Multiple-Photos Chirp-Multiple-Right-Photo" src={ "img/birds/" + props.photos[2] } />
                <div className="All-Photos-Overlay">
                    <h3>See all 5 photos</h3>
                </div>
            </div>
        </div>
        </div>
    } else if ( props.photos.length == 1 ) {
        photosJSX = <img className="Chirp-Single-Photo True-Single-Photo" src={ "img/birds/" + props.photos[0] } />
    }

    return (
        <div className="Chirp-Photos">
            { photosJSX }
        </div>
    );
};

export default ChirpPhotos;