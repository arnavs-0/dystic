import logo from './logo.svg';
import './App.scss';

// Common Components
import Footer from "./Components/common/Footer";
import Contact from './Components/Pages/Contact';
import Search from './Components/other/home/Search';

function App() {
  return (
    <div className="App">
      <Search />  
      <Footer />
    </div>
  );
}

export default App;
