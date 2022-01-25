import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import Contact from "../contact/contact";
import News from "../news/news";
class Home extends Component {
  render() {
    return (
      <>
        <News />
        <Contact />
      </>
    );
  }
}
export default Home;
