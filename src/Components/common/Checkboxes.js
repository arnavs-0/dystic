import React, { Component } from 'react'
import { Form } from 'react-bootstrap'

export default class Checkboxes extends Component {
    render() {
        return (
            <div className={this.props.wrapperClass}>
                <Form.Group>
                    <Form.Control className={this.props.formClass} type="checkbox" name={this.props.name} id={this.props.id} value={this.props.value}/>
                        <label className={this.props.labelClass} for={this.props.id}>
                            <div className={this.props.indicator}></div>
                            <span className={this.props.spanClass}>{this.props.span}</span>
                        </label>
                </Form.Group>
            </div>
        )
    }
}
