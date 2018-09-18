import React from 'react';
import PropTypes from 'prop-types';
import {Nav, Navbar, NavItem} from 'react-bootstrap';
import Routes from '../../config';

function NavBar(props) {
    return (
        <Navbar inverse collapseOnSelect>
            <Navbar.Header>
                <Navbar.Brand>
                    <a href={Routes.ROOT}>LadyBug404 Blog</a>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav pullRight>
                    <NavItem eventKey={1} href={Routes.LOGIN}>
                        Login
                    </NavItem>
                    <NavItem eventKey={2} href={Routes.SIGN_UP}>
                        Sign up
                    </NavItem>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

NavBar.propTypes = {};

export default NavBar;
