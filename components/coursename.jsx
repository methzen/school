import React, { Component } from "react";

class Coursetitle extends Component {
  state = {};
  render() {
    return (
      <a
        href="/"
        className="d-flex align-items-center pb-3 mb-3 link-dark text-decoration-none border-bottom"
      >
        <span className="fs-5 fw-semibold">Course Title</span>
      </a>
    );
  }
}

export default Coursetitle;
