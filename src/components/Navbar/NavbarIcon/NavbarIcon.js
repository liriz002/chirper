import React from 'react';
import './NavbarIcon.css';

const NavbarIcon = ( props ) => {
    return (
        <span>
            <img className="Navbar-Icon" src={ props.url } />
            { props.legend && <div className="Navbar-Icon-Legend"><span>{ props.legend }</span></div> }
        </span>
    )
};

export default NavbarIcon;