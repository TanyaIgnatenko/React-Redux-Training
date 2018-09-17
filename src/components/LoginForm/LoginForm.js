import React from 'react';
import PropTypes from 'prop-types';
import {Button, Col, ControlLabel, Form, FormControl, FormGroup} from 'react-bootstrap';

function LoginForm(props) {
    return (
        <Form horizontal>
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

            <FormGroup>
                <Col smOffset={2} sm={10}>
                    <Button type='submit' onClick={props.onLoginClick}>Sign in</Button>
                </Col>
            </FormGroup>
        </Form>
    );
}

LoginForm.propTypes = {
    email: PropTypes.string,
    password: PropTypes.string,
    onLoginClick: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired
};

export default LoginForm;
