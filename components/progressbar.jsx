import React from "react";

const Progressbar = (props) => {

  const { percentage }=props
  const style={
    width: percentage+"%"
  }
  return (
    <div className="progress my-4">
      <div
        className="progress-bar progress-bar-striped bg-success"
        role="progressbar"
        style={style}
        aria-valuenow="100"
        aria-valuemin="0"
        aria-valuemax="100"
      >
        {percentage+"%"}
      </div>
    </div>
  );
};

export default Progressbar;
