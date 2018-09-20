import React, {Component} from 'react';
import PropTypes from 'prop-types';
import NavBar from '../../components/NavBar/NavBar';
import {logout} from '../../ducks/auth/actions';
import {connect} from 'react-redux';
import {Routes} from '../../config';
import {withRouter} from 'react-router-dom';

class NavBarContainer extends Component {
    static propTypes = {
        user: PropTypes.shape({
            name: PropTypes.string.isRequired
        }).isRequired,
        logoutClickHandler: PropTypes.func.isRequired,
        history: PropTypes.object.isRequired
    };

    loginClickHandler = () => this.props.history.push(Routes.LOGIN);

    signupClickHandler = () => this.props.history.push(Routes.SIGN_UP);

    render() {
        const {user, logoutClickHandler} = this.props;
        const isLoggedIn = user !== null;
        const name = user!== null ? user.name : null;
        return (
            <NavBar
                isLoggedIn={isLoggedIn}
                onLogin={this.loginClickHandler}
                onLogout={logoutClickHandler}
                onSignup={this.signupClickHandler}
                username={name}
            />
        );
    }
}

const mapStateToProps = state => ({
    user: state.auth.user
});

const mapDispatchToProps = dispatch => ({
    logoutClickHandler: () => dispatch(logout())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBarContainer));
