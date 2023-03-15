import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Api, Url } from "../../../config/Api";

const ContactsList = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    getContacts();
  }, []);

  const getContacts = async () => {
    const res = await axios.get(Api);
    console.log(res.data.data);
    setContacts(res.data.data);
  };

  const deleteContact = async (contactId) => {
    try {
      await axios.delete(`${Api}/${contactId}`);
      getContacts();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mt-5">
      <Link to="/add" className="button is-success">
        Add New
      </Link>
      <div className="columns is-multiline mt-2">
        {contacts.map((item) => (
          <div className="column is-one-quarter" key={item.id}>
            <div className="card">
              <div className="card-image">
                <figure className="image is-4by3">
                  <img src={`${Url}/${item.image}`} alt="" />
                </figure>
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-content">
                    <p className="title is-4">{item.name}</p>
                  </div>
                </div>
              </div>
              {/* email */}
              <div className="card-content">
                <div className="media">
                  <div className="media-content">
                    <p className="subtitle is-6">{item.email}</p>
                  </div>
                </div>
              </div>
              {/* phone */}
              <div className="card-content">
                <div className="media">
                  <div className="media-content">
                    <p className="subtitle is-6">{item.phone}</p>
                  </div>
                </div>
              </div>

              <footer className="card-footer">
                <Link to={`edit/${item.id}`} className="card-footer-item">
                  Edit
                </Link>
                <Link
                  onClick={() => deleteContact(item.id)}
                  className="card-footer-item"
                >
                  Delete
                </Link>
              </footer>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactsList;
