import './App.css';
import { About } from './components/About';
import { Menu } from './components/Menu';
import { Portfolio } from './components/Portfolio';

function App() {
  return (
    <div className="App">
      <Menu/>
      <About/>
      <Portfolio/>
    </div>
  );
}

export default App;
