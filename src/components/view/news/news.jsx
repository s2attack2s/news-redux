import React, { Component } from "react";
import { connect } from "react-redux";
import "../../css/news.css";
import ListNews from "./list-new";

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: this.props.posts,
    };
  }

  render() {
    return (
      <div className="news container">
        <h3 className="title-h3">Bài viết mới</h3>
        {this.state.posts.map((val, key) => (
          <ListNews key={key} value={val} id={key} />
        ))}
      </div>
    );
  }
}
let mapStateToprops = (state) => {
  return {
    posts: state.post.posts,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToprops, mapDispatchToProps)(News);
