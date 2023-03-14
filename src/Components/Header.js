import React, { Component } from "react";

import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import logo from "../Components/btnn.png";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useHistory,
} from "react-router-dom";
import Youtube from "../lododropdown/you.png";
import Facebook from "../lododropdown/f.png";
import Instagram from "../lododropdown/insta.png";
import Twitter from "../lododropdown/twit.png";

import Home from "../Page/Home.js";
import Store from "../Page/Store.js";
import About from "../Page/About.js";
import Blog from "../Page/Blog.js";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";

export default class Header extends Component {
  render() {
    return (
      <>
        <Navbar
          sticky="top"
          collapseOnSelect
          expand="md"
          bg="dark"
          variant="dark"
        >
          <Container>
            <Navbar.Brand href="/">
              <img
                src={logo}
                width="35"
                height="35"
                className="d-inline-block align-top"
                alt="Logo"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/About">About us</Nav.Link>
                <Nav.Link href="/Store">Store </Nav.Link>
                <Nav.Link href="/Blog">Blog</Nav.Link>

                <NavDropdown
                  className="right"
                  title="Social Media"
                  id="basic-nav-dropdown"
                >
                  <NavDropdown.Item
                    className="dropMenu"
                    href="https://www.facebook.com/BMW/"
                  >
                    <img src={Facebook} width="20" height="20" alt="" />
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    className="dropMenu"
                    href="https://www.instagram.com/bmw/"
                  >
                    <img src={Twitter} width="20" height="20" alt="" />
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    className="dropMenu"
                    href="https://twitter.com/bmw/"
                  >
                    <img src={Instagram} width="20" height="20" alt="" />
                  </NavDropdown.Item>

                  <NavDropdown.Item
                    className="dropMenu"
                    href="https://www.youtube.com/user/BMW/"
                  >
                    <img src={Youtube} width="20" height="20" alt="" />
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/About" element={<About />} />
            <Route exact path="/Store" element={<Store />} />
            <Route exact path="/Blog" element={<Blog />} />
          </Routes>
        </Router>
      </>
    );
  }
}
