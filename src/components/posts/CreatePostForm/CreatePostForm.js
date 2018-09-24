import React from 'react';
import PropTypes from 'prop-types';
import {BUTTON, FIELD_PLACEHOLDER} from '../../../locale';

import './CreatePostForm.scss';

export default function CreatePostForm(props) {
    return (
        <form className={'create-post-form__container'} onSubmit={props.onSave}>
            <input
                type='text'
                className={'create-post-form__title-field'}
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
                className={'create-post-form__description-field'}
                value={props.content}
                name='content'
                placeholder={FIELD_PLACEHOLDER.CONTENT}
                onChange={props.onDescriptionInputChange}
                required
                minLength='5'
                maxLength='90'
            />

            <div className={'create-post-form__buttons-container'}>
                <input
                    type='submit'
                    className={'create-post-form__save-button'}
                    value={BUTTON.SAVE}
                />
            </div>
        </form>
    );
}

CreatePostForm.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    onSave: PropTypes.func.isRequired,
    onTitleInputChange: PropTypes.func.isRequired,
    onDescriptionInputChange: PropTypes.func.isRequired
};

