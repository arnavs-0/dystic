import logo from './logo.svg';
import './App.scss';

// Common Components
import Footer from "./Components/common/Footer";
import Contact from './Components/Pages/Contact';

function App() {
  return (
    <div className="App">
      <Contact />    
      <Footer />
    </div>
  );
}

export default App;
