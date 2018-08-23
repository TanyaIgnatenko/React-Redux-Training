import React from 'react';
import PropTypes from 'prop-types';

import './CardEditionForm.scss';

export default function CardEditionForm(props) {
    const deleteButton = !props.cardExist ?
        null :
        (
            <input
                type='button'
                className={'card-edition-form__delete-button'}
                value='Delete'
                onClick={props.onDelete}
            />
        );

    return (
        <form className={'card-edition-form__container'} onSubmit={props.onSave}>
            <input
                type='text'
                className={'card-edition-form__title-field'}
                value={props.title}
                name='title'
                placeholder='Enter title'
                onChange={props.onTitleInputChange}
                required
                minLength='4'
                maxLength='15'
            />
            <textarea
                rows='10'
                cols='33'
                className={'card-edition-form__description-field'}
                value={props.description}
                name='description'
                placeholder='Enter text'
                onChange={props.onDescriptionInputChange}
                required
                minLength='5'
                maxLength='90'
            />

            <div className={'card-edition-form__buttons-container'}>
                <input
                    type='submit'
                    className={'card-edition-form__save-button'}
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

