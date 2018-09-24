import React from 'react';
import PropTypes from 'prop-types';

import LikeButton from '../LikeButton/LikeButton';
import EditButton from '../EditButton/EditButton';

import './Post.scss';

export default function Post(props) {
    const {title, content, likeCount, isEditable, onLikeClick, onEditClick} = props;
    const description = content.length <= 123 ? content : content.slice(0, 123);
    return (
        <div className={'post__container'}>
            <h2 className={'post__title'}>{title}</h2>
            <p className={'post__description'}>{description}</p>
            <div className={'post__buttons-container'}>
                {isEditable && <EditButton onClick={onEditClick}/>}
                <LikeButton likeCount={likeCount} onClick={onLikeClick}/>
            </div>
        </div>
    );
}

Post.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    likeCount: PropTypes.number.isRequired,
    isEditable: PropTypes.bool.isRequired,
    onLikeClick: PropTypes.func.isRequired,
    onEditClick: PropTypes.func
};

