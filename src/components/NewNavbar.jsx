import { Component } from "react";
import logo from "../assets/logo.png";

import { Container, Navbar, NavbarCollapse, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
const NewNavbar = () => {
  return (
    <Navbar
      expand="lg"
      className="navbar navbar-expand-lg "
      data-bs-theme="dark"
      style={{ backgroundColor: "#221f1f" }}
    >
      <Container fluid>
        <Navbar.Brand href="#">
          <img src={logo} style={{ width: "100px", height: "55px" }} />
        </Navbar.Brand>
        <Navbar.Toggle
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <NavbarCollapse id="navbarSupportedContent">
          <Nav className=" me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to={"/"}>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={"/tv-shows"}>
                TV Shows
              </NavLink>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-bold" href="#">
                Movies
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-bold" href="#">
                Recently Added
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-bold" href="#">
                My List
              </a>
            </li>
          </Nav>
          <div className="d-flex align-items-center text-light">
            <i className="bi bi-search icons mx-2"></i>
            <div id="kids" className="fw-bold mx-2">
              KIDS
            </div>
            <i className="bi bi-bell icons mx-2"></i>
            <i className="bi bi-person-circle icons ms-2"></i>
          </div>
        </NavbarCollapse>
      </Container>
    </Navbar>
  );
};

export default NewNavbar;
