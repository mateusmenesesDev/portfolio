import './App.css';
import { About } from './components/About';
import { Carrer } from './components/Carrer';
import { Footer } from './components/Footer';
import { Menu } from './components/Menu';
import { Portfolio } from './components/Portfolio';
import { Techs } from './components/Techs';

function App() {
  return (
    <div className="App">
      <Menu/>
      <About/>
      <Portfolio/>
      <Techs/>
      <Carrer/>
      <Footer/>
    </div>
  );
}

export default App;
