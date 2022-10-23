import React from 'react';
import './App.css';
import { About } from './components/About';
import { Menu } from './components/Menu';

function App() {
  return (
    <div className="App">
      <Menu/>
      <About/>
    </div>
  );
}

export default App;
