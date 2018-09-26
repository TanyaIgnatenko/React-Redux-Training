import React from 'react';
import PropTypes from 'prop-types';
import {BUTTON, FIELD_LABEL, FIELD_PLACEHOLDER, RULE} from '../../locale';
import {Button, Col, Container, Form, FormFeedback, FormGroup, Input, Label} from 'reactstrap';

import './SignupForm.scss';

function SignupForm(props) {
    const {nameInvalid, emailInvalid, passwordInvalid, confirmPasswordInvalid} = props;
    return (
        <Container className={'signup-form__container'}>
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
                    />
                    <FormFeedback>{RULE.CONFIRM_PASSWORD}</FormFeedback>
                </FormGroup>
                <FormGroup className={'button-container'}>
                    <Button className={'signup-form__button'} onClick={props.onSignupClick}>{BUTTON.SIGN_UP}</Button>
                </FormGroup>
            </Form>
        </Container>
    );
}

SignupForm.propTypes = {
    name: PropTypes.string,
    email: PropTypes.string,
    password: PropTypes.string,
    confirmPassword: PropTypes.string,
    nameInvalid: PropTypes.bool,
    emailInvalid: PropTypes.bool,
    passwordInvalid: PropTypes.bool,
    confirmPasswordInvalid: PropTypes.bool,
    onSignupClick: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired
};

export default SignupForm;
