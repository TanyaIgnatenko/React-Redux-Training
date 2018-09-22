import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import Page from '../components/Page/Page';
import LoginForm from '../components/LoginForm/LoginForm';
import {loginRequest} from '../ducks/auth/actions';
import {connect} from 'react-redux';
import {Routes} from '../config';
import {selectLoginStatus} from '../ducks/auth/selectors';
import {Status} from '../constants';

class LoginPageContainer extends Component {
    static propTypes = {
        login: PropTypes.func.isRequired,
        loginStatus: PropTypes.string.isRequired
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
        const {loginStatus} = this.props;
        return (
            <Page title='Login'>
                <Fragment>
                    <LoginForm
                        email={this.state.email}
                        password={this.state.password}
                        onLoginClick={this.onLoginClick}
                        onChange={this.onChange}
                    />
                    {loginStatus === Status.IN_PROGRESS ? <p>Loading...</p> : null}
                    {loginStatus === Status.ERROR ? <p>Login has failed :с</p> : null}
                </Fragment>
            </Page>
        );
    }
}

const mapStateToProps = state => ({
    loginStatus: selectLoginStatus(state)
});

const mapDispatchToProps = dispatch => ({
    login: (email, password) => dispatch(loginRequest(email, password))
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPageContainer);

