import React, { useEffect } from 'react';
import ChirpUser from '../Chirp/ChirpUser/ChirpUser';
import ChirpText from '../Chirp/ChirpText/ChirpText';
import ChirpPhotos from '../Chirp/ChirpPhotos/ChirpPhotos';
import ChirpControls from '../Chirp/ChirpControls/ChirpControls';
import { connect } from 'react-redux';

import './Chirp.css';

const Chirp = ( props ) => {
    let chirp = props.chirps[ props.index ];
    console.log(chirp);

    return (
        <div className="Chirp">
            <ChirpUser
                userId={ chirp.user_id }
                nameUser={ chirp.name }
                username={ chirp.username }
                timestamp={ chirp.timestamp }
                isFollowing={ chirp.isFollowing }
            />
            <ChirpText text={ chirp.text } />
            <hr className="Chirp-Control-Divider" />
            <ChirpControls likes={ chirp.likes } comments={ chirp.comments } />
        </div>
    );
};

function mapStateToProps( state ) {
    return {
        chirps: state.chirps
    };
}

export default connect( mapStateToProps, null )( Chirp );

/*
            <ChirpPhotos />


            */