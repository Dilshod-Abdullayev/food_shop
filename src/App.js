import React, { Component } from 'react';
import Main from './components/common/main/Main';
import 'antd/dist/antd.css';
import './App.css'
import { Routes } from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <div className='container'>
       <Main/>

      </div>
    );
  }
}

export default App;