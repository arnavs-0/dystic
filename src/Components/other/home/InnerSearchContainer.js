import React, { Component } from 'react'
import { Col, Row } from 'react-bootstrap'
import Checkboxes from '../../common/Checkboxes'
import '../../../Styles/other/checks.scss'
import SearchButton from './SearchButton'

export default class Check extends Component {
    render() {
        return (
            <div className="ml-2">
                <div>
                    <span className="text"><strong>What type of impairment do you have?</strong></span>
                </div>
                <Row className="mt-2">
                    <Col>
                        {/*<Checkboxes wrapper="wrapper" formClass="state" */}
                        {/*    name="app" id="a" value="a" */}
                        {/*    labelClass="label" indicator="indicator" */}
                        {/*    spanClass="text-radio"*/}
                        {/*    span="Vision Impairment" */}
                        {/*/>*/}
                        {/*<Checkboxes wrapper="wrapper" formClass="state" */}
                        {/*    name="app" id="b" value="b" */}
                        {/*    labelClass="label" indicator="indicator" */}
                        {/*    spanClass="text-radio"*/}
                        {/*    span="Neurological Impairment" */}
                        {/*/>*/}
                        {/*<Checkboxes wrapper="wrapper" formClass="state" */}
                        {/*    name="app" id="c" value="c" */}
                        {/*    labelClass="label" indicator="indicator" */}
                        {/*    spanClass="text-radio"*/}
                        {/*    span="Psychiatric Impairment" */}
                        {/*/>*/}
                        {/*<Checkboxes wrapper="wrapper" formClass="state" */}
                        {/*    name="app" id="d" value="d" */}
                        {/*    labelClass="label" indicator="indicator" */}
                        {/*    spanClass="text-radio"*/}
                        {/*    span="Learning Impairment" */}
                        {/*/>*/}
                        {/*<Checkboxes wrapper="wrapper" formClass="state" */}
                        {/*    name="app" id="e" value="e" */}
                        {/*    labelClass="label" indicator="indicator" */}
                        {/*    spanClass="text-radio"*/}
                        {/*    span="Hearing Impairment" */}
                        {/*/>*/}
                        {/*<Checkboxes wrapper="wrapper" formClass="state" */}
                        {/*    name="app" id="f" value="f" */}
                        {/*    labelClass="label" indicator="indicator" */}
                        {/*    spanClass="text-radio"*/}
                        {/*    span="Other" */}
                        {/*/>*/}
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
