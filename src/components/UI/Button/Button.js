import React from 'react';
import './Button.css';

const Button = ( props ) => {
    return (
        <span>
            <button className={ "Button" + props.classes }>
                { props.iconURL && <img className="Button-Icon" src={ props.iconURL } alt="Button Icon" /> }
                <span>{ props.title }</span>
            </button>
        </span>
    );
};

export default Button;