import React from "react";
import Upvote from "./common/upvote";
import Addcomment from "./common/addcomment";
//src={props.user.imgUrl}
const Comment = (props) => {
  return (
    <div
      className="card-1 text-dark bg-white my-3 border"
      style={{ width: "100%" }}
    >
      <div className="card-body ">
        <div className="d-flex align-items-center">
          <img
            className="rounded-circle me-3"
            src={props.user.imgUrl}
            alt="..."
          />
          <div className="small">
            <div className="fw-bold">
              {props.user.first_name + " " + props.user.last_name}
            </div>
            <div className="text-muted">
              {props.user.Time} &middot; 6 min read
            </div>
          </div>
        </div>

        <h5 className="card-title">{props.user.Title}</h5>
        <p className="card-text">{props.user.comment}</p>
        <a className="card-link">
          <Upvote onClick={() => props.Updatelikebadge(props.user)} />
          <span className="badge bg-light text-dark">{props.user.Likes}</span>
        </a>
        <a className="card-link">
          <Addcomment onClick={() => props.Updatecommentbadge(props.user)} />
          <span className="badge bg-light text-dark">{props.user.Reply}</span>
        </a>
      </div>
    </div>
  );
};

export default Comment;
