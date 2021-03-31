import React, { Component } from 'react'
import { Col, Form, Row } from 'react-bootstrap'
import '../../../Styles/Pages/Home/Search.scss'
import InnerSearchContainer from './InnerSearchContainer'
import InputText from '../../common/InputText'
import SearchButton from './SearchButton'

export class Search extends Component {
    render() {
        return (
            <div className="container-search">
                <div className="wrap-search">
                    <Form className="search-form">
                        <Row>
                            <Col>
                                <InputText  wrapper="wrap-input-search" inputClass="input shadow-none" name="job" input="Job Title" focus="focus-input" />
                            </Col>
                            <Col>
                                <InputText  wrapper="wrap-input-search" inputClass="input shadow-none" name="location" input="Location" focus="focus-input" />
                            </Col>
                            <Col>
                                <SearchButton />
                            </Col>
                        </Row>
                        <div style={{position:"relative", bottom:"180px"}}><InnerSearchContainer /></div>
                    </Form>
                </div>
            </div>
        )
    }
}

export default Search
