import React, { Component } from 'react';
import './App.css';
import Menu from './components/MenuComp';

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-sm bg-primary navbar-light">
          <a className="navbar-brand" href="/">
            <img src="https://i.imgur.com/Y3Tr8ZQ.png" alt="Logo" width={40} />
          </a>
        </nav>
        <Menu />
      </div>
    );
  }
}

export default App;
