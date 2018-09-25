import React from 'react';
import PropTypes from 'prop-types';
import {Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink} from 'reactstrap';

import {APP_NAME, BUTTON} from '../../../locale';
import {Routes} from '../../../config';

class NavBar extends React.Component {
    static propTypes = {
        isAuth: PropTypes.bool.isRequired,
        onLogout: PropTypes.func.isRequired,
        onLogin: PropTypes.func.isRequired,
        onSignup: PropTypes.func.isRequired,
        username: PropTypes.string
    };

    state = {
        isOpen: false
    };

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    };

    render() {
        const {onLogin, onSignup, onLogout, username, isAuth} = this.props;
        return (
            <Navbar color='dark' dark expand='md'>
                <NavbarBrand href={Routes.ROOT}>
                    {APP_NAME}
                </NavbarBrand>
                <NavbarToggler onClick={this.toggle}/>
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className='ml-auto' navbar>
                        {
                            username &&
                            <NavItem>
                                <NavLink disabled>
                                    {username}
                                </NavLink>
                            </NavItem>
                        }
                        {
                            !isAuth &&
                            <NavItem>
                                <NavLink onClick={onLogin}>{BUTTON.SIGN_IN}</NavLink>
                            </NavItem>
                        }
                        {
                            !isAuth &&
                            <NavItem>
                                <NavLink onClick={onSignup}>{BUTTON.SIGN_UP}</NavLink>
                            </NavItem>
                        }
                        {
                            isAuth &&
                            <NavItem>
                                <NavLink onClick={onLogout}>{BUTTON.LOGOUT}</NavLink>
                            </NavItem>
                        }
                    </Nav>
                </Collapse>
            </Navbar>
        );
    }
}

export default NavBar;
