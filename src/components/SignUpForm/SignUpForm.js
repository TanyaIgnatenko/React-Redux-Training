import React from 'react';
import PropTypes from 'prop-types';
import {Button, Col, ControlLabel, Form, FormControl, FormGroup} from 'react-bootstrap';

function SignUpForm(props) {
    return (
        <Form horizontal>
            <FormGroup controlId='formHorizontalName'>
                <Col componentClass={ControlLabel} sm={2}>
                    Name
                </Col>
                <Col sm={10}>
                    <FormControl
                        type='name'
                        name='name'
                        value={props.name}
                        placeholder='Name'
                        onChange={props.onChange}
                    />
                </Col>
            </FormGroup>

            <FormGroup controlId='formHorizontalEmail'>
                <Col componentClass={ControlLabel} sm={2}>
                    Email
                </Col>
                <Col sm={10}>
                    <FormControl
                        type='email'
                        name='email'
                        value={props.email}
                        placeholder='Email'
                        onChange={props.onChange}
                    />
                </Col>
            </FormGroup>

            <FormGroup controlId='formHorizontalPassword'>
                <Col componentClass={ControlLabel} sm={2}>
                    Password
                </Col>
                <Col sm={10}>
                    <FormControl
                        type='password'
                        name='password'
                        value={props.password}
                        placeholder='Password'
                        onChange={props.onChange}
                    />
                </Col>
            </FormGroup>

            <FormGroup controlId='formHorizontalConfirmPassword'>
                <Col componentClass={ControlLabel} sm={2}>
                    ConfirmPassword
                </Col>
                <Col sm={10}>
                    <FormControl
                        type='password'
                        name='confirmPassword'
                        value={props.confirmPassword}
                        placeholder='Confirm password'
                        onChange={props.onChange}
                    />
                </Col>
            </FormGroup>

            <FormGroup>
                <Col smOffset={2} sm={10}>
                    <Button type='submit' onClick={props.onSignUpClick}>Sign up</Button>
                </Col>
            </FormGroup>
        </Form>
    );
}

SignUpForm.propTypes = {
    name: PropTypes.string,
    email: PropTypes.string,
    password: PropTypes.string,
    confirmPassword: PropTypes.string,
    onSignUpClick: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired
};

export default SignUpForm;
