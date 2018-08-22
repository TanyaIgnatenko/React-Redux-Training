import React from 'react';
import PropTypes from 'prop-types';

import plusIcon from '../../assets/images/plus-icon.png';

import './NewCardButton.scss';

export default function NewCardButton(props) {
    return (
        <div className={'new-card-button__container'}>
            <input type='image' src={plusIcon} onClick={props.onClick}/>
        </div>
    );
}

NewCardButton.propTypes = {
    onClick: PropTypes.func.isRequired
};

