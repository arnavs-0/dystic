import React from 'react';
import '../../Styles/common/Footer.scss'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Button, Container } from 'react-bootstrap';
import {OpenOnboarding} from '../other/form/Newsletter'

const Footer = () => {
    return (
        <div className="Footer font-small pt-4 mt-4">
            <Container fluid className="text-center text-md-left">
                <Row>
                    <Col className="md-6">
                        <h1 className="title">dystic</h1>
                        <h5>
                            making job search <br></br>more accessible
                        </h5>
                    </Col>
                    <Col className="md-6">
                        <h5 className="title"><strong>menu</strong></h5>
                        <ul className="list-unstyled">
                            <li className="list-unstyled">
                                <a className="text" href="#!">home</a>
                            </li>
                            <li className="list-unstyled">
                                <a className="text" href="#!">about</a>
                            </li>
                            <li className="list-unstyled">
                                <a className="text" href="#!">build</a>
                            </li>
                            <li className="list-unstyled">
                                <a className="text" href="#!">contact</a>
                            </li>
                        </ul>
                    </Col>
                    <Col className="md-6">
                        <h5 className="title"><strong>legal</strong></h5>
                        <ul className="list-unstyled">
                            <li className="list-unstyled">
                                <a className="text" href="#!">terms & conditions</a>
                            </li>
                            <li className="list-unstyled">
                                <a className="text" href="#!">privacy policy</a>
                            </li>
                        </ul>
                    </Col>
                    <Col className="md-6">
                        <h5 className="title"><strong>follow us</strong></h5>
                        <ul className="list-unstyled">
                            <li className="list-unstyled">
                                <a className="text" href="#!">Instagram</a>
                            </li>
                            <li className="list-unstyled">
                                <a className="text" href="#!">Facebook</a>
                            </li>
                            <li className="list-unstyled">
                                <a className="text" href="#!">LinkedIn</a>
                            </li>
                        </ul>
                    </Col>
                    <Col className="md-6">
                        <h5 className="title"><strong>newsletter</strong></h5>
                        <ul className="list-unstyled">
                            <li className="list-unstyled">
                                <p>join our newsletter to receive updates</p>
                            </li>
                            <li className="list-unstyled">
                                <Button variant="primary" size="sm" block onClick={OpenOnboarding}>Join</Button>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
            <div className="footer-copyright text-center py-3">
                <Container fluid>
                    &copy; {new Date().getFullYear()} dystic
                </Container>
            </div>
        </div>
    );
};

export default Footer;
