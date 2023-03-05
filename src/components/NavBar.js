import React, { useContext } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../assets/logo.png";
import styles from "../styles/NavBar.module.css";
import { NavLink } from "react-router-dom";
import { CurrentUserContext } from "../App";

const NavBar = () => {
  const currentUser = useContext(CurrentUserContext);
/* 
Inside, I’ll create the currentUser  variable and call the useContext hook  
with our CurrentUserContext. As you can  see, both have been automatically imported.  
Hopefully you’re getting used  to using that shortcut as well.
To tidy up our JSX, we’ll create a variable  for the icons our logged out users can see,  
and another for the icons  our logged in users will see.  

*/
  const loggedInIcons = <>{currentUser?.username}</>;
  const loggedOutIcons = (
    <>
    {/*
    However, we don’t want to wrap these NavLinks  in a div, as that will mess with our CSS.  
Instead we can use a JSX fragment, which is an  empty element. When this renders in the browser,  
we’ll just get our navigation links, and  no wrapper element will appear in the HTML.
    */} 
      <NavLink
        className={styles.NavLink}
        activeClassName={styles.Active}
        to="/signin"
      >
        <i className="fas fa-sign-in-alt"></i>Sign in
      </NavLink>
      <NavLink
        to="/signup"
        className={styles.NavLink}
        activeClassName={styles.Active}
      >
        <i className="fas fa-user-plus"></i>Sign up
      </NavLink>
    </>
  );

  return (
    <Navbar className={styles.NavBar} expand="md" fixed="top">
      <Container>
        <NavLink to="/">
          <Navbar.Brand>
            <img src={logo} alt="logo" height="45" />
          </Navbar.Brand>
        </NavLink>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto text-left">
            <NavLink
              exact
              className={styles.NavLink}
              activeClassName={styles.Active}
              to="/"
            >
              <i className="fas fa-home"></i>Home
            </NavLink>

            {currentUser ? loggedInIcons : loggedOutIcons}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;