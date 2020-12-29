import React, { Component } from 'react'
import { Col, Form, Row } from 'react-bootstrap'
import '../../../Styles/Pages/Home/Search.scss'
import '../../../Styles/Pages/Home/Radio.scss'
import InnerSearchContainer from './InnerSearchContainer'
import InputText from '../../common/InputText'

export class FilterResults extends Component {
    render() {
        return (
            <div>
                <div class ="job-title"></div>
                <div class ="city-name"></div>
                <div class ="list-view"></div>
                
            </div>

           
        )
    }
}

export default FilterResults
