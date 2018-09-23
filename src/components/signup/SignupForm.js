import React from 'react';
import PropTypes from 'prop-types';
import {FIELD_LABEL, FIELD_PLACEHOLDER} from '../../locale';
import {Button, Col, Form, FormGroup, Input, Label} from 'reactstrap';

function SignupForm(props) {
    return (
        <Form>
            <FormGroup row>
                <Label for='name' sm={2}>{FIELD_LABEL.NAME}</Label>
                <Col sm={10}>
                    <Input
                        name='name'
                        id='name'
                        placeholder={FIELD_PLACEHOLDER.NAME}
                        onChange={props.onChange}
                    />
                </Col>
            </FormGroup>
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
            <FormGroup row>
                <Label for='confirmPassword' sm={2}>{FIELD_LABEL.CONFIRM_PASSWORD}</Label>
                <Col sm={10}>
                    <Input
                        type='password'
                        name='confirmPassword'
                        id='confirmPassword'
                        placeholder={FIELD_PLACEHOLDER.CONFIRM_PASSWORD}
                        onChange={props.onChange}
                    />
                </Col>
            </FormGroup>
            <FormGroup>
                <Col sm={{size: 10, offset: 2}}>
                    <Button onClick={props.onSignupClick}>{Button.SIGN_UP}</Button>
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
