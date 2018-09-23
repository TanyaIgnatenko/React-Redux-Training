import React from 'react';
import PropTypes from 'prop-types';
import {Button, Col, ControlLabel, Form, FormControl, FormGroup} from 'react-bootstrap';
import {FIELD_LABEL, FIELD_PLACEHOLDER} from '../../locale';

function SignupForm(props) {
    return (
        <Form horizontal>
            <FormGroup controlId='formHorizontalName'>
                <Col componentClass={ControlLabel} sm={2}>
                    {FIELD_LABEL.NAME}
                </Col>
                <Col sm={10}>
                    <FormControl
                        type='name'
                        name='name'
                        value={props.name}
                        placeholder={FIELD_PLACEHOLDER.NAME}
                        onChange={props.onChange}
                    />
                </Col>
            </FormGroup>

            <FormGroup controlId='formHorizontalEmail'>
                <Col componentClass={ControlLabel} sm={2}>
                    {FIELD_LABEL.EMAIL}
                </Col>
                <Col sm={10}>
                    <FormControl
                        type='email'
                        name='email'
                        value={props.email}
                        placeholder={FIELD_PLACEHOLDER.EMAIL}
                        onChange={props.onChange}
                    />
                </Col>
            </FormGroup>

            <FormGroup controlId='formHorizontalPassword'>
                <Col componentClass={ControlLabel} sm={2}>
                    {FIELD_LABEL.PASSWORD}
                </Col>
                <Col sm={10}>
                    <FormControl
                        type='password'
                        name='password'
                        value={props.password}
                        placeholder={FIELD_PLACEHOLDER.PASSWORD}
                        onChange={props.onChange}
                    />
                </Col>
            </FormGroup>

            <FormGroup controlId='formHorizontalConfirmPassword'>
                <Col componentClass={ControlLabel} sm={2}>
                    {FIELD_LABEL.CONFIRM_PASSWORD}
                </Col>
                <Col sm={10}>
                    <FormControl
                        type='password'
                        name='confirmPassword'
                        value={props.confirmPassword}
                        placeholder={FIELD_PLACEHOLDER.CONFIRM_PASSWORD}
                        onChange={props.onChange}
                    />
                </Col>
            </FormGroup>

            <FormGroup>
                <Col smOffset={2} sm={10}>
                    <Button type='submit' onClick={props.onSignupClick}>{Button.SIGN_UP}</Button>
                </Col>
            </FormGroup>
        </Form>
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
