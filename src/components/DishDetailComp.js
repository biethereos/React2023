import React, { Component } from 'react';
import dateFormat from 'dateformat';

export default class DishDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderDish(dish) {
    if (dish != null) {
      return (
        <div className="col-12 col-md-5 m-2">
          <div className="card">
            <img className="card-img" width="100%" src={dish.image} alt={dish.name} />
            <div className="card-body">
              <h5 className="card-title">{dish.name}</h5>
              <p className="card-text">{dish.description}</p>
            </div>
          </div>
        </div>
      );
    } else {
      return <div></div>;
    }
  }

  renderComments(comments) {
    if (comments != null) {
      return (
        <div className="col-12 col-md-5 m-2">
          <h4>Comments</h4>
          <ul className="list-unstyled">
            {comments.map((comment) => {
              return (
                <li key={comment.id}>
                  <p>{comment.comment}</p>
                  <p>
                    {comment.author}, {dateFormat(comment.date, 'mm/dd/yyyy')}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      );
    } else {
      return <div></div>;
    }
  }

  render() {
    if (this.props.dish != null) {
      return (
        <div className="container">
          <div className="row">
            {this.renderDish(this.props.dish)}
            {this.renderComments(this.props.dish.comments)}
          </div>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}
