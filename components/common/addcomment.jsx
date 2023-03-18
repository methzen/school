import React from "react";

const  Addcomment = (props) => {
    return (
      <i className="fa fa-comment-o" 
               aria-hidden="true"
               onClick={props.onClick}
               style={{ cursor: "pointer" }}/>);
};


export default Addcomment;