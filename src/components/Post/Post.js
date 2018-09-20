import React from 'react';
import PropTypes from 'prop-types';

import LikeButton from '../LikeButton/LikeButton';
import EditButton from '../EditButton/EditButton';

import './Post.scss';

export default function Post(props) {
    const description = props.content.length <= 123 ? props.content : props.content.slice(0, 123);
    return (
        <div className={'post__container'}>
            <h2 className={'post__title'}>{props.title}</h2>
            <p className={'post__description'}>{description}</p>
            <div className={'post__buttons-container'}>
                <EditButton onClick={props.onEditClick}/>
                <LikeButton likeCount={props.likeCount} onClick={props.onLikeClick}/>
            </div>
        </div>
    );
}

Post.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    likeCount: PropTypes.number.isRequired,
    onLikeClick: PropTypes.func.isRequired,
    onEditClick: PropTypes.func.isRequired
};

