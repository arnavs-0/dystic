import React, {Component} from 'react'
import {Button} from 'react-bootstrap'
import '../../../Styles/Pages/Home/Search.scss'

export default class SeachButton extends Component {
    render() {
        return (
            <div className="container-search-form-btn">
                <Button className="search-form-btn shadow-none">
                    Search
                </Button>
            </div>
        )
    }
}
