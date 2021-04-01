import React from "react";
import Footer from '../common/Footer'
import NavBar from '../common/NavBar'
import Map from "./Map";
import {Container, Row, Col} from "react-bootstrap";

function MapResults(){
    return (
        <div>
        <NavBar/>
        <Container>
            <Row>
                <Col>
                <h6>The Filter thing goes here</h6>
                </Col>
                <Col>
                    <Map/>
                </Col>
            </Row>
        </Container>
        <Footer />
        </div>
    )
}

export default React.memo(MapResults)