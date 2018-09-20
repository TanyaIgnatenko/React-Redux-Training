import React from 'react';
import PropTypes from 'prop-types';
import {Nav, Navbar, NavItem} from 'react-bootstrap';
import {Routes} from '../../config';

function NavBar(props) {
    const loginButton = !props.isLoggedIn ? <NavItem onClick={props.onLogin}>Login</NavItem> : null;
    const signInButton = !props.isLoggedIn ? <NavItem onClick={props.onSignup}>Sign up</NavItem> : null;
    const logoutButton = props.isLoggedIn ? <NavItem onClick={props.onLogout}>Logout</NavItem> : null;
    return (
        <Navbar inverse collapseOnSelect>
            <Navbar.Header>
                <Navbar.Brand>
                    <a href={Routes.ROOT}>LadyBug404 Blog</a>
                </Navbar.Brand>
                <Navbar.Toggle/>
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav pullRight>
                    {loginButton}
                    {signInButton}
                    {logoutButton}
                </Nav>
                <Navbar.Text pullRight>{props.username}</Navbar.Text>
            </Navbar.Collapse>
        </Navbar>
    );
}

NavBar.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
    onLogout: PropTypes.func.isRequired,
    onLogin: PropTypes.func.isRequired,
    onSignup: PropTypes.func.isRequired,
    username: PropTypes.string
};

export default NavBar;
