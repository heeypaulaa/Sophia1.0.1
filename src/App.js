import React, { Component } from 'react';
import Header from './components/header';
import Main from './main';
import axios from 'axios';


class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Main/>
      </div>
    );
  }
}

export default App;
