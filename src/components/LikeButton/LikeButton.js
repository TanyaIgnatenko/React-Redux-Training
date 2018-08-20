import React from 'react';
import PropTypes from 'prop-types';

import './LikeButton.css';

export default function LikeButton(props) {
    const image = props.isLiked ?
        require('../../assets/images/clicked-like.png') :
        require('../../assets/images/not-clicked-like.png');

    return (
        <input
            type='image'
            src={image}
            className='like'
            onClick={props.onClick}
        />
    );
}

LikeButton.propTypes = {
    isLiked: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired
};

