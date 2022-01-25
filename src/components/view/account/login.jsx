import React, { Component } from "react";
import "../../css/login.css";
class Login extends Component {
  render() {
    return (
      <div className="login container">
        <h3>Đăng nhập</h3>
        <div className="form detail">
          <div className="text-field">
            <label htmlFor="username">Tài khoản</label>
            <input type="text" id="username" placeholder="Nhập họ tên..." />
          </div>
          <div className="text-field">
            <label htmlFor="password">Mật khẩu</label>
            <input type="password" id="password" />
          </div>
          <button className="btn btn-primary">Gửi </button>
        </div>
      </div>
    );
  }
}
export default Login;
