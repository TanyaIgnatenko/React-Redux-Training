import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import Page from '../../components/Page/Page';
import LoginForm from '../../components/LoginForm/LoginForm';
import {loginRequest} from '../../ducks/auth/actions';
import {connect} from 'react-redux';
import {Routes} from '../../config';

class LoginPageContainer extends Component {
    static props = {
        login: PropTypes.func.isRequired,
        history: PropTypes.object.isRequired,
        isLoggedIn: PropTypes.bool.isRequired,
        isLoginProcessing: PropTypes.bool.isRequired,
        loginError: PropTypes.object.isRequired
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
        this.props.login(this.state.email, this.state.password);
    };

    render() {
        const {history, isLoggedIn, isLoginProcessing, loginError} = this.props;
        if (isLoggedIn) {
            history.push(Routes.CARD_LIST);
        }
        return (
            <Page title='Login'>
                <Fragment>
                    <LoginForm
                        email={this.state.email}
                        password={this.state.password}
                        onLoginClick={this.onLoginClick}
                        onChange={this.onChange}
                    />
                    {isLoginProcessing ? <p>Loading...</p> : null}
                    {loginError ? <p>Login has failed :с</p> : null}
                </Fragment>
            </Page>
        );
    }
}

const mapStateToProps = state => ({
    isLoginProcessing: state.auth.isRequesting,
    isLoggedIn: state.auth.user !== null,
    loginError: state.auth.error
});

const mapDispatchToProps = dispatch => ({
    login: (email, password) => dispatch(loginRequest(email, password))
});

export default connect(null, mapDispatchToProps)(LoginPageContainer);

