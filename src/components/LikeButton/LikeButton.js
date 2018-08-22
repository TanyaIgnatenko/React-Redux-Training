import React from 'react';
import PropTypes from 'prop-types';

import './LikeButton.css';
import filledLikeIcon from '../../assets/images/filled-like.png';
import notFilledLikeIcon from '../../assets/images/not-filled-like.png';

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

