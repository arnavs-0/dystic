import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'

export default class ContactContainer extends Component {
    render() {
        return (
            <div className="container-contact">
            <div className="wrap-contact">
                <Form className="contact-form">
                    <span className="contact-form-title">Contact Us</span>
                    <div className="wrap-input">
                        <Form.Group>
                            <Form.Control className="input shadow-none" type="text" name="name" placeholder="Full Name" />
                            <span className="focus-input"></span>
                        </Form.Group>
                    </div>
                    <div className="wrap-input">
                        <Form.Group>
                            <Form.Control className="input shadow-none" type="text" name="email" placeholder="Email" />
                            <span className="focus-input"></span>
                        </Form.Group>
                    </div>
                    <div className="wrap-input">
                        <Form.Group>
                            <Form.Control className="input shadow-none" type="text" name="number" placeholder="Phone Number" />
                            <span className="focus-input"></span>
                        </Form.Group>
                    </div>
                    <div className="wrap-input">
                        <Form.Group>
                            <Form.Control className="input shadow-none" as="textarea" name="message" placeholder="Your Message" />
                            <span className="focus-input"></span>
                        </Form.Group>
                    </div>
                    <div className="container-contact-form-btn">
                        <Button className="contact-form-btn shadow-none">
                            Submit
                        </Button>
                    </div>
                </Form>
            </div>
        </div>
        )
    }
}
