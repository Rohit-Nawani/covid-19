import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import "./Nav.css";
import logo from "../corona.svg";
import About from "../pages/About";
import Symptom from "../pages/Symptom";

export default class Navigation extends Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>
          <a
            href="/"
            className="navbar-brand"
            style={{
              height: "55px",
              width: "35px",
              color: "whitesmoke",
              paddingLeft: "10px",
            }}
          >
            C
            <img src={logo} style={{ height: "55px", width: "35px" }} />
            VID-19
          </a>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav
            className="ml-auto"
            style={{
              alignItems: "center",
              paddingRight: "50px",
              paddingLeft: "50px",
            }}
          >
            {/* <NavLink className="p-2 bg-dark text-white" to="/">
              Home
            </NavLink> */}
            <NavLink className="p-2 bg-dark text-white" to="/map">
              Map
            </NavLink>
            <NavLink className="p-2 bg-dark text-white" to="/graph">
              Chart
            </NavLink>
            <NavLink className="p-2 bg-dark text-white" to="/symptom">
              Symptoms
            </NavLink>
            <NavLink className="p-2 bg-dark text-white" to="/prevention">
              Prevention
            </NavLink>
            <NavLink className="p-2 bg-dark text-white" to="/about">
              About
            </NavLink>
            {/* <NavDropdown
              className="p-2 bg-dark text-white"
              title="About"
              id="collasible-nav-dropdown"
              bg="dark"
            >
              <NavDropdown.Item href="Symptom">Symptoms</NavDropdown.Item>
              <NavDropdown.Item href="Prevention">Prevention</NavDropdown.Item>
              <NavDropdown.Item href="About">About</NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
