import React from 'react';
import PropTypes from 'prop-types';
import {Nav, Navbar, NavItem} from 'react-bootstrap';
import {Routes} from '../../../config';
import {APP_NAME, BUTTON} from '../../../locale';

function NavBar(props) {
    const signinButton = !props.isAuth ? <NavItem onClick={props.onLogin}>{BUTTON.SIGN_IN}</NavItem> : null;
    const signupButton = !props.isAuth ? <NavItem onClick={props.onSignup}>{BUTTON.SIGN_UP}</NavItem> : null;
    const logoutButton = props.isAuth ? <NavItem onClick={props.onLogout}>{BUTTON.LOGOUT}</NavItem> : null;
    return (
        <Navbar inverse collapseOnSelect>
            <Navbar.Header>
                <Navbar.Brand>
                    <a href={Routes.ROOT}>{APP_NAME}</a>
                </Navbar.Brand>
                <Navbar.Toggle/>
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav pullRight>
                    {signinButton}
                    {signupButton}
                    {logoutButton}
                </Nav>
                <Navbar.Text pullRight>{props.username}</Navbar.Text>
            </Navbar.Collapse>
        </Navbar>
    );
}

NavBar.propTypes = {
    isAuth: PropTypes.bool.isRequired,
    onLogout: PropTypes.func.isRequired,
    onLogin: PropTypes.func.isRequired,
    onSignup: PropTypes.func.isRequired,
    username: PropTypes.string
};

export default NavBar;
