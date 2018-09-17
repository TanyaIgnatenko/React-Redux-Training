import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Page from '../../components/Page/Page';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import {login} from '../../ducks/auth/actions';

class SignUpPageContainer extends Component {
    static props = {
        signup: PropTypes.func
    };

    state = {
        email: '',
        password: '',
        confirmPassword: ''
    };

    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    onSignUpClick = (event) => {
        event.preventDefault();
        this.props.signup(this.state.email, this.state.password);
    };

    render() {
        return (
            <Page title='Sign up'>
                <SignUpForm
                    email={this.state.email}
                    password={this.state.password}
                    confirmPassword={this.state.confirmPassword}
                    onChange={this.onChange}
                    onSignUpClick={this.onSignUpClick}
                />
            </Page>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    signup: () => dispatch(signup(this.state.email, this.state.password))
});

export default SignUpPageContainer;

