import React, { Component } from "react";

class Menulist extends Component {
  render() {
    // {Chapter.Title}
    const  { show,chapters} = this.props;
    return (
      <div className={"collapse" + show}>
        <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
          {
            chapters.map((Chapter) => (
              <li key={Chapter.Id}>
                <a
                  onClick={() => this.props.onClick(Chapter)}
                  className="link-dark rounded"
                >
                  {Chapter.Title}
                </a>
              </li>
    ))
          }
        </ul>
      </div>
    );
  }
}

export default Menulist;
