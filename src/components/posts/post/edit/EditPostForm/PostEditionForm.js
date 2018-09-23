import React from 'react';
import PropTypes from 'prop-types';

import './PostEditionForm.scss';
import {BUTTON, FIELD_PLACEHOLDER} from '../../../../../locale';

export default function EditPostForm(props) {
    return (
        <form className={'edit-post-form__container'} onSubmit={props.onSave}>
            <input
                type='text'
                className={'edit-post-form__title-field'}
                value={props.title}
                name='title'
                placeholder={FIELD_PLACEHOLDER.TITLE}
                onChange={props.onTitleInputChange}
                required
                minLength='4'
                maxLength='15'
            />
            <textarea
                rows='10'
                cols='33'
                className={'edit-post-form__description-field'}
                value={props.content}
                name='content'
                placeholder={FIELD_PLACEHOLDER.CONTENT}
                onChange={props.onDescriptionInputChange}
                required
                minLength='5'
                maxLength='90'
            />

            <div className={'edit-post-form__buttons-container'}>
                <input
                    type='submit'
                    className={'edit-post-form__save-button'}
                    value={BUTTON.SAVE}
                />
                <input
                    type='button'
                    className={'edit-post-form__delete-button'}
                    value={BUTTON.DELETE}
                    onClick={props.onDelete}
                />
            </div>
        </form>
    );
}

EditPostForm.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    onSave: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    onTitleInputChange: PropTypes.func.isRequired,
    onDescriptionInputChange: PropTypes.func.isRequired
};

