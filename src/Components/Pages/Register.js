import React, {useState} from 'react';
import '../../Styles/Pages/Register/Register.scss'

// Components
import {Form, Button} from 'react-bootstrap'

function Register(props) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [cPassword, setCPassword] = useState("")


    return (
        <div className='register-container'>
            <h1 className="registerHeading">Register</h1>
            <Form>
                <Form.Group controlId="registerForm.fullName">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" placeholder="John Doe"/>
                </Form.Group>
                <Form.Group controlId="registerForm.email">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" onChange={(e) => setEmail(e.target.value)}/>
                </Form.Group>
                <Form.Group controlId="registerForm.pass">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" onChange={(e) => setPassword(e.target.value)}/>
                </Form.Group>
                <Form.Group controlId="registerForm.cPass">
                    <Form.Label>Confirm your Password</Form.Label>
                    <Form.Control type="password" onChange={(e) => setCPassword(e.target.value)}/>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Select Country of Residence</Form.Label>
                    <Form.Control as="select">
                        <option>United States</option>
                        <option>Canada</option>
                        <option>United Kingdom</option>
                        <option>Mexico</option>
                        <option>Other</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect2">
                    <Form.Label>Select Disabilities</Form.Label>
                    <Form.Group controlId="formBasicCheckbox">
                        <div className="disContainer">
                            {['Visual', 'Hearing', 'Nervous', 'Mental', 'Other'].map(val => (

                                <div key={`default-${val}`} className="text-left">
                                    <Form.Check
                                        type="checkbox"
                                        id={`id-${val}`}
                                        label={val}
                                    />
                                </div>
                            ))}</div>
                    </Form.Group>
                </Form.Group>
                <h4>Already have an account? <a href="/login">Login</a></h4>
                <Button className="registerButton">
                    Register
                </Button>
            </Form>
        </div>
    );
}

export default Register;