import React from 'react';
import { connect } from 'react-redux';
import ChirpsColumn from '../ChirpsColumn/ChirpsColumn';

const ChirpsContainer = ( props ) => {
    let allChirps = JSON.parse( JSON.stringify( props.chirps ) );
    console.log('calling here');

    return (
        <div>
            <ChirpsColumn chirps={ allChirps.splice( 0 , 2 ) } />
            <ChirpsColumn chirps={ allChirps.splice( 0 , 2 ) } />
        </div>
    );
};

function mapStateToProps( state ) {
    return {
        chirps: state.chirps
    };
}

export default connect( mapStateToProps, null )( ChirpsContainer );
