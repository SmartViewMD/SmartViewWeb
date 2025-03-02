import React, { Component } from "react";
var __html = require('./resources.html');
var template = { __html: __html };

class html extends Component {
  render() {
    return (
      <div className="screen-share">
        <span dangerouslySetInnerHTML={template} />
      </div>
    );
  }
}
export default html;