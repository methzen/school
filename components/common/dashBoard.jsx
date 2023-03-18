import React, { Fragment } from "react";
import Dropdown from "./dropdown";
import { Search, Person, Chat, Notifications } from "@mui/icons-material";


const DashBoard = () => {
  return (
 <Fragment>
        <div className="topbarRight">
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person color="primary" hover="true"/>
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Chat color="primary"/>
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <Notifications color="primary"/>
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <img src="" alt="" className="topbarImg"/>
      </div>
 </Fragment>
  );
};

export default DashBoard;
