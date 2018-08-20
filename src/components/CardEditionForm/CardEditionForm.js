import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

import Routes from '../../routes';

import './CardEditionForm.css';

export default function CardEditionForm(props) {
    const deleteButton = props.id === null ?
        null :
        (
            <Link to={Routes.CARD_LIST}>
                <input
                    type='button'
                    className='card-edition-form__delete-button'
                    value='Delete'
                    onClick={props.deleteCardHandler}
                />
            </Link>
        );

    return (
        <form className='card-edition-form__container' onSubmit={props.saveDataHandler}>
            <input
                type='text'
                className='card-edition-form__title-field'
                value={props.title}
                placeholder='Enter title'
                onChange={props.handleTitleInputChange}
                required
            />
            <textarea
                rows='5'
                className='card-edition-form__description-field'
                value={props.description}
                placeholder='Enter text'
                onChange={props.handleDescriptionInputChange}
                required
            />

            <div className='card-edition-form__buttons-container'>
                <Link to={Routes.CARD_LIST}>
                    <input
                        type='submit'
                        className='card-edition-form__save-button'
                        value='Save'
                    />
                </Link>
                {deleteButton}
            </div>
        </form>
    );
}

CardEditionForm.defaultProps = {
    id: null
};

CardEditionForm.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string,
    description: PropTypes.string,
    saveDataHandler: PropTypes.func.isRequired,
    deleteCardHandler: PropTypes.func.isRequired,
    handleTitleInputChange: PropTypes.func.isRequired,
    handleDescriptionInputChange: PropTypes.func.isRequired
};

