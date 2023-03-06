import React, { Component } from "react";

class Toggle extends Component {
  change(option) {
    localStorage.setItem("lang", option.target.value);
    window.location.reload();
  }
  render() {
    const lang = localStorage.getItem('lang') || 'en';
    return (
      <div className="col-2">
        <select className="custom-select pull-right" onChange={this.change} value={lang}>
          <option value="en">English</option>
          <option value="Mal">Malayalam</option>
        </select>
      </div>
    );
  }
}

export default Toggle;