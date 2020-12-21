import logo from './logo.svg';
import './App.scss';
import {Route, Switch, BrowserRouter} from 'react-router-dom'

// Common Components
import Footer from "./Components/common/Footer";
import Contact from './Components/Pages/Contact';

// Page Components
import Register from "./Components/Pages/Register";
import Login from "./Components/Pages/Login";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Switch>
                    <Route path="/contact" exact component={Contact}/>
                    <Route path="/register" exact component={Register}/>
                    <Route path="/login" exact component={Login}/>
                </Switch>
            </BrowserRouter>
            <Footer/>
        </div>
    );
}

export default App;
