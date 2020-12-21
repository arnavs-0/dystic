import React, { Component } from 'react'
import { Button, Form } from 'react-bootstrap'
import '../../../Styles/Pages/Home/Search.scss'

export class Search extends Component {
    render() {
        return (
            <div className="container-search">
            <div className="wrap-search">
                <Form className="search-form">
                    <span className="search-form-title"><strong>Search</strong></span>
                    <div className="wrap-input">
                        <Form.Group>
                            <Form.Control className="input shadow-none" type="text" name="job" placeholder="Type in a job here" />
                            <span className="focus-input"></span>
                        </Form.Group>
                    </div>
                    <div className="wrap-input">
                        <Form.Group>
                            <Form.Control className="input shadow-none" type="text" name="location" placeholder="Type in a desired job location" />
                            <span className="focus-input"></span>
                        </Form.Group>
                    </div>
                    <div className="group">
                         <div class="wrapper">
                            <Form.Control className="state" type="checkbox" name="app" id="a" value="a" />
                            <label class="label" for="a">
                                    <div class="indicator"></div>
                                    <span class="text">Vision</span>
                            </label>
                        </div>
                        <div class="wrapper">
                            <Form.Control className="state" type="checkbox" name="app" id="b" value="b" />
                            <label class="label" for="b">
                                    <div class="indicator"></div>
                                    <span class="text">Neurological</span>
                            </label>
                        </div>
                        <div class="wrapper">
                            <Form.Control className="state" type="checkbox" name="app" id="c" value="c" />
                            <label class="label" for="c">
                                    <div class="indicator"></div>
                                    <span class="text">Psychiatric</span>
                            </label>
                        </div>
                        <div class="wrapper">
                            <Form.Control className="state" type="checkbox" name="app" id="d" value="d" />
                            <label class="label" for="d">
                                    <div class="indicator"></div>
                                    <span class="text">Learning</span>
                            </label>
                        </div>
                        <div class="wrapper">
                            <Form.Control className="state" type="checkbox" name="app" id="e" value="e" />
                            <label class="label" for="e">
                                    <div class="indicator"></div>
                                    <span class="text">Hearing</span>
                            </label>
                        </div>
                        <div className="container-search-form-btn">
                        <Button className="contact-search-btn shadow-none">
                            Search
                        </Button>
                    </div>
                    </div>
                    
                </Form>
            </div>
        </div>
        )
    }
}

export default Search
