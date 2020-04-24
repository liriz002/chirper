import React from 'react';
import './ChirpText.css';

const ChirpText = ( props ) => {
    // We will display any line breaks by splitting up by \n
    // In JSX, we make the last paragraph inline in case we need to add the "Read More" label
    let text = props.text.split('\n');
    let paragraphNum = text.length;

    return (
        <div className="Chirp-Text">
            <p>
                { props.text.split('\n').map( ( item, i ) => {
                    if ( i == paragraphNum - 1) {
                        return <p style={{ display: 'inline' }} key={ i }>{ item }</p>
                    } else {
                        return <p key={ i }>{ item }</p> 
                    } 
                } ) }
                { props.text.length > 430 &&  <span className="Read-More-Button"> Read More</span>}
            </p>
        </div>
    );
};

export default ChirpText;