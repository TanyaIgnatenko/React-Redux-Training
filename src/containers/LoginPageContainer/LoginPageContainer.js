import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Page from '../../components/Page/Page';
import LoginForm from '../../components/LoginForm/LoginForm';
import {loginRequest} from '../../ducks/auth/actions';
import {connect} from 'react-redux';

class LoginPageContainer extends Component {
    static props = {
        login: PropTypes.func.isRequired
    };

    state = {
        email: '',
        password: ''
    };

    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    onLoginClick = (event) => {
        event.preventDefault();
        this.props.login();
    };

    render() {
        return (
            <Page title='Login'>
                <LoginForm
                    email={this.state.email}
                    password={this.state.password}
                    onLoginClick={this.onLoginClick}
                    onChange={this.onChange}
                />
            </Page>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    login: () => dispatch(loginRequest(this.state.email, this.state.password))
});

export default connect(null, mapDispatchToProps)(LoginPageContainer);

