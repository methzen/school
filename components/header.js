import React, { Component, Fragment } from "react";
import Dropdown from "./common/dropdown.jsx";
import Coursetitle from './coursename';
import SearchForm from './common/searchForm'
import Navbar from "./common/navbar.jsx";
import DashBoard from "./common/dashBoard.jsx";

class Header extends Component {
  render() {
    return (
      <Fragment>
        <div className="container mt-2">
        
        <div className="row mt-2">
          <div className="col">
            <Dropdown>
                <img src="../public/bg.png" 
                  alt="" 
                  width="30" 
                  height="24" 
                  className="d-inline-block align-text-top" />
                  Coursetitle
              </Dropdown>
          </div>
          <div className="col-5">
            <SearchForm />
          </div>

          <div className="col-4">
              <DashBoard/>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col">
              <Navbar />
           </div>
        </div>
        
      </div>
      </Fragment>
    );
  }
}

export default Header;
