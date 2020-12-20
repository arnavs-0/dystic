import React, { Component } from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import Logo from '../../assets/img/logo.png'
import '../../Styles/common/NavBar.scss'
import * as ReactBootstrap from 'react-bootstrap';
export class Navigation extends Component {
    render() {
        return (
         <div className="NavBar"> 
      <ReactBootstrap.Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <ReactBootstrap.Navbar.Brand href="#home">dystic</ReactBootstrap.Navbar.Brand>
  <ReactBootstrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <ReactBootstrap.Navbar.Collapse id="responsive-navbar-nav">
    <ReactBootstrap.Nav className="ml-auto">
    
      <ReactBootstrap.Nav.Link href="#about">About</ReactBootstrap.Nav.Link>
      <ReactBootstrap.Nav.Link eventKey={2} href="#contact-us">
        Contact Us
      </ReactBootstrap.Nav.Link>
       <ReactBootstrap.Nav.Link eventKey={2} href="#build">
        Build
      </ReactBootstrap.Nav.Link>
       <ReactBootstrap.Nav.Link eventKey={2} href="#Login">
        Login      
      </ReactBootstrap.Nav.Link>
      
    </ReactBootstrap.Nav>
  </ReactBootstrap.Navbar.Collapse>
</ReactBootstrap.Navbar>
           </div>
        )
    }
}

export default Navigation
