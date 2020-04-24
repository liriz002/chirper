import React from 'react';
import Content from './components/Content/Content';
import Navbar from './components/Navbar/Navbar';
import MainControls from './components/MainControls/MainControls';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainControls />
      <Content />
    </div>
  );
}

export default App;
