import React, {Component} from 'react'
import '../../Styles/Pages/Contact/Contact.scss'
import NavBar from '../common/NavBar'
import Footer from '../common/Footer'
import ContactContainer from '../other/Contact/ContactContainer'

export default class Contact extends Component {
    render() {
        return (
            <div>
                <NavBar contact="nav-link active"/>
                <ContactContainer/>
                <Footer/>
            </div>
        )
    }
}
