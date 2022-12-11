import React from 'react';
import './App.css';
import Body from './components/Body';
import Header from './components/Header';
import Works from './components/Works';

const App = () => {
  return (
    <div className="App">
      <Header/>
      <Body/>
      <Works/>
    </div>
  );
}

export default App;
