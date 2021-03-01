import logo from './logo.svg';
import './App.scss';

// Common Components
import Footer from "./Components/common/Footer";
import Contact from './Components/Pages/Contact';
import Search from './Components/other/home/Search';
import Results from "./Components/Pages/Results";

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import JobCardUnexpand from "./Components/common/JobCardUnexpand";

function App() {
  return (
    <div className="App">
        <JobCardUnexpand/>
    </div>
  );
}

export default App;
