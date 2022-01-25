import React, { Component } from "react";
import "../../css/news.css";
import NewsDetail from "./new-detail";
class News extends Component {
  render() {
    return (
      <div className="news container">
        <h3>Tin mới</h3>
        <NewsDetail />
      </div>
    );
  }
}
export default News;
