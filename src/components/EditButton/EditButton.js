import React from 'react';
import PropTypes from 'prop-types';

export default function EditButton(props) {
    const image = require('../../assets/images/edit-icon.png');
    return (
        <input
            type='image'
            src={image}
            onClick={props.onClick}
        />
    );
}

EditButton.propTypes = {
    onClick: PropTypes.func.isRequired
};

