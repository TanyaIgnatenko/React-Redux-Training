import React from 'react';
import PropTypes from 'prop-types';
import {FIELD_LABEL, FIELD_PLACEHOLDER} from '../../locale';
import {Button, Col, Form, FormGroup, Input, Label} from 'reactstrap';

function LoginForm(props) {
    return (
        <Form>
            <FormGroup row>
                <Label for='email' sm={2}>{FIELD_LABEL.EMAIL}</Label>
                <Col sm={10}>
                    <Input
                        type='email'
                        name='email'
                        id='email'
                        placeholder={FIELD_PLACEHOLDER.EMAIL}
                        onChange={props.onChange}
                    />
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label for='password' sm={2}>{FIELD_LABEL.PASSWORD}</Label>
                <Col sm={10}>
                    <Input
                        type='password'
                        name='password'
                        id='password'
                        placeholder={FIELD_PLACEHOLDER.PASSWORD}
                        onChange={props.onChange}
                    />
                </Col>
            </FormGroup>
            <FormGroup>
                <Col sm={{size: 10, offset: 2}}>
                    <Button onClick={props.onLoginClick}>{Button.SIGN_IN}</Button>
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
