import React, { Component } from 'react'
import { Nav, Navbar, Row } from 'react-bootstrap'
import '../../Styles/common/NavBar.scss'
export class Navigation extends Component {
    render() {
        return (
         <div className="NavBar"> 
          <Navbar collapseOnSelect expand="lg" bg="none" variant="light">
            <Row>
              <Navbar.Brand href="#home" className="navbar-brand">dystic</Navbar.Brand>
              <div className = "slogan">making job search more accessible </div>
            </Row>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ml-auto">
                <Nav.Link href="#about">
                  About
                </Nav.Link>
                <Nav.Link eventKey={2} href="#contact-us">
                  Contact Us
                </Nav.Link>
                <Nav.Link eventKey={2} href="#build">
                  Build
                </Nav.Link>
                <Nav.Link eventKey={2} href="#Login">
                  Login      
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
           </div>
        )
    }
}

export default Navigation
