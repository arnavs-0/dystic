import React, { Component } from 'react'
import { Col, Row } from 'react-bootstrap'
import '../../../Styles/Pages/Home/Radio.scss'
import Checkboxes from '../../common/Checkboxes'
import SearchButton from './SearchButton'

export default class Check extends Component {
    render() {
        return (
            <div className="radiogroup">
                <div>
                    <span className="text"><strong>What type of impairment do you have?</strong></span>
                    <br></br>
                    <span className="text">Choose more than one option if needed</span>
                </div>
                <Row className="mt-5">
                    <Col>
                        <Checkboxes wrapper="wrapper" formClass="state" 
                            name="app" id="a" value="a" 
                            labelClass="label" indicator="indicator" 
                            spanClass="text-radio"
                            span="Vision Impairment" 
                        />
                        <Checkboxes wrapper="wrapper" formClass="state" 
                            name="app" id="b" value="b" 
                            labelClass="label" indicator="indicator" 
                            spanClass="text-radio"
                            span="Neurological Impairment" 
                        />
                        <Checkboxes wrapper="wrapper" formClass="state" 
                            name="app" id="c" value="c" 
                            labelClass="label" indicator="indicator" 
                            spanClass="text-radio"
                            span="Psychiatric Impairment" 
                        />
                        <Checkboxes wrapper="wrapper" formClass="state" 
                            name="app" id="d" value="d" 
                            labelClass="label" indicator="indicator" 
                            spanClass="text-radio"
                            span="Learning Impairment" 
                        />
                        <Checkboxes wrapper="wrapper" formClass="state" 
                            name="app" id="e" value="e" 
                            labelClass="label" indicator="indicator" 
                            spanClass="text-radio"
                            span="Hearing Impairment" 
                        />
                        <Checkboxes wrapper="wrapper" formClass="state" 
                            name="app" id="f" value="f" 
                            labelClass="label" indicator="indicator" 
                            spanClass="text-radio"
                            span="Other" 
                        />
                    </Col>
                    <Col>
                        <SearchButton />
                    </Col>
                </Row>
            </div>
        )
    }
}
