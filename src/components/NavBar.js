import React from 'react'
import { Container } from 'react-bootstrap'
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from "react-bootstrap";
import logo from "../assets/logo.png";
import styles from "../styles/NavBar.module.css";

const NavBar = () => {
    return (

        <Navbar bg="light" className={styles.NavBar} expand="md" fixed="top">
            <Container>
                <Navbar.Brand className="mr-auto">
                    <img src={logo} alt="logo" height="45" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto text-left">
                        <Nav.Link href="#home"><i className="fas fa-home text-primary fa-2x"></i>  Home</Nav.Link>
                        <Nav.Link><i className="fas fa-sign-in-alt text-primary fa-2x"></i>  Sign In</Nav.Link>
                        <Nav.Link><i className="fas fa-user-plus text-primary fa-2x"></i>  Sign Up</Nav.Link>

                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar