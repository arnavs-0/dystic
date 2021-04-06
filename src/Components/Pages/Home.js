import React from 'react'
import Footer from '../common/Footer'
import NavBar from '../common/NavBar'
import Search from "../other/home/Search";

function Home() {
    return (
        <div>
            <NavBar home="nav-link active"/>
            <Search/>
            <Footer/>
        </div>
    )
}

export default Home
