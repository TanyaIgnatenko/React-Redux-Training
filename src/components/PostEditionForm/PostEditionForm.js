import React from 'react';
import PropTypes from 'prop-types';

import './PostEditionForm.scss';

export default function PostEditionForm(props) {
    return (
        <form className={'post-edition-form__container'} onSubmit={props.onSave}>
            <input
                type='text'
                className={'post-edition-form__title-field'}
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
                className={'post-edition-form__description-field'}
                value={props.content}
                name='content'
                placeholder='Enter text'
                onChange={props.onDescriptionInputChange}
                required
                minLength='5'
                maxLength='90'
            />

            <div className={'post-edition-form__buttons-container'}>
                <input
                    type='submit'
                    className={'post-edition-form__save-button'}
                    value='Save'
                />
                {
                    props.postExist && <input
                        type='button'
                        className={'post-edition-form__delete-button'}
                        value='Delete'
                        onClick={props.onDelete}
                    />
                }
            </div>
        </form>
    );
}

PostEditionForm.defaultProps = {
    id: null
};

PostEditionForm.propTypes = {
    postExist: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    onSave: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    onTitleInputChange: PropTypes.func.isRequired,
    onDescriptionInputChange: PropTypes.func.isRequired
};

