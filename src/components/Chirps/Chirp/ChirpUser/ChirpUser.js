import React from 'react';
import Button from '../../../UI/Button/Button';

import './ChirpUser.css';

const ChirpUser = ( props ) => {
    
    // We display a follow or unfollow button, accordingly
    let followBtn;
    if ( props.isFollowing ) {
        followBtn = <Button classes="Unfollow-Button" title="Unfollow" />
    } else {
        followBtn = <Button title="Follow" />
    }

    return (
        <div>
        <div className="Chirp-User">
            <div className="User-Details">
                <span>
                 <img className="User-Photo" src={ "img/users/" + props.userId + ".jpg" } />
                </span>
                <span className="Name-Username-Container">
                    <div className="Name-User">{ props.nameUser }</div>
                    <div className="Username">{ props.username }</div>
                </span>
            </div>
            <div className="Chirp-Follow-Container">
                { followBtn }
            </div>
        </div>
        <p className="Chirp-Timestamp">{ props.timestamp } </p>
        </div>
    );
};

export default ChirpUser;

/*


            <span>2 hours ago</span>
            */