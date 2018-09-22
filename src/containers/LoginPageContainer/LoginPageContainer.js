import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import Page from '../../components/Page/Page';
import LoginForm from '../../components/LoginForm/LoginForm';
import {loginRequest, resetLoginStatus} from '../../ducks/auth/actions';
import {connect} from 'react-redux';
import {Routes} from '../../config';
import {selectLoginStatus} from '../../ducks/auth/selectors';
import {Status} from '../../constants';
import {push} from 'connected-react-router';

class LoginPageContainer extends Component {
    static propTypes = {
        login: PropTypes.func.isRequired,
        onLoginSuccess: PropTypes.func.isRequired,
        resetLoginStatus: PropTypes.func.isRequired,
        loginStatus: PropTypes.string.isRequired
    };

    state = {
        email: '',
        password: ''
    };

    UNSAFE_componentWillMount() {
        this.props.resetLoginStatus();
    }

    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    loginHandler = (event) => {
        this.props.login(this.state.email, this.state.password);
        event.preventDefault();
    };

    render() {
        const {login, onLoginSuccess, loginStatus} = this.props;
        if (loginStatus === Status.SUCCESS) {
            onLoginSuccess();
        }
        return (
            <Page title='Login'>
                <Fragment>
                    <LoginForm
                        email={this.state.email}
                        password={this.state.password}
                        onLoginClick={this.loginHandler}
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
    login: (email, password) => dispatch(loginRequest(email, password)),
    onLoginSuccess: () => {
        dispatch(push(Routes.POSTS));
        dispatch(resetLoginStatus());
    },
    resetLoginStatus: () => dispatch(resetLoginStatus())
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPageContainer);

