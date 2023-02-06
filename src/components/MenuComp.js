import React, { Component } from 'react';

export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const menu = this.props.dishes.map((dish) => {
      return (
        <div className="col-12 col-md-5 m-2" key={dish.id}>
          <div className="card" onClick={() => this.props.onClick(dish.id)}>
            <img className="card-img" width="100%" src={dish.image} alt={dish.name} />
            <div className="card-img-overlay">
              <h5 className="card-title">{dish.name}</h5>
            </div>
          </div>
        </div>
      );
    });
    return (
      <div className="container">
        <div className="row">{menu}</div>
      </div>
    );
  }
}
