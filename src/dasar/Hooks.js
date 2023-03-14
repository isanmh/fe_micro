// import React, { Component } from "react";

// export default class Hooks extends Component {
//   // cosntructor
//   constructor(props) {
//     console.log("constructor");
//     super(props);

//     this.state = {
//       nilai: 5,
//     };
//   }

//   // componentDidMount
//   componentDidMount() {
//     console.log("componentDidMount");
//     document.title = `Nilai ubah: ${this.state.nilai}`;
//   }

//   // componentDidUpdate
//   componentDidUpdate() {
//     console.log("componentDidUpdate");
//     document.title = `Nilai ubah: ${this.state.nilai}`;
//   }

//   // componentWillUnmount
//   componentWillUnmount() {
//     console.log("componentWillUnmount");
//     document.title = `Inixindo`;
//     const a = [];
//   }

//   // custom fungtion update nilai
//   onUpdate = () => {
//     this.setState({
//       nilai: this.state.nilai + 1,
//     });
//   };

//   render() {
//     console.log("render");
//     return (
//       <div>
//         <h1>LifecycleComponent</h1>
//         <p>Nilai saat ini adalah : {this.state.nilai}</p>
//         <button onClick={this.onUpdate}>Update Nilai</button>
//       </div>
//     );
//   }
// }

// Contoh React Hooks
import React, { useEffect, useState } from "react";

const Hooks = () => {
  // sama seperti constructor initial state
  const [nilai, setNilai] = useState(0);

  // hooks side effect / Lifecycle
  useEffect(
    () => {
      // didmount & didupdate
      document.title = `Nilai ubah: ${nilai}`;
      console.log("didmount & didupdate");
      // willunmount
      return () => {
        console.log("willunmount");
        document.title = `React Js Inixindo`;
      };
    },
    // willupdate value
    [nilai]
  );

  return (
    <div>
      <h1>Side Effect / Lifecycle Hooks</h1>
      <p>Nilai saat ini adalah : {nilai}</p>
      <button onClick={() => setNilai(nilai + 1)}>Update Nilai</button>
    </div>
  );
};

export default Hooks;
