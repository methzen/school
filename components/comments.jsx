import React, { Component } from "react";
import Comment from "./comment";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate"


class Comments extends Component {
  state = {
    pageSize: 10,
    currentPage: 1,
  };

  Updatecommentbadge = (user) => {
    const Comments = [...this.props.Chapter.comments];
    const index = Comments.indexOf(user);
    Comments[index].Reply += 1;
    this.setState({ Comments });
  };
  Updatelikebadge = (user) => {
    const Comments = [...this.props.Chapter.comments];
    const index = Comments.indexOf(user);
    Comments[index].Likes += 1;
    this.setState({ Comments });
  };
  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };
  render() {
    const { length: count } = this.props.Chapter.comments;
    const { pageSize, currentPage} = this.state;
    const Comments=paginate(this.props.Chapter.comments,currentPage, pageSize)
    
    return (
      <div className="m-3">
          {Comments.map((user) => (
            <Comment
              key={user.id}
              user={user}
              Updatelikebadge={() => this.Updatelikebadge(user)}
              Updatecommentbadge={() => this.Updatecommentbadge(user)}
            />
          ))}
        <Pagination
          itemsCount={count}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={this.handlePageChange}
        />
      </div>
    );
  }
}

export default Comments;

