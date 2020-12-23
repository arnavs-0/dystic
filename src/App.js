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
            <Register/>
        </div>
    );
}

export default App;
