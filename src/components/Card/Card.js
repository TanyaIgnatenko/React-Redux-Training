import React from 'react';
import PropTypes from 'prop-types';

import Like from '../Like/Like';
import './Card.css';
import EditButton from '../EditButton/EditButton';

export default function Card(props) {
    const description = props.description.length <= 80 ? props.description : props.description.slice(0, 80);
    return (
        <div className='card__container'>
            <h2 className='card__title'>{props.title}</h2>
            <p className='card__description'>{props.description}</p>
            <div className={'card__buttons-container'}>
                <EditButton clickHandler={props.editHandler}/>
                <Like/>
            </div>
        </div>
    );
}

Card.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
};

