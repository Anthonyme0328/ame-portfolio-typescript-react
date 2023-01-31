import React from 'react';
import './App.css';
import Body from './components/Body';
import Footer from './components/Footer';
import Header from './components/Header';
import Works from './components/Works';

const App = () => {
  return (
    <div className="App" style={{backgroundColor: '#B5CA8D'}}>
      <div style={{height: '10px'}}></div>
      <Header/>
      <Body/>
      <Works/>
      <Footer/>
    </div>
  );
}

export default App;
