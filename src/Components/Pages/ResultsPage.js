import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Results from "./Results";
import JobCardExpand from "../common/JobCardExpand";
import NavBar from "../common/NavBar";
import Footer from "../common/Footer";
import "../../Styles/Pages/Home/ResultsPage.scss";


class ResultsPage extends React.Component {

    state = {
        opacity: '1'
    }

    componentDidMount() {
        if (typeof window !== "undefined") {
            window.onscroll = () => {
                let currentScrollPos = window.pageYOffset;
                let maxScroll = document.body.scrollHeight - window.innerHeight;
                let maxmaxScroll = maxScroll - 500
                if (currentScrollPos > maxmaxScroll) {
                    this.setState({opacity: "0"})
                    // console.log(currentScrollPos)
                } else {
                    this.setState({opacity: "1"})
                }
            }
        }
    }

    render() {

        return (
            <div>
                <div className='ResultsPage'>
                    <NavBar/>
                    <Container fluid className='h-100'>
                        <Row
                            className='justify-lg-content-start'
                            style={{overflow: 'hidden'}}
                        >
                            <Col xs={2} md={4} className='col-2 fixed-top' style={{opacity: `${this.state.opacity}`}}>
                                <Results marginTop={{marginTop: '40%'}} default={"List"}/>
                            </Col>
                            <Col xs={6} md={7} className='offset-sm-5 two mb-5'>
                                <JobCardExpand/>
                            </Col>
                        </Row>
                    </Container>
                    <Footer className="sticky"/>
                </div>
            </div>
        );
    }
}

export default ResultsPage;