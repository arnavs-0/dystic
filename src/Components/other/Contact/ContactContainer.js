import React, {useState} from 'react'
import {Button, Form} from 'react-bootstrap'

export default function ContactContainer() {
    const [status, setStatus] = useState("Submit");
    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Sending...");
        const {name, email, number, message} = e.target.elements;
        let details = {
            name: name.value,
            email: email.value,
            number: number.value,
            message: message.value,
        };
        let response = await fetch("https://dystic-contact.herokuapp.com/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(details),
        });
        setStatus("Submit");
        let result = await response.json();
        alert(result.status);
    };
    return (
        <div className="container-contact">
            <div className="wrap-contact">
                <Form className="contact-form" onSubmit={handleSubmit}>
                    <span className="contact-form-title">Contact Us</span>
                    <div className="wrap-input">
                        <Form.Group>
                            <Form.Control className="input shadow-none" type="text" name="name"
                                          placeholder="Full Name"/>
                            <span className="focus-input"></span>
                        </Form.Group>
                    </div>
                    <div className="wrap-input">
                        <Form.Group>
                            <Form.Control className="input shadow-none" type="text" name="email" placeholder="Email"/>
                            <span className="focus-input"></span>
                        </Form.Group>
                    </div>
                    <div className="wrap-input">
                        <Form.Group>
                            <Form.Control className="input shadow-none" type="text" name="number"
                                          placeholder="Phone Number"/>
                            <span className="focus-input"></span>
                        </Form.Group>
                    </div>
                    <div className="wrap-input">
                        <Form.Group>
                            <Form.Control className="input shadow-none" as="textarea" name="message"
                                          placeholder="Your Message"/>
                            <span className="focus-input"></span>
                        </Form.Group>
                    </div>
                    <div className="container-contact-form-btn">
                        <Button type="submit" className="contact-form-btn shadow-none">
                            {status}
                        </Button>
                    </div>
                </Form>
            </div>
        </div>
    )
}
