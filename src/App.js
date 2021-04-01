import logo from './logo.svg';
import './App.scss';


// Common Components
import Footer from "./Components/common/Footer";
import Contact from './Components/Pages/Contact';
import Search from './Components/other/home/Search';
import Results from "./Components/Pages/Results";

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import JobCardExpand from "./Components/common/JobCardExpand";
import {Col, Container, Row} from "react-bootstrap";
const jobSummary = " \n Busy production company is seeking a Motion Graphics/Animator. As part of our creative team you’ll create the amazing images that help visually tell our stories. You'll also be shaping those stories through editing. You’ll be at the forefront of our continued expansion into new types of brand storytelling, including interactive, virtual reality and immersive multimedia experiences."
const jobType = ["Visual Arts", "Part-Time"]

function App() {
  return (
    <div className="App">
      <Container fluid className="h-100">
        <Row className="justify-content-center">
            <Col xs={2} md={4} className="col-2 fixed-top one h-100 my-auto mt-5">
                <Results/>
            </Col>
            <Col xs={6} md={7} className="offset-sm-5 two mb-5">
                <JobCardExpand />
            </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
