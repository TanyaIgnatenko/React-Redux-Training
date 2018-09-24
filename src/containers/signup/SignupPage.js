import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import {push} from 'connected-react-router';
import {connect} from 'react-redux';

import Page from '../../components/common/Page/Page';
import SignupForm from '../../components/signup/SignupForm';
import Loader from '../../components/common/Loader/Loader';
import {registerRequest, resetRegisterStatus} from '../../ducks/auth/actions';
import {selectRegisterStatus} from '../../ducks/auth/selectors';
import * as validationHelpers from '../../helpers/validationHelpers';
import {ERROR_MSG, PAGE_TITLE} from '../../locale';
import {Status} from '../../constants';
import {Routes} from '../../config';

class SignupPageContainer extends Component {
    static propTypes = {
        register: PropTypes.func.isRequired,
        onRegisterSuccess: PropTypes.func.isRequired,
        resetRegisterStatus: PropTypes.func.isRequired,
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
        confirmPasswordInvalid: false
    };

    changeHandler = (event) => {
        this.setState({[event.target.name]: event.target.value});
    };

    isValid = (name, email, password, confirmPassword) => {
        const nameInvalid = !validationHelpers.isValidName(name);
        const emailInvalid = !validationHelpers.isValidEmail(email);
        const passwordInvalid = !validationHelpers.isValidPassword(password);
        const confirmPasswordInvalid = !validationHelpers.isValidConfirmPassword({password, confirmPassword});
        this.setState({
            nameInvalid,
            emailInvalid,
            passwordInvalid,
            confirmPasswordInvalid
        });
        return !nameInvalid && !emailInvalid && !passwordInvalid && !confirmPasswordInvalid;
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
        const {register, onRegisterSuccess, registerStatus} = this.props;
        if (registerStatus === Status.SUCCESS) {
            onRegisterSuccess();
        }

        const {name, email, password, confirmPassword} = this.state;
        const {nameInvalid, emailInvalid, passwordInvalid, confirmPasswordInvalid} = this.state;
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
                        onChange={this.changeHandler}
                        onSignupClick={this.submitHandler}
                    />
                    {registerStatus === Status.IN_PROGRESS && <Loader/>}
                    {registerStatus === Status.ERROR && <p>{ERROR_MSG.SIGN_UP}</p>}
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
    resetRegisterStatus: () => dispatch(resetRegisterStatus())
});

export default connect(mapStateToProps, mapDispatchToProps)(SignupPageContainer);

