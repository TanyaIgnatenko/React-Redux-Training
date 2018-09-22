import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Page from '../components/Page/Page';
import SignupForm from '../components/SignupForm/SignupForm';
import {registerRequest} from '../ducks/auth/actions';
import {connect} from 'react-redux';

class SignupPageContainer extends Component {
    static props = {
        register: PropTypes.func.isRequired
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
            </Page>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    register: (name, email, password) => dispatch(registerRequest({name, email, password}))
});

export default connect(null, mapDispatchToProps)(SignupPageContainer);

