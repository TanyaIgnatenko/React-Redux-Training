import React from 'react';
import PropTypes from 'prop-types';

import editIcon from '../../../../assets/images/edit-icon.png';

export default function EditButton(props) {
    return (
        <input
            type='image'
            src={editIcon}
            onClick={props.onClick}
        />
    );
}

EditButton.propTypes = {
    onClick: PropTypes.func.isRequired
};

