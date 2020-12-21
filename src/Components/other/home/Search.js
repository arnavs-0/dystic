import React, { Component } from 'react'
import { Col, Form, Row } from 'react-bootstrap'
import '../../../Styles/Pages/Home/Search.scss'
import '../../../Styles/Pages/Home/Radio.scss'
import InnerSearchContainer from './InnerSearchContainer'
import InputText from '../../common/InputText'

export class Search extends Component {
    render() {
        return (
            <div className="container-search">
                <div className="wrap-search">
                    <Form className="search-form">
                        <span className="search-form-title"><strong>Search</strong></span>
                        <Row>
                            <Col>
                                <InputText  wrapper="wrap-input-search" inputClass="input shadow-none" name="job" input="Type in a job here" focus="focus-input" />
                            </Col>
                            <Col>
                                <InputText  wrapper="wrap-input-search" inputClass="input shadow-none" name="location" input="Type in a desired job location" focus="focus-input" />
                            </Col>
                        </Row>
                        <InnerSearchContainer />
                    </Form>
                </div>
            </div>
        )
    }
}

export default Search
