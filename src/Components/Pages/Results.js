import React, {useState} from 'react';
import '../../Styles/Pages/Home/Results.scss'
import List from '../../images/list.svg'
import Map from '../../images/pin.svg'
import {Link} from "react-router-dom";

function Results(props) {
    //Title input
    const [title, setTitle] = useState(localStorage.getItem("jobInput"))
    // City input
    const [city, setCity] = useState(localStorage.getItem("location"))
    // Bottom input
    const [typed, setTyped] = useState('')
    // View type
    const [viewType, setViewType] = useState(props.default)

    return (
        <div className="contain-filter ml-5" style={props.marginTop}>
            <div className="job-title">
                Jobs Title
                <input placeholder={title} className="job-input results-input"
                       onChange={event => setTitle(event.target.value)}/>
            </div>
            <div className="city-title">
                City
                <input placeholder={city} className="city-input results-input"
                       onChange={event => setCity(event.target.value)}/>
            </div>

            <div className="d-flex justify-content-around align-items-center ">
                <div className="d-flex align-items-center justify-content-around view-container pb-2"
                     style={viewType == "List" ? {borderBottom: "4px solid #F4B2B0"} : {border: "none"}}>
                    <img className="view-icon" src={List}/>
                    <Link to={'/results'}>
                        <button className="btn-view"
                                onClick={() => (viewType == "City" && setViewType("List"))}>List View
                        </button>
                    </Link>
                </div>

                <div className="d-flex align-items-center justify-content-around view-container cursor-pointer pb-2"
                     style={viewType == "City" ? {borderBottom: "4px solid #F4B2B0"} : {border: "none"}}>

                    <img className="view-icon" src={Map}/>
                    <Link to={'/results/map'}>
                        <button className="btn-view" onClick={() => (viewType == "List" && setViewType("City"))}>Map
                            View
                        </button>
                    </Link>
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
