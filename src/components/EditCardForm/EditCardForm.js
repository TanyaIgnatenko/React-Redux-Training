import React from 'react';
import './EditCardForm.css';
import PropTypes from 'prop-types';

export default function EditCardForm(props) {
    return (
        <form className='edit-card-form__container'>
            <input type='text' className='edit-card-form__title-field' value={props.title}/>
            <textarea rows='5' className='edit-card-form__description-field' value={props.description}/>
            <div className='edit-card-form__buttons-container'>
                <input type='submit' className='edit-card-form__save-button' value='Save'/>
                <input type='submit' className='edit-card-form__delete-button' value='Delete'/>
            </div>
        </form>
    );
}

EditCardForm.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
};

