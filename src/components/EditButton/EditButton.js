import React from 'react';
import PropTypes from 'prop-types';

export default function EditButton(props) {
    const image = require('../../assets/images/edit-icon.png');
    return (
        <input
            type='image'
            src={image}
            onClick={props.clickHandler}
        />
    );
}

EditButton.propTypes = {
    clickHandler: PropTypes.func.isRequired
};

