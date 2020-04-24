import React from 'react';
import NavbarIcon from './NavbarIcon/NavbarIcon';

import './Navbar.css';

const Navbar = ( props ) => {
    return (
        <div id="Navbar">
            <div id="Navbar-Elements-Container" class="container">
                <span id="App-Name">chirper</span>
                <span style={{ marginLeft: 'auto' }}>
                    <img id="Navbar-Search-Icon" src="img/icons/dark/search.svg" />
                    <input id="Navbar-Search" type="text" placeholder="Search chirps, people, or hashtags" />
                    <NavbarIcon url="img/icons/light/notifications.svg" legend="2" />
                    <NavbarIcon url="img/icons/light/messages.svg" legend="1" />
                    <NavbarIcon url="img/icons/light/profile.svg" />
                </span>
            </div>
        </div>
    );
};

export default Navbar;