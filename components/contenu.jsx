import React from "react";
import Comments from "./components/comments";
import ChapterDescription from "./components/chapterdescription";

class Contenu extends Component {
  state = {};
  render() {
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

export default Contenu;
