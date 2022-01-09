import React from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import './HeaderComp.scss';
import {headerMenu} from "../../configs/headerMenu";
import Logo from '../../assets/imgs/logo.png';

const HeaderComp = ({btnConnect}) => {
  return (
    <Navbar collapseOnSelect expand="lg">
      <Container className="header-comp-container">
        <Navbar.Brand href="#home" className="header-comp-logo">
          <img src={Logo} alt="fallen-flower"/>
        </Navbar.Brand>
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
              <button onClick={btnConnect} className="button-item d-flex flex-column justify-content-center align-items-center">
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