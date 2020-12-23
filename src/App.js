import logo from './logo.svg';
import './App.scss';

// Common Components
import Footer from "./Components/common/Footer";
import Contact from './Components/Pages/Contact';
import About from './Components/Pages/About';

function App() {
  return (
    <div className="App">
      <About/>    
      <Footer />
    </div>
  );
}

export default App;
