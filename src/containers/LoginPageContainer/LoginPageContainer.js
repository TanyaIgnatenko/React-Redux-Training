import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Page from '../../components/Page/Page';
import CardEditionFormContainer from '../CardEditionFormContainer/CardEditionFormContainer';
import LoginForm from '../../components/LoginForm/LoginForm';

class LoginPageContainer extends Component {
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
        //save credentials
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

export default LoginPageContainer;

