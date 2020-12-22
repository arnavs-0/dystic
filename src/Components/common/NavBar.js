import React, { Component } from 'react'
import { Nav, Navbar, Row } from 'react-bootstrap'
import '../../Styles/common/NavBar.scss'
export class Navigation extends Component {
    render() {
        return (
         <div className="NavBar"> 
          <Navbar collapseOnSelect expand="lg" bg="none" variant="light">
            <Row>
              <Navbar.Brand href="/" className="navbar-brand">dystic</Navbar.Brand>
              <div className="slogan">making job search more accessible</div>
            </Row>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="justify-content-end nav-pills">
                <Nav.Link className={this.props.home} eventKey={1} href="/"><h6 className="nav-color">Home</h6></Nav.Link>
                <Nav.Link className={this.props.about} eventKey={2} href="/about"><h6 className="nav-color">About</h6></Nav.Link>
                <Nav.Link className={this.props.contact} eventKey={3} href="/contact"><h6 className="nav-color">Contact</h6></Nav.Link>
                <Nav.Link className={this.props.build} eventKey={4} href="/build"><h6 className="nav-color">Build</h6></Nav.Link>
                <Nav.Link className={this.props.login} eventKey={5} href="/login"><h6 className="nav-color">Login</h6></Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
           </div>
        )
    }
}

export default Navigation
