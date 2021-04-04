import React from "react";
import Footer from '../common/Footer'
import NavBar from '../common/NavBar'
import Map from "./Map";
import {Container, Row, Col} from "react-bootstrap";
import Results from "./Results";

function MapResults(){
    return (
        <div>
            <NavBar  />
            <Container fluid className="h-100 mt-5 mb-5">
                <Row className="justify-lg-content-start" style={{overflow: 'hidden'}}>
                    <Col xs={2} md={4} className="mt-5 mb-5">
                        <Results default={"City"} />
                    </Col>
                    <Col xs={6} md={7}>
                        <Map />
                    </Col>
                </Row>
            </Container>
        <Footer />
        </div>
    )
}

export default React.memo(MapResults)