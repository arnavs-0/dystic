import React, { Component } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import '../../../Styles/Pages/Home/Search.scss'

export class Search extends Component {
    render() {
        return (
            <div className="container-search">
            <div className="wrap-search">
                <Form className="search-form">
                    <span className="search-form-title"><strong>Search</strong></span>
                    <Row>
                        <Col>
                            <div className="wrap-input-search">
                                <Form.Group>
                                    <Form.Control className="input shadow-none" type="text" name="job" placeholder="Type in a job here" />
                                    <span className="focus-input"></span>
                                </Form.Group>
                            </div>
                        </Col>
                        <Col>
                            <div className="wrap-input-search">
                                <Form.Group>
                                    <Form.Control className="input shadow-none" type="text" name="location" placeholder="Type in a desired job location" />
                                    <span className="focus-input"></span>
                                </Form.Group>
                            </div>
                        </Col>
                    </Row>
                    <div className="radiogroup">
                        <div>
                            <span className="text"><strong>What type of disability do you have?</strong></span>
                            <br></br>
                            <span className="text">Choose more than one option if needed</span>
                        </div>
                        <Row>
                            <Col>
                                <div className="wrapper">
                                    <Form.Group>
                                        <Form.Control className="state" type="radio" name="app" id="a" value="a"/>
                                    </Form.Group>
                                    <label className="label" for="a">
                                        <div className="indicator"></div>
                                        <span className="text-radio">Vision Impairment</span>
                                    </label>
                                </div>
                                <div className="wrapper">
                                    <Form.Group>
                                        <Form.Control className="state" type="radio" name="app" id="b" value="b"/>
                                    </Form.Group>
                                    <label class="label" for="b">
                                        <div class="indicator"></div>
                                        <span class="text-radio">Neurological Impairment</span>
                                    </label>
                                </div>
                                <div className="wrapper">
                                    <Form.Group>
                                        <Form.Control className="state" type="radio" name="app" id="c" value="c"/>
                                    </Form.Group>
                                    <label class="label" for="c">
                                        <div class="indicator"></div>
                                        <span class="text-radio">Psychiatric Impairment</span>
                                    </label>
                                </div>
                                <div className="wrapper">
                                    <Form.Group>
                                        <Form.Control className="state" type="radio" name="app" id="d" value="d"/>
                                    </Form.Group>
                                    <label class="label" for="d">
                                        <div class="indicator"></div>
                                        <span class="text-radio">Learning Impairment</span>
                                    </label>
                                </div>
                                <div className="wrapper">
                                    <Form.Group>
                                        <Form.Control className="state" type="radio" name="app" id="e" value="e"/>
                                    </Form.Group>
                                    <label class="label" for="e">
                                        <div class="indicator"></div>
                                        <span class="text-radio">Hearing Impairment</span>
                                    </label>
                                </div>
                                <div className="wrapper">
                                    <Form.Group>
                                        <Form.Control className="state" type="radio" name="app" id="f" value="f"/>
                                    </Form.Group>
                                    <label class="label" for="f">
                                        <div class="indicator"></div>
                                        <span class="text-radio">Other</span>
                                    </label>
                                </div>
                            </Col>
                            <Col>
                                <div className="container-search-form-btn">
                                    <Button className="search-form-btn shadow-none">
                                        Search
                                    </Button>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Form>
            </div>
        </div>
        )
    }
}

export default Search
