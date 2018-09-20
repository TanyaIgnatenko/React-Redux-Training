import React from 'react';
import PropTypes from 'prop-types';

import plusIcon from '../../assets/images/plus-icon.png';

import './NewPostButton.scss';

export default function NewPostButton(props) {
    return (
        <div className={'new-post-button__container'}>
            <input type='image' src={plusIcon} onClick={props.onClick}/>
        </div>
    );
}

NewPostButton.propTypes = {
    onClick: PropTypes.func.isRequired
};

