import React from 'react';
import Logo from '../../../images/logo.png';
import User from '../../../images/user.png';
import { Button, Container, Image, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Navigation = () => {
    const { user, logOut } = useAuth();

    return (
        <Navbar
            collapseOnSelect
            expand="lg"
            bg="light"
            variant="light"
            sticky="top"
        >
            <Container>
                <Link className="navbar-brand" to="/">
                    <img
                        alt=""
                        src={Logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    Motoric
                </Link>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Nav className="ms-auto me-4">
                        <NavLink
                            to="/home"
                            activeClassName="active"
                            className="nav-link"
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/explore-cars"
                            activeClassName="active"
                            className="nav-link"
                        >
                            Explore Cars
                        </NavLink>
                        {user.email ? (
                            <>
                                <NavLink
                                    to="/dashboard"
                                    activeClassName="active"
                                    className="nav-link"
                                >
                                    Dashboard
                                </NavLink>
                            </>
                        ) : (
                            ''
                        )}
                    </Nav>
                    {user?.email ? (
                        <>
                            <Image src={User} rounded fluid width="30" />
                            <Navbar.Text className="ms-1 me-3">
                                <a href="#login">
                                    {user?.displayName || user?.email}
                                </a>
                            </Navbar.Text>
                            <Button onClick={logOut} variant="danger" size="sm">
                                Logout
                            </Button>
                        </>
                    ) : (
                        <Link to="/login" className="btn btn-sm btn-primary">
                            Login
                        </Link>
                    )}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;
