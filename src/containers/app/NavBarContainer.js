import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {logout} from '../../ducks/auth/actions';
import {connect} from 'react-redux';
import {Routes} from '../../config';
import {withRouter} from 'react-router-dom';
import {push} from 'connected-react-router';

import NavBar from '../../components/common/NavBar/NavBar';
import {selectUser} from '../../ducks/auth/selectors';

class NavBarContainer extends Component {
    static propTypes = {
        user: PropTypes.shape({
            name: PropTypes.string.isRequired
        }),
        signupClickHandler: PropTypes.func.isRequired,
        loginClickHandler: PropTypes.func.isRequired,
        logoutClickHandler: PropTypes.func.isRequired
    };

    render() {
        const {user, signupClickHandler, loginClickHandler, logoutClickHandler} = this.props;
        const isAuth = user !== null;
        const name = user!== null ? user.name : null;
        return (
            <NavBar
                isAuth={isAuth}
                onLogin={loginClickHandler}
                onLogout={logoutClickHandler}
                onSignup={signupClickHandler}
                username={name}
            />
        );
    }
}

const mapStateToProps = state => ({
    user: selectUser(state)
});

const mapDispatchToProps = dispatch => ({
    logoutClickHandler: () => dispatch(logout()),
    loginClickHandler: () => dispatch(push(Routes.LOGIN)),
    signupClickHandler: () => dispatch(push(Routes.SIGN_UP))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBarContainer));
