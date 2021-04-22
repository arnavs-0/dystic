import React, {Component} from 'react';
import '../../Styles/Pages/About/About.scss'
import NavBar from '../common/NavBar'
import AboutTop from '../other/About/AboutTop'
import AboutMiddle from '../other/About/AboutMiddle'
import AboutParagraph from '../other/About/AboutParagraph'
import Footer from '../common/Footer'

export default class About extends Component {
    render() {
        return (
            <div>
                <NavBar about="nav-link active"/>
                <AboutTop/>
                <AboutMiddle/>
                <AboutParagraph/>
                <Footer/>
            </div>
        );
    }
}

