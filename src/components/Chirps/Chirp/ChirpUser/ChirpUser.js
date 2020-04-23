import React from 'react';
import './ChirpUser.css';

const ChirpUser = () => {
    return (
        <div className="Chirp-User">
            <div className="User-Details">
                <span>
                 <img className="User-Photo" src="img/users/1.jpg" />
                </span>
                <span className="Name-Username-Container">
                    <div className="Name-User">Tessa Brown</div>
                    <div className="Username">@tessssa_b</div>
                </span>
            </div>
            <div className="Chirp-Follow-Container">
                <button>Follow</button>
            </div>
        </div>
    );
};

export default ChirpUser;

/*


            <span>2 hours ago</span>
            */