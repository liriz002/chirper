import React from 'react';
import NavbarIcon from './NavbarIcon/NavbarIcon';

import './Navbar.css';

const Navbar = ( props ) => {
    return (
        <div id="Navbar">
            <div id="Navbar-Elements-Container" className="container">
                <span id="App-Name">chirper</span>
                <span style={{ marginLeft: 'auto' }}>
                    <span id="Hamburger-Icon">
                        <div className="Hamburger-Icon-Bar-1"></div>
                        <div className="Hamburger-Icon-Bar-2"></div>
                        <div className="Hamburger-Icon-Bar-3"></div>
                    </span>
                    <img id="Navbar-Search-Icon" src="img/icons/dark/search.svg" alt="Search Icon" />
                    <input id="Navbar-Search" type="text" placeholder="Search chirps, people, or hashtags" />
                    <NavbarIcon url="img/icons/light/notifications.svg" legend="2" />
                    <NavbarIcon url="img/icons/light/messages.svg" legend="1" />
                    <NavbarIcon url="img/icons/light/profile.svg" />
                    <img id="Navbar-Responsive-Search-Icon" src="img/icons/light/search.svg" alt="Responsive Search Icon" />
                </span>
            </div>
        </div>
    );
};

export default Navbar;