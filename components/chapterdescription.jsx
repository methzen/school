import React, { Fragment } from "react";
import Video from "./video";
import Comments from "./comments";
import _ from "lodash";

const ChapterDescription = (props) => {
  return (
<Fragment>
    <Video />
    <div
      className="card text-dark bg-white border mt-2"
    >
      <div className="card-header mt-4 bg-white">
        <div className="row">
          <div className="col-9">{props.Chapter.Title}</div>
          <div className="col d-grid mx-auto">
            <button
              className={
                props.Chapter.IsValidated
                  ? "btn btn-success"
                  : "btn btn-secondary"
              }
              type="button"
              onClick={() => props.ChapterValidated(props.Chapter)}
            >
              {props.Chapter.IsValidated ? "Done" : "Mark as Done"}
            </button>
          </div>
        </div>
      </div>
      <div className="card-body text-dark">
        <h5 className="card-title">Description</h5>
        <p className="card-text">{props.Chapter.Description}</p>
        <ul className="list-styled">
          <li>This is a list.</li>
          <li>It appears completely unstyled.</li>
          <li>Structurally, it's still a list.</li>
          <li>However, this style only applies to immediate child elements.</li>
          <li>This may still come in handy in some situations.</li>
        </ul>
      </div> 
      <div > 
        <span > There are 25 student's posts about this chapter </span>
      <form className="d-flex">
        <input
          className="form-control my-3 shadow m-2"
          type="search"
          placeholder="Write something"
          aria-label="Search"
        />
      </form>
      </div> 
    <Comments Chapter={props.Chapter} />

    </div>
    </Fragment>
  );
};

export default ChapterDescription;
