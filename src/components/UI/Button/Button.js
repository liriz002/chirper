import React from 'react';
import './Button.css';

const Button = ( props ) => {
    return (
        <div className={ "Button " + props.classes }>{ props.title }</div>
    );
};

export default Button;