import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

export default function EditButton(props) {
    const image = require('../../../../../assets/images/edit-icon.png');
    return (
        <Link to={props.editFormURL}>
            <input
                type='image'
                src={image}
            />
        </Link>
    );
}

EditButton.propTypes = {
    editFormURL: PropTypes.string.isRequired
};

