import React from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import './HeaderComp.scss';
import {headerMenu} from "../../configs/headerMenu";

const HeaderComp = () => {
  return (
    <Navbar collapseOnSelect expand="lg">
      <Container className="header-comp-container">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className="header-comp-toggle-custom"/>
        <Navbar.Collapse id="responsive-navbar-nav" className="header-comp-menu">
          <Nav className="me-auto menu d-flex justify-content-evenly align-items-center">
            {
              headerMenu.map((val, index) => (
                <Nav.Link key={index} href={val.path} className="header-menu-item">{val.label}</Nav.Link>
              ))
            }
          </Nav>
          <Nav className="d-flex justify-content-center align-items-center">
            <div className="header-comp-button">
              <button className="button-item d-flex flex-column justify-content-center align-items-center">
                <span className="button-name">Connect</span>
                <span className="button-name">Wallet</span>
              </button>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default HeaderComp;