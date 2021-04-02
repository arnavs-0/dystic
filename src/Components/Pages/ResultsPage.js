import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Results from "./Results";
import JobCardExpand from "../common/JobCardExpand";
import NavBar from "../common/NavBar";
import Footer from "../common/Footer";


function ResultsPage() {
      return (
    <div className="ResultsPage">
        <NavBar  />
      <Container fluid className="h-100">
        <Row className="justify-content-center" style={{overflow: 'hidden'}}>
            <Col xs={2} md={4} className="col-2 fixed-top one h-100">
                <Results/>
            </Col>
            <Col xs={6} md={7} className="offset-sm-5 two mb-5">
                <JobCardExpand />
            </Col>
        </Row>
      </Container>
        <Footer />
    </div>
      )
}

export default React.memo(ResultsPage);