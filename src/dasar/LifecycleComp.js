// untuk lifecycle component ada 3 yaitu
// 1. Mounting
// 2. Updating
// 3. Unmounting
import React, { Component } from "react";

export default class LifecycleComp extends Component {
  // cosntructor
  constructor(props) {
    console.log("constructor");
    super(props);

    this.state = {
      nilai: 5,
    };
  }

  // componentDidMount
  componentDidMount() {
    console.log("componentDidMount");
    document.title = `Nilai ubah: ${this.state.nilai}`;
  }

  // componentDidUpdate
  componentDidUpdate() {
    console.log("componentDidUpdate");
    document.title = `Nilai ubah: ${this.state.nilai}`;
  }

  // componentWillUnmount
  componentWillUnmount() {
    console.log("componentWillUnmount");
    document.title = `Inixindo`;
    const a = [];
  }

  // custom fungtion update nilai
  onUpdate = () => {
    this.setState({
      nilai: this.state.nilai + 1,
    });
  };

  render() {
    console.log("render");
    return (
      <div>
        <h1>LifecycleComponent</h1>
        <p>Nilai saat ini adalah : {this.state.nilai}</p>
        <button onClick={this.onUpdate}>Update Nilai</button>
        <button onClick={this.componentWillUnmount}>Hilang</button>
      </div>
    );
  }
}
