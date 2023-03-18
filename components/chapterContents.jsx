import React, { Component } from "react";

class ChapterContents extends Component {
  state = {};
  render() {
      const { modules,selectedModules, selectedChapter}=this.props;
    return (
      <React.Fragment>
        <ChapterDescription
          Chapter={
            Count === 0
              ? this.state.Modules[0].Chapters[0]
              : this.state.ActiveChapter
          }
          ChapterValidated={this.handleValidation}
          Validation={this.state.Validation}
        />
        <Comments
          Comments={
            Count === 0
              ? this.state.Modules[0].Chapters[0].comments
              : this.state.ActiveChapter.comments
          }
        />
      </React.Fragment>
    );
  }
}

export default ChapterContents;
