import { React, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import { Nav, Navbar } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import './navbar.css';

const NavigationBar = () => {
    useEffect(() => {
        const registration = localStorage.getItem('registration');
        const login = document.getElementById('login');
        const register = document.getElementById('register');
        const logout = document.getElementById('logout');
        if (registration === 'true') {

            login.style.display = 'none';
            register.style.display = 'none';
            logout.style.display = 'inline';
        }
        else {
            login.style.display = 'inline';
            register.style.display = 'inline';
            logout.style.display = 'none';
        }
    }, []);

    const handleLogout = () => {
        try {
            localStorage.removeItem('registration');
            toast.success('Logout successful', {
                autoClose: 1000,
            });
            const login = document.getElementById('login');
            const register = document.getElementById('register');
            const logout = document.getElementById('logout');
            login.style.display = 'inline';
            register.style.display = 'inline';
            logout.style.display = 'none';
        }
        catch (error) {
            toast.error('Logout unsuccessful');
        }
    }

    return (
        <Navbar className="fixed w-full top-0 left-0 p-3 bg-zinc-800 text-neutral-400">
            <Container className="flex flex-row">
                <Navbar.Brand className="text-lg delay-75 hover:text-white" as={Link} to="/">Lorem Ipsum</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse>
                    <Nav className="fixed right-4">
                        <NavLink id="login" className="nav-link mx-3 text-lg delay-75 hover:text-white" as={Link} to={{ pathname: "/" }}>Login</NavLink>
                        <NavLink id="register" className="nav-link mx-3 text-lg delay-75 hover:text-white" as={Link} to={{ pathname: "/register" }}>Register</NavLink>
                        <button onClick={handleLogout}><NavLink id="logout" className="nav-link mx-2 text-lg delay-75 hover:text-white" as={Link} to={{ pathname: "/" }}>Logout</NavLink></button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavigationBar;
