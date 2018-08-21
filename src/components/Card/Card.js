import React from 'react';
import PropTypes from 'prop-types';

import LikeButton from '../LikeButton/LikeButton';
import EditButton from '../EditButton/EditButton';

import './Card.scss';

export default function Card(props) {
    const description = props.description.length <= 123 ? props.description : props.description.slice(0, 123);
    return (
        <div className='card__container'>
            <h2 className='card__title'>{props.title}</h2>
            <p className='card__description'>{description}</p>
            <div className={'card__buttons-container'}>
                <EditButton onClick={props.onEditClick}/>
                <LikeButton isLiked={props.isLiked} onClick={props.onLikeClick}/>
            </div>
        </div>
    );
}

Card.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    isLiked: PropTypes.bool.isRequired,
    onLikeClick: PropTypes.func.isRequired,
    onEditClick: PropTypes.func.isRequired
};

