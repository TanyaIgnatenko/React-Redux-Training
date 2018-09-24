import React from 'react';
import PropTypes from 'prop-types';
import {BUTTON, FIELD_LABEL, FIELD_PLACEHOLDER} from '../../locale';
import {Button, Col, Form, FormGroup, Input, Label} from 'reactstrap';
import './SignupForm.scss';

function SignupForm(props) {
    return (
        <div className={'signup-form__container centering-container'}>
            <Form>
                <FormGroup>
                    <Label for='name'>{FIELD_LABEL.NAME}</Label>
                    <Input
                        className={'signup-form__input'}
                        name='name'
                        id='name'
                        placeholder={FIELD_PLACEHOLDER.NAME}
                        onChange={props.onChange}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for='email'>{FIELD_LABEL.EMAIL}</Label>
                    <Input
                        className={'signup-form__input'}
                        name='email'
                        id='email'
                        placeholder={FIELD_PLACEHOLDER.EMAIL}
                        onChange={props.onChange}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for='password'>{FIELD_LABEL.PASSWORD}</Label>
                    <Input
                        className={'signup-form__input'}
                        name='password'
                        id='password'
                        placeholder={FIELD_PLACEHOLDER.PASSWORD}
                        onChange={props.onChange}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for='confirmPassword'>{FIELD_LABEL.CONFIRM_PASSWORD}</Label>
                    <Input
                        className={'signup-form__input'}
                        name='confirmPassword'
                        id='confirmPassword'
                        placeholder={FIELD_PLACEHOLDER.CONFIRM_PASSWORD}
                        onChange={props.onChange}
                    />
                </FormGroup>
                <FormGroup className={'button-container'}>
                    <Button className={'signup-form__button'}onClick={props.onSignupClick}>{BUTTON.SIGN_UP}</Button>
                </FormGroup>
            </Form>
        </div>
    );
}

SignupForm.propTypes = {
    name: PropTypes.string,
    email: PropTypes.string,
    password: PropTypes.string,
    confirmPassword: PropTypes.string,
    onSignupClick: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired
};

export default SignupForm;
