import React, { Component } from "react";


class Dropdown extends Component {
    state = {
      isOpen: false
    };

    toggleOpen = () => this.setState({ isOpen: !this.state.isOpen });
  
    render() {
      const { children }=this.props;
      const menuClass = `dropdown-menu${this.state.isOpen ? " show" : ""}`;
      return (
        <div className="dropdown" onClick={this.toggleOpen}>
          <a
            // className=" dropdown-toggle"
            //type="button"
            id="dropdownMenuButton"
            //data-toggle="dropdown"
            aria-haspopup="true"
          >
            {children }
          </a>
          <div className={menuClass} aria-labelledby="dropdownMenuButton">
            <a className="dropdown-item" href="#nogo">
              Item 1
            </a>
            <a className="dropdown-item" href="#nogo">
              Item 2
            </a>
            <a className="dropdown-item" href="#nogo">
              Item 3
            </a>
          </div>
        </div>
      );
    }
  };

export default Dropdown;

