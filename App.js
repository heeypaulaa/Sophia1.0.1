import React, { Component } from 'react';
import Header from './visao/header';
import Main from './main';
import { BrowserRouter } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div>
	      <BrowserRouter>
	        <Header/>
	        <Main/>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
