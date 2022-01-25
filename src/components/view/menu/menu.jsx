import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import "../../css/menu.css";
class Menu extends Component {
  render() {
    return (
      <div className="menu container">
        <ul>
          <li>
            <NavLink to="/" className="">
              <img
                src="https://docs.google.com/uc?id=1LWe6eb50m67fwYtVbqAuUKckAmUdSi8w"
                alt="logo"
              />
            </NavLink>
          </li>
          <li>
            <NavLink to="/" className="list-group-item">
              Trang chủ
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="list-group-item">
              Giới thiệu
            </NavLink>
          </li>
          <li>
            <NavLink to="/write-content" className="list-group-item">
              Viết bài
            </NavLink>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/login">
              <button className="btn btn-info">Đăng nhập</button>
            </Link>
          </li>
          <li>
            <Link to="/register">
              <button className="btn btn-info">Đăng ký</button>
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}
export default Menu;
