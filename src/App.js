import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.scss';
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import Contact from './Components/Pages/Contact'
import NotFound from './Components/Pages/404';
import MapResults from "./Components/Pages/MapResults";
import ResultsPage from "./Components/Pages/ResultsPage";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import React from "react";
import ChatApp from "./chat";

function App() {
    return (
        <Router>
            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <ChatApp/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/about" component={About}/>
                <Route exact path='/contact' component={Contact}/>
                <Route exact path='/results/map' component={MapResults}/>
                <Route exact path="/results" component={ResultsPage} render={props => <ResultsPage {...props} />}/>
                <Route component={NotFound}/>
            </Switch>
        </Router>
    );
}

export default App;
