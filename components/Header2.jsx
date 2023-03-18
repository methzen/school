import React, { Component } from "react";
import Dropdown from "./common/dropdown.jsx";

class Header2 extends Component {
  render() {
    return (
        <div className="container mt-2">
        <div className="row mt-2">
          <div className="col">
            <Dropdown>Groupe</Dropdown>
          </div>
          <div className="col-5">
            <form className="w-100 m-auto" role="search">
              <input
                type="search"
                className="form-control"
                placeholder="Search..."
                aria-label="Search"
              />
            </form>
          </div>
          <div className="col-4">
            <a
              type="button"
              className="btn btn-light position-relative rounded-circle"
            >
              <i className="fa fa-comment-o" aria-hidden="true"></i>
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary">
                3 <span className="visually-hidden">unread messages</span>
              </span>
            </a>

            <a
              type="button"
              className="btn btn-light position-relative rounded-circle mx-2"
            >
              <i className="fa fa-bell-o " aria-hidden="true"></i>
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary">
                2 <span className="visually-hidden">unread messages</span>
              </span>
            </a>

            <div type="button" className="btn btn-light position-relative ms-1">
              <Dropdown>
                <img
                  src="https://github.com/mdo.png"
                  alt="mdo"
                  width="32"
                  height="32"
                  className="rounded-circle"
                />
              </Dropdown>
              {/*         <span className="position-absolute top-0 start-100 translate-middle badge border border-light rounded-circle bg-danger p-2">
          <span className="visually-hidden">unread messages</span>
          </span> */}
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col">
            <ul className="nav nav-tabs px-2">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/communaute"
                >
                  Communauté
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/course">
                  Course
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/calendar">
                  Calendrier
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link "> Live Q&A calls </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Header2;
