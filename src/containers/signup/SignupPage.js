/* eslint-disable react/no-did-mount-set-state */
import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import {push} from 'connected-react-router';
import {connect} from 'react-redux';

import Page from '../../components/common/Page/Page';
import SignupForm from '../../components/signup/SignupForm';
import Loading from '../../components/common/Loading/Loading';
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
        isValid: {
            name: false,
            email: false,
            password: false,
            confirmPassword: false
        },
        isFocusLost: {
            name: false,
            email: false,
            password: false,
            confirmPassword: false
        }
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

    areValidCredentials = () => {
        this.validateName();
        this.validateEmail();
        this.validatePassword();
        this.validateConfirmPassword();
        const {isValid} = this.state;
        return isValid.name && isValid.email && isValid.password && isValid.confirmPassword;
    };

    validateName = () => this.setIsValidState({name: validationHelpers.isValidName(this.state.name)});

    validateEmail = () => this.setIsValidState({email: validationHelpers.isValidEmail(this.state.email)});

    validatePassword = () => this.setIsValidState({password: validationHelpers.isValidPassword(this.state.password)});

    validateConfirmPassword = () => this.setIsValidState({
        confirmPassword: validationHelpers.isValidConfirmPassword({
            password: this.state.password,
            confirmPassword: this.state.confirmPassword
        })
    });

    focusLoseNameHandler = () => {
        this.validateName();
        this.setfocusLoseState({name: true});
    };

    focusLoseEmailHandler = () => {
        this.validateEmail();
        this.setfocusLoseState({email: true});
    };

    focusLosePasswordHandler = () => {
        this.validatePassword();
        this.setfocusLoseState({password: true});
    };

    focusLoseConfirmPasswordHandler = () => {
        this.validateConfirmPassword();
        this.setfocusLoseState({confirmPassword: true});
    };

    setfocusLoseState = ({name, email, password, confirmPassword}) => {
        name = name === undefined ? this.state.isFocusLost.name : name;
        email = email === undefined ? this.state.isFocusLost.email : email;
        password = password === undefined ? this.state.isFocusLost.password : password;
        confirmPassword = confirmPassword === undefined ? this.state.isFocusLost.confirmPassword : confirmPassword;
        this.setState({
            isFocusLost: {
                name,
                email,
                password,
                confirmPassword
            }
        });
    };

    setIsValidState = ({name, email, password, confirmPassword}) => {
        name = name === undefined ? this.state.isValid.name : name;
        email = email === undefined ? this.state.isValid.email : email;
        password = password === undefined ? this.state.isValid.password : password;
        confirmPassword = confirmPassword === undefined ? this.state.isValid.confirmPassword : confirmPassword;
        this.setState({
            isValid: {
                name,
                email,
                password,
                confirmPassword
            }
        });
    };

    submitHandler = (event) => {
        const credentialsAreValid = this.areValidCredentials();
        if (credentialsAreValid) {
            const {name, email, password} = this.state;
            this.props.register(name, email, password);
        }

        event.preventDefault();
    };

    render() {
        const {registerStatus} = this.props;
        const {name, email, password, confirmPassword} = this.state;
        const {isValid, isFocusLost} = this.state;
        const isInvalid = {
            name: !isFocusLost.name ? false : !isValid.name,
            email: !isFocusLost.email ? false : !isValid.email,
            password: !isFocusLost.password ? false : !isValid.password,
            confirmPassword: !isFocusLost.name ? false : !isValid.confirmPassword
        };

        return (
            <Page title={PAGE_TITLE.SIGN_UP}>
                <Fragment>
                    <SignupForm
                        name={name}
                        email={email}
                        password={password}
                        confirmPassword={confirmPassword}
                        isValid={{
                            name: isValid.name,
                            email: isValid.email,
                            password: isValid.password,
                            confirmPassword: isValid.confirmPassword
                        }}
                        isInvalid={{
                            name: isInvalid.name,
                            email: isInvalid.email,
                            password: isInvalid.password,
                            confirmPassword: isInvalid.confirmPassword
                        }}
                        onFocusLose={{
                            name: this.focusLoseNameHandler,
                            email: this.focusLoseEmailHandler,
                            password: this.focusLosePasswordHandler,
                            confirmPassword: this.focusLoseConfirmPasswordHandler
                        }}
                        onChange={this.changeHandler}
                        onSignupClick={this.submitHandler}
                    />
                    {registerStatus === Status.IN_PROGRESS && <Loading/>}
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

