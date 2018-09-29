/* eslint-disable no-alert */
import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {push} from 'connected-react-router';

import Page from '../../components/common/Page/Page';
import LoginForm from '../../components/login/LoginForm';
import Loading from '../../components/common/Loading/Loading';
import {loginRequest, resetLoginStatus} from '../../ducks/auth/actions';
import {Routes} from '../../constants';
import {selectLoginStatus} from '../../ducks/auth/selectors';
import {Status} from '../../constants';
import {ERROR_MSG, PAGE_TITLE} from '../../locale';

class LoginPageContainer extends Component {
    static propTypes = {
        login: PropTypes.func.isRequired,
        onLoginSuccess: PropTypes.func.isRequired,
        onLoginError: PropTypes.func.isRequired,
        loginStatus: PropTypes.string.isRequired
    };

    state = {
        email: '',
        password: ''
    };

    componentDidUpdate() {
        const {loginStatus, onLoginSuccess, onLoginError} = this.props;
        if (loginStatus === Status.SUCCESS) {
            onLoginSuccess();
        } else if (loginStatus === Status.ERROR) {
            onLoginError();
        }
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
        const {loginStatus} = this.props;
        return (
            <Page title={PAGE_TITLE.LOGIN}>
                <Fragment>
                    <LoginForm
                        email={this.state.email}
                        password={this.state.password}
                        onLoginClick={this.loginHandler}
                        onChange={this.onChange}
                    />
                    {loginStatus === Status.IN_PROGRESS && <Loading/>}
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
    onLoginError: () => {
        alert(ERROR_MSG.LOGIN);
        dispatch(resetLoginStatus());
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPageContainer);

