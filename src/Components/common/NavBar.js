import React, { Component } from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import Logo from '../../assets/img/logo.png'
import '../../Styles/common/NavBar.scss'

export class Navigation extends Component {
    render() {
        return (
            
            <Navbar collapseOnSelect expand="lg" bg="white" variant="light">
                <Navbar.Brand href="#home">
                    <img alt="dystic Logo" width="150" src={Logo} className="d-inline-block align-top"/>{' '}
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto" />
                    <Nav>
                        <ul class="nav nav-pills nav-justified">
                            <li class="nav-item">
                                <a class="nav-link active"  href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Link</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Link</a>
                            </li>
                        </ul>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default Navigation
