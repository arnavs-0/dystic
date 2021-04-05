import React, { createRef, useState } from 'react'
import { Col, Form, Row, Container, Button, Image } from 'react-bootstrap'
import '../../../Styles/Pages/Home/Search.scss'
import InputText from '../../common/InputText'
import '../../../Styles/other/checks.scss'
import img from '../../../assets/img/search_img.svg'
import {Link} from "react-router-dom";
import Geocode from "react-geocode";
import {toast, ToastContainer} from "react-toastify";

export function Search() {
        const [isVisionChecked, setVisionChecked] = useState(false);
        const [isPhysicalChecked, setPhysicalChecked] = useState(false);
        const [isLearningChecked, setLearningChecked] = useState(false);
        const [isOtherChecked, setOtherChecked] = useState(false);
        function handleSearch(){
            if (jobInput.current.value === ''){
                toast.error('Job Title Is Required', {
                    position: "bottom-left",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            } else if (locationInput.current.value === ''){
                toast.error('A City or State is required',{
                    position: "bottom-left",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                });
            } else if (!isVisionChecked && !isPhysicalChecked && !isLearningChecked && !isOtherChecked){
                toast.error('At least one selected item is required',{
                    position: "bottom-left",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            } else {
                toast('Loading...', {
                    position: "bottom-left",
                    autoClose: 5000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                localStorage.clear();
                localStorage.setItem("jobInput", jobInput.current.value)
                localStorage.setItem("location", locationInput.current.value)
                localStorage.setItem("isVision", isVisionChecked.toString())
                localStorage.setItem("isPhysical", isPhysicalChecked.toString())
                localStorage.setItem("isLearning", isLearningChecked.toString())
                localStorage.setItem("isOther", isOtherChecked.toString())
                window.location.href = "/results";
            }
        }
        let jobInput = createRef();
        let locationInput = createRef();
        return (
            <div className="container-search">
                <Container fluid>
                    <Row>
                        <Col>
                        <Row>
                            <span aria-label={"Find your <br/> next opportunity <br/> today."}  aria-required="true" className="search-form-title text-left">Find your <br/> next opportunity <br/> today.</span>
                        </Row>
                        <Row className="mb-3">
                            <Col md="auto">
                                <span aria-label={"Find Jobs According to your needs simply <br/> click on search and choose jobs based on <br/> your interests"} className="search-form-text text-left">Find Jobs According to your needs simply <br/> click on search and choose jobs based on <br/> your interests</span>
                            </Col>
                            <Col md="auto">
                                <div className="wrap-build text-center">
                                    <span aria-label={"or build your resume"}  aria-required="true" className="search-form-text text-center">or build your resume</span>
                                    <Button className="build-btn" onClick={() => window.location.replace('https://resume-dystic.web.app/')}>build</Button>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                        <div className="wrap-search">
                            <Form className="search-form">
                                <Row>
                                    <Col>
                                        <InputText  reference={jobInput}  wrapper="wrap-input-search" inputClass="input shadow-none" name="job" input="Job Title" focus="focus-input" />
                                    </Col>
                                    <Col>
                                        <InputText reference={locationInput} wrapper="wrap-input-search" inputClass="input shadow-none" name="location" input="City or State" focus="focus-input" />
                                    </Col>
                                    <Col>
                                        <div className="container-search-form-btn" style={{zIndex: '5', position: 'relative'}}>
                                            {/*<Link to={"/results"}>*/}
                                            <Button className="search-form-btn shadow-none" onClick={handleSearch}>
                                                Search
                                            </Button>
                                            {/*</Link>*/}
                                        </div>
                                    </Col>
                                </Row>
                                <div style={{position:"relative", bottom:"180px", zIndex: '1'}}>
                                    <div className="ml-2">
                                        <div>
                                            <span className="text"><strong>What type of impairment do you have?</strong></span>
                                        </div>
                                        <Row className="mt-2">
                                            <Col>
                                                <Row>
                                                    <Col md={'auto'}>
                                                        <ul>
                                                            <li>
                                                                <input id="c1" type="checkbox" onChange={() => isVisionChecked ? setVisionChecked(false) : setVisionChecked(true)}/>
                                                                <label htmlFor="c1">&nbsp; Vision</label>
                                                            </li>
                                                            <li>
                                                                <input id="c2" type="checkbox" onChange={() => isLearningChecked ? setLearningChecked(false) : setLearningChecked(true)}/>
                                                                <label htmlFor="c2">&nbsp; Learning</label>
                                                            </li>
                                                        </ul>
                                                    </Col>
                                                    <Col md={'auto'}>
                                                        <ul>
                                                            <li>
                                                                <input id="c3" type="checkbox" onChange={() => isPhysicalChecked ? setPhysicalChecked(false) : setPhysicalChecked(true)}/>
                                                                <label htmlFor="c3">&nbsp; Physical</label>
                                                            </li>
                                                            <li>
                                                                <input id="c4" type="checkbox" onChange={() => isOtherChecked ? setOtherChecked(false) : setOtherChecked(true)}/>
                                                                <label htmlFor="c4">&nbsp; Other</label>
                                                            </li>
                                                        </ul>
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                            </Form>
                        </div>
                        </Row>
                        </Col>
                        <Col md={'auto'} className="mt-5">
                            <Image src={img} fluid />
                        </Col>
                    </Row>
                </Container>
            </div>
        )
}

export default Search
