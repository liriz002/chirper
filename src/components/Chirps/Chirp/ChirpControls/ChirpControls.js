import React from 'react';
import './ChirpControls.css';

const ChirpControls = ( props ) => {
    return (
        <div className="Chirp-Controls">
            <span className="Chirp-Control-Container">
                <img className="Chirp-Control-Img" src="/img/icons/dark/like.svg" alt="Like Icon" />
                <span className="Chirp-Control-Count">{ props.likes }</span>
            </span>
            <span className="Chirp-Control-Container" style={{ marginLeft: '15px' }}>
                <img className="Chirp-Control-Img" src="/img/icons/dark/comment.svg" alt="Comment Icon" />
                <span className="Chirp-Control-Count">{ props.comments }</span>
            </span>
        </div>
    );
};

export default ChirpControls;