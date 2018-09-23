import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Page from '../../components/common/Page/Page';
import SignupForm from '../../components/signup/SignupForm';
import {loginRequest, registerRequest, resetRegisterStatus} from '../../ducks/auth/actions';
import {connect} from 'react-redux';
import {Routes} from '../../config';
import {selectLoginStatus, selectRegisterStatus} from '../../ducks/auth/selectors';
import {push} from "connected-react-router";
import {Status} from '../../constants';
import Loader from '../../components/common/Loader/Loader';

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
        confirmPassword: ''
    };

    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    onSignupClick = (event) => {
        event.preventDefault();
        this.props.register(this.state.name, this.state.email, this.state.password);
    };

    render() {
        const {register, onRegisterSuccess, registerStatus} = this.props;
        if (registerStatus === Status.SUCCESS) {
            onRegisterSuccess();
        }
        return (
            <Page title='Sign up'>
                <SignupForm
                    name={this.state.name}
                    email={this.state.email}
                    password={this.state.password}
                    confirmPassword={this.state.confirmPassword}
                    onChange={this.onChange}
                    onSignupClick={this.onSignupClick}
                />
                {registerStatus === Status.IN_PROGRESS ? <Loader/> : null}
                {registerStatus === Status.ERROR ? <p>Registering has failed :с</p> : null}
            </Page>
        );
    }
}

const mapStateToProps = state => ({
    registerStatus: selectRegisterStatus(state)
});

const mapDispatchToProps = dispatch => ({
    register: (name, email, password) => dispatch(registerRequest({name, email, password})),
    onRegisterSuccess: () => {
        dispatch(push(Routes.POSTS));
        dispatch(resetRegisterStatus);
    },
    resetRegisterStatus: () => dispatch(resetRegisterStatus())
});

export default connect(mapStateToProps, mapDispatchToProps)(SignupPageContainer);

