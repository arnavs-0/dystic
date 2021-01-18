import React from 'react';
import '../../Styles/Pages/Home/Results.scss'
import List from '../../images/list.svg'
import Map from '../../images/pin.svg'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'

function Results(props) {
    return (
        <div className = "contain-filter">
           <div className = "job-title">
               Jobs Title
               <input placeholder="eg. Artist" class="job-input" ></input>
           </div>
         <div className = "city-title">
               City 
               <input placeholder="eg. Detroit" class="city-input" ></input>
         </div>
          <div className = "list-title">
        <img class="list-img" src={List}></img>List View
      
         </div>

         
           <div className = "map-title">
        <img class="map-img" src={Map}></img>Map View
         </div>
                 <div class="drop-down">
             <DropdownButton id="dropdown-basic-button" title="Job Type">
  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
  <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
</DropdownButton>
         </div>
            <div class="drop-down">
             <DropdownButton id="dropdown-basic-button" title="Date Posted">
  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
  <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
</DropdownButton>
         </div>
            <div class="drop-down">
             <DropdownButton id="dropdown-basic-button" title="Salary">
  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
  <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
</DropdownButton>
         </div>
  
  <button className="resetbtn">Reset Search</button>
        </div>



        
    );
}

export default Results;