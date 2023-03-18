import React, { Component } from "react";
import Buttonmenu from "./buttonmenu";
import Coursetitle from "./coursename";
import Progressbar from "./progressbar";

class Sidebar extends Component {

  handleValidation = (Modules) => {
    if (Modules===[]) return null;
    
    let validated=0;
    let totalChapters=0;
    for( let i=0; i< Modules.length; i++) {
      for (let j=0; j< Modules[i].Chapters.length; j++ ){
        totalChapters+=1;
        if (Modules[i].Chapters[j].IsValidated){
          validated+=1;
        }
      }
    }
    return Math.ceil(validated*100/totalChapters)
  };

  render() {
    const { Modules, onModuleSelect, onChapterSelect } = this.props;
    return (
      <div className="mt-5">
        <div className="p-1">
        <Coursetitle />
        <Progressbar percentage={this.handleValidation(Modules)}/>
            <ul className="list-unstyled">
              {Modules.map((m) => (
                <li key={m._Id} className="mb-1">
                  <Buttonmenu
                    onOpenModule={() => onModuleSelect(m._Id)}
                    onClickChapter={onChapterSelect}
                    module={m}
                  />
                </li>
              ))}
            </ul>

       </div>
      </div>
    );
  }
}

export default Sidebar;
