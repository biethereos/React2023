import React, { Component } from 'react';
import Menu from './MenuComp';
import DishDetail from './DishDetailComp';
import { DISHES } from '../shared/dishes';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      clicked: null,
    };
  }

  handleClick(dishId) {
    this.setState({ clicked: dishId });
  }
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-sm bg-success navbar-dark">
          <a className="navbar-brand" href="/">
            <img src="assets/images/logo.png" alt="logo" width={40} />
          </a>
        </nav>
        <Menu dishes={this.state.dishes} onClick={(dishId) => this.handleClick(dishId)} />
        <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.clicked)[0]} />
      </div>
    );
  }
}
