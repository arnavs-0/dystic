import React, {Component} from 'react'
import {Col, Row} from 'react-bootstrap'
import '../../../Styles/other/checks.scss'

export default class Check extends Component {
    render() {
        return (
            <div className="ml-2">
                <div>
                    <span className="text"><strong>What type of impairment do you have?</strong></span>
                </div>
                <Row className="mt-2">
                    <Col>
                        <Row>
                            <Col md={'auto'}>
                                <ul>
                                    <li>
                                        <input id="c1" type="checkbox"/>
                                        <label htmlFor="c1">&nbsp; Vision</label>
                                    </li>
                                    <li>
                                        <input id="c2" type="checkbox"/>
                                        <label htmlFor="c2">&nbsp; Learning</label>
                                    </li>
                                </ul>
                            </Col>
                            <Col md={'auto'}>
                                <ul>
                                    <li>
                                        <input id="c3" type="checkbox"/>
                                        <label htmlFor="c3">&nbsp; Physical</label>
                                    </li>
                                    <li>
                                        <input id="c4" type="checkbox"/>
                                        <label htmlFor="c4">&nbsp; Other</label>
                                    </li>
                                </ul>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        )
    }
}
