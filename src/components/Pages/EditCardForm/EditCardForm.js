import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

import './EditCardForm.css';

export default function EditCardForm(props) {
    return (
        <div className='card-edition-form__container'>
            <input type='text' className='card-edition-form__title-field' value={props.title}/>
            <textarea rows='5' className='card-edition-form__description-field' value={props.description}/>

            <div className='card-edition-form__buttons-container'>
                <Link to='/'>
                    <input type='button' className='card-edition-form__save-button' value='Save'/>
                </Link>
                <Link to='/'>
                    <input type='button' className='card-edition-form__delete-button' value='Delete'/>
                </Link>
            </div>
        </div>
    );
}

EditCardForm.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
};

