import React, { useState } from "react";
import Comments from "../components/comments";
import { getModules } from "../services/fakeModules";
import Header from "../components/header";
import _ from "lodash";
import SideCard from "../components/common/SideCard";

const Communaute = () => {
  const [Modules, setModules]=useState([...getModules()]);
  const [selectedChapter, setSelectedChapter]=useState(Modules[0].Chapters[0]);
  return ( 
    <div >
    <Header />
    <div className="wrapper">
    <div className="container">
    <div className="row">
      <div className="col-lg-8 m-1">
        {_.isEmpty(selectedChapter) ? null : (
          <Comments Chapter={selectedChapter} />
        )}
      </div>
      <div className="col-lg-3 mt-4">
          <SideCard />
      </div>
      </div>
  </div>
    </div>
  </div>
   );
}
 
export default Communaute;
