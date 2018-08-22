import React from 'react';
import PropTypes from 'prop-types';

import filledLikeIcon from '../../assets/images/filled-like.png';
import notFilledLikeIcon from '../../assets/images/not-filled-like.png';

import './LikeButton.css';

export default function LikeButton(props) {
    const image = props.isLiked ? filledLikeIcon : notFilledLikeIcon;

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

