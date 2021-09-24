import React from 'react';
// import {BrowserRouter, Switch, Route, NavLink} from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
    </div>
  );
};

export default App;