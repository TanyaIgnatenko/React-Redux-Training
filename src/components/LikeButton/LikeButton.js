import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

import filledLikeIcon from '../../assets/images/filled-like.png';
import notFilledLikeIcon from '../../assets/images/not-filled-like.png';

import './LikeButton.scss';


export default function LikeButton(props) {
    const image = props.totalLikes ? filledLikeIcon : notFilledLikeIcon;

    return (
        <div className={'like-button__container'}>
            <input
                className={'like-button__like'}
                type='image'
                src={image}
                onClick={props.onClick}
            />
            <p>{props.totalLikes}</p>
        </div>
    );
}

LikeButton.propTypes = {
    totalLikes: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired
};

