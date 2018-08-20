import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

import Routes from '../../routes';

import './CardEditionForm.css';

export default function CardEditionForm(props) {
    const deleteButton = props.cardExist === false ?
        null :
        (
            <Link to={Routes.CARD_LIST}>
                <input
                    type='button'
                    className='card-edition-form__delete-button'
                    value='Delete'
                    onClick={props.onDelete}
                />
            </Link>
        );

    return (
        <form className='card-edition-form__container' onSubmit={props.onSave}>
            <input
                type='text'
                className='card-edition-form__title-field'
                value={props.title}
                name='title'
                placeholder='Enter title'
                onChange={props.onTitleInputChange}
                required
            />
            <textarea
                rows='5'
                className='card-edition-form__description-field'
                value={props.description}
                name='description'
                placeholder='Enter text'
                onChange={props.onDescriptionInputChange}
                required
            />

            <div className='card-edition-form__buttons-container'>
                <input
                    type='submit'
                    className='card-edition-form__save-button'
                    value='Save'
                />
                {deleteButton}
            </div>
        </form>
    );
}

CardEditionForm.defaultProps = {
    id: null
};

CardEditionForm.propTypes = {
    cardExist: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    onSave: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    onTitleInputChange: PropTypes.func.isRequired,
    onDescriptionInputChange: PropTypes.func.isRequired
};

