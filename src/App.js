import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import {BrowseRouter, Route, Link} from 'react-router-dom'
import './App.css';

import styled from "styled-components";

const Header=styled.div`
  height:20vh;
  background-color:red;
  `;



class App extends Component {
  render() {
    return (
      <Header/>
    );
  }
}

export default App;
