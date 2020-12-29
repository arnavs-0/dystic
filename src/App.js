import logo from './logo.svg';
import './App.scss';

// Common Components
import Footer from "./Components/common/Footer";
import Contact from './Components/Pages/Contact';
import Search from './Components/other/home/Search';
import Results from "./Components/Pages/Results";

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">

        <Router>
          <Route path="/results" component={Results} />
        </Router>

      
    </div>
  );
}

export default App;
