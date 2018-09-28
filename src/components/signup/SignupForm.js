import React from 'react';
import PropTypes from 'prop-types';
import {BUTTON, FIELD_LABEL, FIELD_PLACEHOLDER, RULE} from '../../locale';
import {Button, Col, Container, Form, FormFeedback, FormGroup, Input, Label} from 'reactstrap';

import './SignupForm.scss';

function SignupForm(props) {
    const {nameInvalid, emailInvalid, passwordInvalid, confirmPasswordInvalid} = props;
    const {nameValid, emailValid, passwordValid, confirmPasswordValid} = props;
    const {onBlurName, onBlurEmail, onBlurPassword, onBlurConfirmPassword} = props;
    return (
        <div className={'signup-form__container'}>
            <Container fluid={true}>
                <Form>
                    <FormGroup>
                        <Label for='name'>{FIELD_LABEL.NAME}</Label>
                        <Input
                            className={'signup-form__input'}
                            name='name'
                            id='name'
                            placeholder={FIELD_PLACEHOLDER.NAME}
                            onChange={props.onChange}
                            invalid={nameInvalid}
                            valid={nameValid}
                            onBlur={onBlurName}
                        />
                        <FormFeedback>{RULE.NAME}</FormFeedback>
                    </FormGroup>
                    <FormGroup>
                        <Label for='email'>{FIELD_LABEL.EMAIL}</Label>
                        <Input
                            className={'signup-form__input'}
                            name='email'
                            id='email'
                            placeholder={FIELD_PLACEHOLDER.EMAIL}
                            onChange={props.onChange}
                            invalid={emailInvalid}
                            valid={emailValid}
                            onBlur={onBlurEmail}
                        />
                        <FormFeedback>{RULE.EMAIL}</FormFeedback>
                    </FormGroup>
                    <FormGroup>
                        <Label for='password'>{FIELD_LABEL.PASSWORD}</Label>
                        <Input
                            className={'signup-form__input'}
                            type='password'
                            name='password'
                            id='password'
                            placeholder={FIELD_PLACEHOLDER.PASSWORD}
                            onChange={props.onChange}
                            invalid={passwordInvalid}
                            valid={passwordValid}
                            onBlur={onBlurPassword}
                        />
                        <FormFeedback>{RULE.PASSWORD}</FormFeedback>
                    </FormGroup>
                    <FormGroup>
                        <Label for='confirmPassword'>{FIELD_LABEL.CONFIRM_PASSWORD}</Label>
                        <Input
                            className={'signup-form__input'}
                            name='confirmPassword'
                            type='password'
                            id='confirmPassword'
                            placeholder={FIELD_PLACEHOLDER.CONFIRM_PASSWORD}
                            onChange={props.onChange}
                            invalid={confirmPasswordInvalid}
                            valid={confirmPasswordValid}
                            onBlur={onBlurConfirmPassword}
                        />
                        <FormFeedback>{RULE.CONFIRM_PASSWORD}</FormFeedback>
                    </FormGroup>
                    <FormGroup className={'button-container'}>
                        <Button
                            className={'signup-form__button'}
                            onClick={props.onSignupClick}>
                            {BUTTON.SIGN_UP}
                        </Button>
                    </FormGroup>
                </Form>
            </Container>
        </div>
    );
}

SignupForm.propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    confirmPassword: PropTypes.string.isRequired,
    nameInvalid: PropTypes.bool.isRequired,
    emailInvalid: PropTypes.bool.isRequired,
    passwordInvalid: PropTypes.bool.isRequired,
    confirmPasswordInvalid: PropTypes.bool.isRequired,
    nameValid: PropTypes.bool.isRequired,
    emailValid: PropTypes.bool.isRequired,
    passwordValid: PropTypes.bool.isRequired,
    confirmPasswordValid: PropTypes.bool.isRequired,
    onBlurName: PropTypes.func.isRequired,
    onBlurEmail: PropTypes.func.isRequired,
    onBlurPassword: PropTypes.func.isRequired,
    onBlurConfirmPassword: PropTypes.func.isRequired,
    onSignupClick: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired
};

export default SignupForm;
