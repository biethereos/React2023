import React, { Component } from 'react';

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

  renderDish(dish) {
    console.log(dish);
    if (dish != null) {
      return (
        <div className="card col-12">
          <img className="card-img" width="100%" src={dish.image} alt={dish.name} />
          <div className="card-body">
            <h5 className="card-title"> {dish.name} </h5>
            <p className="card-text"> {dish.description} </p>
          </div>
        </div>
      );
    } else {
      return <div></div>;
    }
  }

  render() {
    const list = this.props.dishes.map((dish) => {
      return (
        <div className="col-12 col-md-5 mt-2" key={dish.id}>
          <div className="card" width="100%" onClick={() => this.handleClick(dish)}>
            <img className="card-img" src={dish.image} alt={dish.name} />
            <div className="card-img-overlay">
              <h5 className="card-title">{dish.name}</h5>
            </div>
          </div>
        </div>
      );
    });
    return (
      <div className="container">
        <div className="row"> {list} </div>
        <div className="row"> {this.renderDish(this.state.clicked)} </div>
      </div>
    );
  }
}
