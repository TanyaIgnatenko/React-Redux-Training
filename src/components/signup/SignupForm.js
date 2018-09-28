import React from 'react';
import PropTypes from 'prop-types';
import uniqueId from 'lodash.uniqueid';

import {BUTTON, FIELD_LABEL, FIELD_PLACEHOLDER, RULE} from '../../locale';
import {Button, Container, Form, FormFeedback, FormGroup, Input, Label} from 'reactstrap';

import './SignupForm.scss';

function SignupForm(props) {
    const {isValid, isInvalid, onFocusLose} = props;
    return (
        <div className={'signup-form__container'}>
            <Container fluid={true}>
                <Form>
                    <FormGroup>
                        <Label for='name'>{FIELD_LABEL.NAME}</Label>
                        <Input
                            className={'signup-form__input'}
                            name='name'
                            id={uniqueId('name')}
                            placeholder={FIELD_PLACEHOLDER.NAME}
                            onChange={props.onChange}
                            invalid={isInvalid.name}
                            valid={isValid.name}
                            onBlur={onFocusLose.name}
                        />
                        <FormFeedback>{RULE.NAME}</FormFeedback>
                    </FormGroup>
                    <FormGroup>
                        <Label for='email'>{FIELD_LABEL.EMAIL}</Label>
                        <Input
                            className={'signup-form__input'}
                            name='email'
                            id={uniqueId('email')}
                            placeholder={FIELD_PLACEHOLDER.EMAIL}
                            onChange={props.onChange}
                            invalid={isInvalid.email}
                            valid={isValid.email}
                            onBlur={onFocusLose.email}
                        />
                        <FormFeedback>{RULE.EMAIL}</FormFeedback>
                    </FormGroup>
                    <FormGroup>
                        <Label for='password'>{FIELD_LABEL.PASSWORD}</Label>
                        <Input
                            className={'signup-form__input'}
                            type='password'
                            name='password'
                            id={uniqueId('password')}
                            placeholder={FIELD_PLACEHOLDER.PASSWORD}
                            onChange={props.onChange}
                            invalid={isInvalid.password}
                            valid={isValid.password}
                            onBlur={onFocusLose.password}
                        />
                        <FormFeedback>{RULE.PASSWORD}</FormFeedback>
                    </FormGroup>
                    <FormGroup>
                        <Label for='confirmPassword'>{FIELD_LABEL.CONFIRM_PASSWORD}</Label>
                        <Input
                            className={'signup-form__input'}
                            name='confirmPassword'
                            type='password'
                            id={uniqueId('confirmPassword')}
                            placeholder={FIELD_PLACEHOLDER.CONFIRM_PASSWORD}
                            onChange={props.onChange}
                            invalid={isInvalid.confirmPassword}
                            valid={isValid.confirmPassword}
                            onBlur={onFocusLose.confirmPassword}
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
    isValid: PropTypes.shape({
        name: PropTypes.bool.isRequired,
        email: PropTypes.bool.isRequired,
        password: PropTypes.bool.isRequired,
        confirmPassword: PropTypes.bool.isRequired
    }).isRequired,
    isInvalid: PropTypes.shape({
        name: PropTypes.bool.isRequired,
        email: PropTypes.bool.isRequired,
        password: PropTypes.bool.isRequired,
        confirmPassword: PropTypes.bool.isRequired
    }).isRequired,
    onFocusLose: PropTypes.shape({
        name: PropTypes.func.isRequired,
        email: PropTypes.func.isRequired,
        password: PropTypes.func.isRequired,
        confirmPassword: PropTypes.func.isRequired
    }).isRequired,
    onSignupClick: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired
};

export default SignupForm;
