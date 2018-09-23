import React from 'react';
import PropTypes from 'prop-types';
import {Button, Col, ControlLabel, Form, FormControl, FormGroup} from 'react-bootstrap';
import {FIELD_LABEL, FIELD_PLACEHOLDER} from '../../locale';

function LoginForm(props) {
    return (
        <Form horizontal>
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

            <FormGroup>
                <Col smOffset={2} sm={10}>
                    <Button type='submit' onClick={props.onLoginClick}>{Button.SIGN_IN}</Button>
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
