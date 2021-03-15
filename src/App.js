import logo from './logo.svg';
import './App.scss';


// Common Components
import Footer from "./Components/common/Footer";
import Contact from './Components/Pages/Contact';
import Search from './Components/other/home/Search';
import Results from "./Components/Pages/Results";

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import JobCardUnexpand from "./Components/common/JobCardUnexpand";

const jobSummary = "Busy production company is seeking a Motion Graphics/Animator. As part of our creative team you’ll create the amazing images that help visually tell our stories. You'll also be shaping those stories through editing. You’ll be at the forefront of our continued expansion into new types of brand storytelling, including interactive, virtual reality and immersive multimedia experiences."
const jobType = ["Visual Arts", "Part-Time"]

function App() {
  return (
    <div className="App">
      <Results></Results>
        <JobCardUnexpand jobTitle="Visual Artist" starCount="4" company={"University of Michigan"} jobLocation={"Dearborn, MI, USA"} jobSummary={jobSummary} jobType={jobType}/>
    </div>
  );
}

export default App;
