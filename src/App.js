import React, { Component } from 'react';

import Layout from './components/Layout';
import './cssScssLess/style.css';

class App extends Component{
  render(){
    return (
      <div className="main-container">
        <Layout />
      </div>
    )
  }
}

export default App;
