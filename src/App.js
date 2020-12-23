import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';

import Footer from "./Components/common/Footer";
import Contact from './Components/Pages/Contact';
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={About} />
      </Switch>
    </Router>
  );
}

export default App;
