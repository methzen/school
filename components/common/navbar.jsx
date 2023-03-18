import React from "react";


const Navbar = () => {
  return (
    <ul className="nav nav-tabs px-2">
    <li className="nav-item">
      <a
        className="nav-link "
        aria-current="page"
        href="/communaute"
      >
        Community
      </a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="/course">
        Course
      </a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="/calendar">
        Calendar
      </a>
    </li>
    <li className="nav-item">
      <a className="nav-link "> Engagements </a>
    </li>
    <li className="nav-item">
      <a className="nav-link "> Live Q&A calls </a>
    </li>
  </ul>
  );
};

export default Navbar;
