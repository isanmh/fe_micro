import axios from "axios";
import React, { useEffect, useState } from "react";

const Contacts = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/contacts").then((res) => {
      console.log(res.data.data);
      setData(res.data.data);
    });
  }, []);

  return (
    <>
      <h1>Contacts</h1>
      {/* looping data */}
      {data.map((item) => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <p>{item.email}</p>
        </div>
      ))}
    </>
  );
};

export default Contacts;
