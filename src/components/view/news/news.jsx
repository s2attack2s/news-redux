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
  changeTitle = (e) => {
    let tle = e.target.value;
    let PostFilter = this.props.posts;
    let filterTitle, filterDetails;
    filterTitle = PostFilter.filter((it) =>
      new RegExp(tle, "i").test(it.title)
    );
    filterDetails = PostFilter.filter((it) =>
      new RegExp(tle, "i").test(it.details)
    );
    let lengthTitle = filterTitle.length;
    let lengthDetails = filterDetails.length;
    if (lengthTitle > 0 || lengthDetails > 0) {
      let filterFilnal = [...filterTitle, ...filterDetails];
      let posts = [...new Set(filterFilnal)];
      this.setState({
        posts,
      });
    }
  };
  render() {
    return (
      <div className="news container">
        <div className="title-h3">
          <h3>Tin tức</h3>{" "}
          <input
            type="text"
            placeholder="Tìm kiếm...."
            onChange={this.changeTitle}
          />
        </div>

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
