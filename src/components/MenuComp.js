import React, { Component } from 'react';
import DishDetail from './DishDetailComp';

export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: null,
    };
  }

  handleClick(dish) {
    this.setState({ clicked: dish });
  }
  render() {
    const menu = this.props.dishes.map((dish) => {
      return (
        <div className="col-12 col-md-5 m-2" key={dish.id}>
          <div className="card" onClick={() => this.handleClick(dish)}>
            <img className="card-img" width="100%" src={dish.image} alt={dish.name} />
            <div className="card-body">
              <h5 className="card-title">{dish.name}</h5>
              <p className="card-text">{dish.description}</p>
            </div>
          </div>
        </div>
      );
    });
    return (
      <div className="container">
        <div className="row">{menu}</div>
        <div className="row">
          <DishDetail dish={this.state.clicked} />
        </div>
      </div>
    );
  }
}
