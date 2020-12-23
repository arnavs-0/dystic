import React, { Component } from 'react';
import '../../Styles/Pages/About/About.scss'
import AboutTop from '../other/About/AboutTop';
import AboutMiddle from '../other/About/AboutMiddle';
import AboutParagraph from '../other/About/AboutParagraph';

export default class Contact extends Component {
    render() {
        return (
            <div>
                <AboutTop />
                <AboutMiddle />
                <AboutParagraph />
            </div>
        );
    }
}