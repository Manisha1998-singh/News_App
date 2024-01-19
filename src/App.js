//import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import Spinner from './Components/Spinner';

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <News/>
        <Spinner/>
      </div>
    )
  }
}

