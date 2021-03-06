import React from 'react';
import PropTypes from 'prop-types';
import uniqueId from 'lodash.uniqueid';

import {BUTTON, FIELD_LABEL, FIELD_PLACEHOLDER} from '../../locale';
import {Button, Col, Container, Form, FormGroup, Input, Label} from 'reactstrap';

import './LoginForm.scss';

function LoginForm(props) {
    return (
        <div className={'login-form__container'}>
            <Container fluid={true}>
                <Form>
                    <FormGroup>
                        <Label for='email'>{FIELD_LABEL.EMAIL}</Label>
                        <Input
                            className={'login-form__input'}
                            name='email'
                            id={uniqueId('email')}
                            placeholder={FIELD_PLACEHOLDER.EMAIL}
                            onChange={props.onChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for='password'>{FIELD_LABEL.PASSWORD}</Label>
                        <Input
                            className={'login-form__input'}
                            type='password'
                            name='password'
                            id={uniqueId('password')}
                            placeholder={FIELD_PLACEHOLDER.PASSWORD}
                            onChange={props.onChange}
                        />
                    </FormGroup>
                    <FormGroup className={'button-container'}>
                        <Button className={'login-form__button'} onClick={props.onLoginClick}>{BUTTON.SIGN_IN}</Button>
                    </FormGroup>
                </Form>
            </Container>
        </div>
    );
}

LoginForm.propTypes = {
    email: PropTypes.string,
    password: PropTypes.string,
    onLoginClick: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired
};

export default LoginForm;
