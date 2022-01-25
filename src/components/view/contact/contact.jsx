import React, { Component } from "react";
import "../../css/contact.css";
class Contact extends Component {
  render() {
    return (
      <div className="contact container">
        <div className="image detail">
          <img
            src="https://vidiashop.net/wp-content/uploads/2017/10/giphy-13.gif"
            alt="logo"
          />
        </div>

        <div className="form detail">
          <div className="text-field">
            <label htmlFor="username3">Họ tên</label>
            <input type="text" id="username3" placeholder="Nhập họ tên..." />
          </div>

          <div className="text-field">
            <label htmlFor="username3">Email</label>
            <input type="email" id="username3" placeholder="Nhập email..." />
          </div>

          <div className="text-field">
            <label htmlFor="username3">Nội dung</label>
            <textarea
              type="text"
              id="username3"
              placeholder="Nhập nội dung..."
              rows={6}
            />
          </div>
          <button className="btn btn-primary">Gửi </button>
        </div>
      </div>
    );
  }
}
export default Contact;
