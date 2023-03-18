import React from "react";

const  Upvote = (props) => {
    return (
      <i className="fa fa-thumbs-o-up" 
      aria-hidden="true"
      style={{ cursor: "pointer" }}
      onClick={props.onClick}/>);
};


export default Upvote;