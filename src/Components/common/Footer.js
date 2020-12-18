import React from 'react';
import '../../Styles/common/Footer.scss'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import 'bootstrap/dist/css/bootstrap.css'

const Footer = () => {
    return (
        <div className="Footer">
            <Row>
                <Col className='border' lg={8}>
                    <h1>dystic</h1>
                    <p>For disabled</p>
                </Col>
                <Col className="border">
                    <h3>Contact Us</h3>
                </Col>
                <Col className="border">
                    <h3>Navigate</h3>
                </Col>
            </Row>
        </div>
    );
};

export default Footer;
