/* eslint-disable react/no-did-mount-set-state */
import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import {push} from 'connected-react-router';
import {connect} from 'react-redux';

import Page from '../../components/common/Page/Page';
import SignupForm from '../../components/signup/SignupForm';
import Loader from '../../components/common/Loader/Loader';
import {registerRequest, resetLoginStatus, resetRegisterStatus} from '../../ducks/auth/actions';
import {selectRegisterStatus} from '../../ducks/auth/selectors';
import * as validationHelpers from '../../helpers/validationHelpers';
import {ERROR_MSG, PAGE_TITLE} from '../../locale';
import {Status} from '../../constants';
import {Routes} from '../../config';

class SignupPageContainer extends Component {
    static propTypes = {
        register: PropTypes.func.isRequired,
        onRegisterSuccess: PropTypes.func.isRequired,
        onRegisterError: PropTypes.func.isRequired,
        registerStatus: PropTypes.string.isRequired
    };

    state = {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        nameInvalid: false,
        emailInvalid: false,
        passwordInvalid: false,
        confirmPasswordInvalid: false,
        blurName: false,
        blurEmail: false,
        blurPassword: false,
        blurConfirmPassword: false
    };

    componentDidUpdate() {
        const {registerStatus, onRegisterSuccess, onRegisterError} = this.props;
        if (registerStatus === Status.SUCCESS) {
            onRegisterSuccess();
        } else if (registerStatus === Status.ERROR) {
            onRegisterError();
        }
    }

    changeHandler = (event) => {
        this.setState({[event.target.name]: event.target.value});
    };

    isValid = (name, email, password, confirmPassword) => {
        this.validateName();
        this.validateEmail();
        this.validatePassword();
        this.validateConfirmPassword();
        const {nameInvalid, emailInvalid, passwordInvalid, confirmPasswordInvalid} = this.state;
        return !nameInvalid && !emailInvalid && !passwordInvalid && !confirmPasswordInvalid;
    };

    validateName = () => this.setState({nameInvalid: !validationHelpers.isValidName(this.state.name)});

    validateEmail = () => this.setState({emailInvalid: !validationHelpers.isValidEmail(this.state.email)});

    validatePassword = () => this.setState({passwordInvalid: !validationHelpers.isValidPassword(this.state.password)});

    validateConfirmPassword = () => this.setState({
        confirmPasswordInvalid: !validationHelpers.isValidConfirmPassword({
            password: this.state.password,
            confirmPassword: this.state.confirmPassword
        })});

    blurNameHandler = () => {
        this.validateName();
        this.setState({blurName: true});
    };

    blurEmailHandler = () => {
        this.validateEmail();
        this.setState({blurEmail: true});
    };

    blurPasswordHandler = () => {
        this.validatePassword();
        this.setState({blurPassword: true});
    };

    blurConfirmPasswordHandler = () => {
        this.validateConfirmPassword();
        this.setState({blurConfirmPassword: true});
    };

    submitHandler = (event) => {
        const {name, email, password, confirmPassword} = this.state;
        const dataValid = this.isValid(name, email, password, confirmPassword);
        if (dataValid) {
            this.props.register(name, email, password);
        }

        event.preventDefault();
    };

    render() {
        const {registerStatus} = this.props;
        const {name, email, password, confirmPassword} = this.state;
        const {nameInvalid, emailInvalid, passwordInvalid, confirmPasswordInvalid} = this.state;
        const {blurName, blurEmail, blurPassword, blurConfirmPassword} = this.state;

        const nameValid = !blurName ? false : !nameInvalid;
        const emailValid = !blurEmail ? false : !emailInvalid;
        const passwordValid = !blurPassword ? false : !passwordInvalid;
        const confirmPasswordValid = !blurConfirmPassword ? false : !confirmPasswordInvalid;

        return (
            <Page title={PAGE_TITLE.SIGN_UP}>
                <Fragment>
                    <SignupForm
                        name={name}
                        email={email}
                        password={password}
                        confirmPassword={confirmPassword}
                        nameInvalid={nameInvalid}
                        emailInvalid={emailInvalid}
                        passwordInvalid={passwordInvalid}
                        confirmPasswordInvalid={confirmPasswordInvalid}
                        nameValid={nameValid}
                        emailValid={emailValid}
                        passwordValid={passwordValid}
                        confirmPasswordValid={confirmPasswordValid}
                        onBlurName={this.blurNameHandler}
                        onBlurEmail={this.blurEmailHandler}
                        onBlurPassword={this.blurPasswordHandler}
                        onBlurConfirmPassword={this.blurConfirmPasswordHandler}
                        onChange={this.changeHandler}
                        onSignupClick={this.submitHandler}
                    />
                    {registerStatus === Status.IN_PROGRESS && <Loader/>}
                </Fragment>
            </Page>
        );
    }
}

const mapStateToProps = state => ({
    registerStatus: selectRegisterStatus(state)
});

const mapDispatchToProps = dispatch => ({
    register: (name, email, password) => dispatch(registerRequest(name, email, password)),
    onRegisterSuccess: () => {
        dispatch(push(Routes.POSTS));
        dispatch(resetRegisterStatus());
    },
    onRegisterError: () => {
        alert(ERROR_MSG.SIGN_UP);
        dispatch(resetRegisterStatus());
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(SignupPageContainer);

