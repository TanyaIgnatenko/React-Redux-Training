import React from 'react';
import PropTypes from 'prop-types';

import LikeButton from '../LikeButton/LikeButton';
import EditButton from '../EditButton/EditButton';

import './Card.scss';

export default function Card(props) {
    const description = props.content.length <= 123 ? props.content : props.content.slice(0, 123);
    return (
        <div className={'card__container'}>
            <h2 className={'card__title'}>{props.title}</h2>
            <p className={'card__description'}>{description}</p>
            <div className={'card__buttons-container'}>
                <EditButton onClick={props.onEditClick}/>
                <LikeButton likeCount={props.totalLikes} onClick={props.onLikeClick}/>
            </div>
        </div>
    );
}

Card.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    totalLikes: PropTypes.number.isRequired,
    onLikeClick: PropTypes.func.isRequired,
    onEditClick: PropTypes.func.isRequired
};

