import React from 'react';
import Button from '../UI/Button/Button';

import './MainControls.css';

const MainControls = () => {
    return (
        <div id="Main-Controls" className="container">
            <span className="Main-Control Selected-Main-Control">Discover</span>
            <span className="Main-Control">My Feed</span>

            <span id="Post-Button-Container">
                <Button classes=" Post-Button" title="Post New" iconURL="img/icons/light/new.svg" />
            </span>
        </div>
    );
};

export default MainControls;