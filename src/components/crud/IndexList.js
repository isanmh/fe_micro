import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Api, Url } from "../../config/Api";
import { Button, Container, Row } from "react-bootstrap";

const IndexList = () => {
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
    <Container>
      <div className="d-flex justify-content-between align-items-center">
        <h1 className="text-center">Contact List</h1>
        <Link
          variant="primary"
          className="btn btn-outline-primary my-3"
          to={"/create"}
        >
          Add Members
        </Link>
      </div>
      <hr />
      <Row>
        {contacts.map((contact) => (
          <div className="col-md-4" key={contact.id}>
            <div className="card mb-4 shadow">
              <div className="card-body">
                {/* gambar */}
                <div className="card-img-top">
                  <img
                    src={`${Url}/${contact.image}`}
                    alt={contact.image}
                    className="img-thumbnail"
                    style={{ height: 200 }}
                    width="100%"
                  />
                </div>
                <h5 className="card-title">{contact.name}</h5>
                <small className="card-text">{contact.email}</small>
                <p className="card-text">{contact.phone}</p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <Link
                      to={`/edit/${contact.id}`}
                      className="btn btn-sm btn-outline-secondary"
                    >
                      Edit
                    </Link>
                    <Button
                      onClick={() => deleteContact(contact.id)}
                      variant="danger"
                      size="sm"
                    >
                      Delete
                    </Button>
                  </div>
                  <small className="text-muted">{contact.id}</small>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Row>
    </Container>
  );
};

export default IndexList;
