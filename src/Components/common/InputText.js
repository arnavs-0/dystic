import React, { Component } from 'react'
import { Form } from 'react-bootstrap'

export default class InputText extends Component {
    render() {
        return (
            <div className={this.props.wrapper}>
                <Form.Group>
                    <Form.Control className={this.props.inputClass} autocomplete="off" type="text" name={this.props.name} placeholder={this.props.input} ref={this.props.reference} />
                    <span className={this.props.focus}></span>
                </Form.Group>
            </div>
        )
    }
}
