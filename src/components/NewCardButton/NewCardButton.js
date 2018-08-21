import React from 'react';
import PropTypes from 'prop-types';

import './NewCardButton.scss';

export default function NewCardButton(props) {
    const image = require('../../assets/images/plus-icon.png');
    return (
        <div className='new-card-button__container'>
            <input type='image' src={image} onClick={props.onClick}/>
        </div>
    );
}

NewCardButton.propTypes = {
    onClick: PropTypes.func.isRequired
};

