import React, { Component } from "react";
import "../../css/write-content.css";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
class WriteContentDetail extends Component {
  render() {
    return (
      <>
        <div className="text-field">
          <label htmlFor="title">Tiêu đề</label>
          <input type="text" id="title" placeholder="Nhập tiêu đề" />
        </div>
        <div className="text-field">
          <CKEditor editor={ClassicEditor} id="ckeditor-content" />
        </div>
        <button className="btn btn-danger"> Gửi</button>
      </>
    );
  }
}
export default WriteContentDetail;
