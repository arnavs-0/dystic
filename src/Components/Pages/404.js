import React, { Component } from 'react'
import NavBar from '../../Components/common/NavBar'
import Footer from '../../Components/common/Footer'
import '../../Styles/Pages/404/404.scss'
import Lottie from 'react-lottie-player'
import anim from  '../../assets/lottie/404.json'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';

export default class NotFound extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <div className="link-container">
                    <Lottie loop animationData={anim} play className="lottie" />
                    <h5 >Uh Oh! Looks like the page you requested does not exist!</h5>
                    <div className="container-btn">
                        <Link to="/">
                        <Button className="four-btn shadow-none">
                            Go back Home
                        </Button>
                        </Link>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}
