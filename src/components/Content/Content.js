import React from 'react';
import ChirpsContainer from '../Chirps/ChirpsContainer/ChirpsContainer';
import { Motion, spring } from 'react-motion';
import { connect } from 'react-redux';
import Spinner from '../UI/Spinner/Spinner';

const Content = ( props ) => {

    let content;
    if ( props.isLoading ) {
        content = 
        <div style={{ height: '80vh' }}>
            <Spinner />
        </div>
    } else {
        content = <ChirpsContainer />
    }

    return (
        <div className="container">
            { content }
        </div>
    );
};

function mapStateToProps( state ) {
    return {
        isLoading: state.isLoading
    };
}

export default connect( mapStateToProps )( Content );