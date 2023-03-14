// statefull component atau Class Component
// rcc
import React, { Component } from "react";

export default class StatefulComp extends Component {
  render() {
    return <div>Job saya : {this.props.job}</div>;
  }
}
