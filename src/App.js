import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';
import Home from './Pages/Home';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}/>
      </Switch>
    </Router>
  );
}

export default App;
