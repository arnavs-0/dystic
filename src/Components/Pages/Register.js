import React, {useState} from 'react';
import '../../Styles/Pages/Register/Register.scss'

// Components
import {Form, Button} from 'react-bootstrap'


function Register(props) {
    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [cPassword, setCPassword] = useState("")
    const [country, setCountry] = useState("")

    const validateEmail = (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    const validatePassword = (pw) => {
        const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
        return re.test(pw);
    }


    return (
        <div className='register-container'>
            <h1 className="registerHeading">Register</h1>
            <Form>
                <Form.Group controlId="registerForm.fullName">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" placeholder="John Doe" onChange={(e) => setFullName(e.target.value)}/>
                </Form.Group>
                <Form.Group controlId="registerForm.email">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com"
                                  onChange={(e) => setEmail(e.target.value)}/>
                </Form.Group>
                <Form.Group controlId="registerForm.pass">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" onChange={(e) => setPassword(e.target.value)}/>
                </Form.Group>
                <Form.Group controlId="registerForm.cPass">
                    <Form.Label>Confirm your Password</Form.Label>
                    <Form.Control type="password" onChange={(e) => setCPassword(e.target.value)}/>
                </Form.Group>
                <Form.Group controlId="registerForm.countryDropdown">
                    <Form.Label>Select Country of Residence</Form.Label>
                    <Form.Control as="select" onChange={(e) => setCountry(e.target.value)}>
                        <option defaultValue="Select"/>
                        <option>United States</option>
                        <option>Canada</option>
                        <option>United Kingdom</option>
                        <option>Mexico</option>
                        <option>Other</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect2">
                    <Form.Label>Select Disabilities</Form.Label>
                    <Form.Group controlId="disabiltieCheckboxContainer">
                        <div className="disContainer">
                            {['N/A', 'Visual', 'Hearing', 'Nervous', 'Mental', 'Other'].map(val => (

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
                <Button className="registerButton" onClick={() => {
                    if (fullName !== "" && email !== "" && password !== "" && cPassword !== "") {
                        if (validateEmail(email)) {
                            if (password === cPassword) {
                                if (validatePassword(cPassword)) {
                                    if (country !== "") {
                                        console.log("Registerd Successfully")
                                    } else {
                                        console.log("Please select country")
                                    }
                                } else {
                                    console.log("Weak Password")
                                }
                            } else {
                                console.log("Your password doesn't match")
                            }
                        } else {
                            console.log("Invalid email form")
                        }
                    } else {
                        console.log("Don't leave the fields empty")
                    }
                }}>
                    Register
                </Button>
            </Form>
        </div>
    );
}

export default Register;