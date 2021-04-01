import React, {useState} from 'react';
import '../../Styles/Pages/Home/Results.scss'
import List from '../../images/list.svg'
import Map from '../../images/pin.svg'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'

function Results(props) {
    //Title input
    const [title, setTitle] = useState('')
    // City input
    const [city, setCity] = useState('')
    // Bottom input
    const [typed, setTyped] = useState('')
    return (
        <div className="contain-filter" style={{marginTop: '200px'}}>
            <div className="job-title">
                Jobs Title
                <input placeholder="eg. Artist" className="job-input results-input" onChange={event => setTitle(event.target.value)}/>
            </div>
            <div className="city-title">
                City
                <input placeholder="eg. Detroit" className="city-input results-input" onChange={event => setCity(event.target.value)}/>
            </div>

            <div className="d-flex justify-content-around align-items-center ">
                <div className="d-flex align-items-center justify-content-around view-container">
                    <img className="view-icon" src={List}/>
                    <button className="btn-view">List View</button>
                </div>

                <div className="d-flex align-items-center justify-content-around view-container">
                    <img className="view-icon" src={Map}/>
                    <button className="btn-view">Map View</button>
                </div>
            </div>

            {/*TODO SINCE CSS STYLES WERE GLOBAL @SOHIL 🤡*/}
            {/*<div className="drop-down">*/}
            {/*    <DropdownButton id="dropdown-basic-button" title="Job Type" className="">*/}
            {/*        <Dropdown.Item href="#/action-1">Physical</Dropdown.Item>*/}
            {/*        <Dropdown.Item href="#/action-2">Mental</Dropdown.Item>*/}
            {/*        <Dropdown.Item href="#/action-3">Vision</Dropdown.Item>*/}
            {/*    </DropdownButton>*/}
            {/*</div>*/}
            {/*<div className="drop-down">*/}
            {/*    <DropdownButton id="dropdown-basic-button" title="Date Posted">*/}
            {/*        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>*/}
            {/*        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>*/}
            {/*        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>*/}
            {/*    </DropdownButton>*/}
            {/*</div>*/}
            {/*<div className="drop-down">*/}
            {/*    <DropdownButton id="dropdown-basic-button" title="Salary">*/}
            {/*        <Dropdown.Item href="#/action-1"> 50000 </Dropdown.Item>*/}
            {/*        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>*/}
            {/*        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>*/}
            {/*    </DropdownButton>*/}
            {/*</div>*/}

            <button className="resetbtn">Reset Search</button>
            <div className="m-4">
                {typed}
                <input placeholder="eg. Artist" className="job-input results-input" onChange={event => setTyped(event.target.value)}/>
            </div>
        </div>
    );
}

export default Results;
// import React, { Component } from 'react'
// import { Col, Form, Row } from 'react-bootstrap'
// import '../../../Styles/Pages/Home/Search.scss'
// import '../../../Styles/Pages/Home/Radio.scss'
// import InnerSearchContainer from './InnerSearchContainer'
// import InputText from '../../common/InputText'
//
// export class FilterResult extends Component {
//     render() {
//         return (
//            <div>
//                <container class ="jobs-title">
//                <h3>Jobs Title</h3>
//
//                </container>
//                <container class ="city">
//
//                </container>
//                 <container class ="list-view">
//
//                </container>
//
//
//            </div>
//
//         )
//     }
// }
//
// export default FilterResult
