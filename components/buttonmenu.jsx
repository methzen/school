import React, { Component } from "react";
import Check from "./common/Checked";

class Buttonmenu extends Component {
  ButtonClass = (active) => {
    let classe = "nav-link text-dark rounded-start rounded-pill tictoc position-relative";
    if (active) {
      classe += " bg-warning fw-bold bg-opacity-50";
    }
    return classe;
  };
  render() {
    const module = this.props.module;
    const { _Id, name, clicked, Chapters } = module;
    const show = clicked ? "show" : "";
    const chevron= clicked ? "fa fa-chevron-down me-2": "fa fa-chevron-right me-2";
    return (
      <div>
      <a
        role="button"
        className="btn btn-light" 
        onClick={() => this.props.onOpenModule(_Id)}
      >
        <i className={ chevron } aria-hidden="true"></i>
        {name}
      </a>
      <div className={"collapse " + show}>
      <ul className="nav nav-pills flex-column ms-3">
        {Chapters.map((Chapter) => (
            <li key={Chapter.Id} className="nav-item">
            <a
              onClick={() => this.props.onClickChapter(module,Chapter)}
              className={this.ButtonClass(Chapter.IsActive)}
              style={{ cursor: "pointer" }}
            >
              {Chapter.Title} <Check bool={Chapter.IsValidated} />

            </a>
            </li>

        ))}</ul>
      </div>
    </div>
    );
  }
}

export default Buttonmenu;
