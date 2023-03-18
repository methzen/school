import React, { Component } from "react";
import ListChapters from './listChapters'

class ListModules extends Component {

render() {
    const { items, 
        selectedModule, 
        selectedChapter,
        textProperty, 
        valueProperty, 
        onModuleSelect,
        onChapterSelect } = this.props;
    return (
        <React.Fragment>
          {items.map((item) => (
              <div key={item[valueProperty]}> 
            <button
              onClick={() => onModuleSelect(item)}
              style={{ cursor: "pointer", width: 270 }}
              
              className={
                item === selectedModule ? "btn btn-primary m-1 btn-lg btn-block active " : "btn btn-secondary m-1 btn-lg btn-block"
              }
            >
              {item[textProperty]}
            </button>
            <div className={item === selectedModule ? "collapse show": "collapse"}> 
                <ListChapters  
                            items={item.Chapters}
                            selectedItem={selectedChapter}
                            onItemSelect={onChapterSelect}
                            textProperty="Title"
                            valueProperty="Id" />
            </div>
            
            </div>
          ))}
        </React.Fragment>
      );
}

};

ListModules.defaultProps = {
  textProperty: "name",
  valueProperty: "_id",
};


export default ListModules;
