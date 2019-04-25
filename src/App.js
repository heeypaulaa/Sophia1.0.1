import React, { Component } from 'react';
import Header from './visao/header';
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
