// functional component / Stateless component
// function Hallo() {
//     return <h1>Hallo saya Ihsan</h1>;
//   }
// arrow function /
// const Hai = () => {
//   return <h1>Ini metode arrow function</h1>;
// };

// menggunakan snippet rafce
import React, { Fragment } from "react";
// const disini hampir sama sperti class di statefull component
const StatelesComp = (props) => {
  return (
    <Fragment>
      <h1>Hallo, nama saya {props.nama}</h1>
    </Fragment>
  );
};

export default StatelesComp;
