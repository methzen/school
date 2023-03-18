import React, { Component } from 'react';
import Buttonmenu from "./buttonmenu";
import ListModules from './common/listModules';
import { getModules } from "../services/fakeModules";


class SB extends Component {
    state={
        Modules:getModules(),
        selectedModule:"",
        selectedChapter:""
    };

    handleModuleSelect = (item) => {
        this.setState({ selectedModule: item});
      };

      handleChapterSelect=(Chapter)=>{
        console.log(Chapter)
    };


    render() { 
        const {Modules, selectedModule ,selectedChapter}=this.state;
        return (
            <React.Fragment>
            <div className="flex-shrink-0 p-3 bg-white" style={{ width: 280 }}>
            <ListModules
                items={Modules}
                selectedModule={selectedModule}
                selectedChapter={selectedChapter}
                onModuleSelect={this.handleModuleSelect}
                onChapterSelect={this.handleChapterSelect}
                textProperty="name"
                valueProperty="_Id"
              />
            </div>
          </React.Fragment>
        );
    }
}
 
export default SB;