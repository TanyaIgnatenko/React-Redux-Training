import React, {Component} from 'react';
import PropTypes from 'prop-types';
import NavBar from '../../components/NavBar/NavBar';
import {logout} from '../../ducks/auth/actions';
import {connect} from 'react-redux';

class NavBarContainer extends Component {
    static propTypes = {
        user: PropTypes.shape({
            name: PropTypes.string.isRequired
        }).isRequired,
        logout: PropTypes.func.isRequired
    };

    render() {
        const {user, logout} = this.props;
        const isLoggedIn = user !== null;
        const name = user!== null ? user.name : null;
        return (
            <NavBar isLoggedIn={isLoggedIn} onLogout={logout} username={name}/>
        );
    }
}

const mapStateToProps = state => ({
    user: state.auth.user
});

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBarContainer);
