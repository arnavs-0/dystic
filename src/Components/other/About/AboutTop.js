import React, { Component } from 'react'
import { Row, Col, Image } from 'react-bootstrap';
import AboutUs1Image from '../../../assets/img/aboutus1.svg'

export default class AboutTop extends Component {
    render() {
        return (
            <div className="container-about">
                <div className="wrap-search">
                    <Row className="justify-content-md-center">
                        <Col>
                            <div class="img">
                                <Image src={AboutUs1Image} fluid  />
                            </div>
                        </Col>
                        <Col>
                            <div className="container-about-desc">
                                <div className="about-container">
                                    <p>At <strong>dystic</strong> we want everyone to have a job.</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}
