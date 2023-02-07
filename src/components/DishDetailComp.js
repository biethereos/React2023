import React from 'react';
import dateFormat from 'dateformat';

function RenderDish({ dish }) {
  if (dish != null) {
    return (
      <div className="col-12 col-md-6 mt-2">
        <div className="card">
          <img className="card-img" src={dish.image} alt={dish.name} width="100%" />
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

function RenderComments({ comments }) {
  if (comments != null) {
    return (
      <div className="col-12 col-md-6 mt-2">
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

const DishDetail = (props) => {
  if (props.dish != null) {
    return (
      <div className="container">
        <div className="row">
          <RenderDish dish={props.dish} />
          <RenderComments comments={props.dish.comments} />
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default DishDetail;
