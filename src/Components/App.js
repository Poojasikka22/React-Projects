import React from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Data from './Data';
import Details from './Details';
import Entry from'./Entry';

function App() {
  return (
    <div className = "ui container">
    <Header/>
    <Entry/>
    <Footer/>
    <Data/>
    <Details/>
    </div>
  );
}

export default App;
