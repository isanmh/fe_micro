import React, { Component } from "react";

class DinamicComp extends Component {
  // contructor : function yang pertama kali dijalankan ketika sebuah class di instansiasi
  // rconst
  a = {
    nama: "Ihsan",
  };

  constructor(props) {
    super(props);

    this.state = {
      judul: "Training React JS",
      date: Date(),
    };
  }

  // buat function untuk mengubah state menggunakan handle event
  handleSubmit = () => {
    this.setState({
      judul: "React Js berasal dari Facebook",
    });
  };

  render() {
    return (
      <div>
        <p>Ini adalah Component dinamic</p>
        <p>{this.state.judul}</p>
        <p>{this.state.date}</p>
        <button onClick={this.handleSubmit}>Ubah Kata</button>
      </div>
    );
  }
}
export default DinamicComp;
