import React from 'react';
import PropTypes from 'prop-types';

import './Card.css';
import LikeButton from '../LikeButton/LikeButton';
import EditButton from '../EditButton/EditButton';

export default function Card(props) {
    const description = props.description.length <= 123 ? props.description : props.description.slice(0, 123);
    return (
        <div className='card__container'>
            <h2 className='card__title'>{props.title}</h2>
            <p className='card__description'>{description}</p>
            <div className={'card__buttons-container'}>
                <EditButton editFormURL={`/edit/${props.id}`}/>
                <LikeButton/>
            </div>
        </div>
    );
}

Card.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
};

