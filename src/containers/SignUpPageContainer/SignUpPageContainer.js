import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Page from '../../components/Page/Page';
import SignUpForm from '../../components/SignUpForm/SignUpForm';

class SignUpPageContainer extends Component {
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
        //check credentials
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

export default SignUpPageContainer;

