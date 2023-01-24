import React, { Component } from 'react';
import './App.css';
import Menu from './components/MenuComp';
import { DISHES } from './shared/dishes';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES,
    };
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-sm bg-primary navbar-light">
          <a className="navbar-brand" href="/">
            <img src="assets/images/logo.png" alt="Logo" width={40} />
          </a>
        </nav>
        <Menu dishes={this.state.dishes} />
      </div>
    );
  }
}

export default App;
