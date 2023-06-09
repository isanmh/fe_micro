import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { Api, Url } from "../../config/Api";
import { Col, Container, Figure, Row } from "react-bootstrap";
import Swal from "sweetalert2";

const Edit = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [image, setImage] = useState("");
  const [preview, setPreview] = useState("");
  const [previewName, setPreviewName] = useState("");
  const [errors, setErrors] = useState([]);

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getContact();
  }, []);

  // edit contact
  const getContact = async () => {
    const res = await axios.get(`${Api}/${id}`);
    setName(res.data.data.name);
    setEmail(res.data.data.email);
    setPhone(res.data.data.phone);
    setPreview(`${Url}/${res.data.data.image}`);
    setPreviewName(res.data.data.image);
  };

  const loadImage = (e) => {
    const img = e.target.files[0];
    setImage(img);
    setPreview(URL.createObjectURL(img));
  };

  const updateContact = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", image);
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phone);
    try {
      await axios.put(`${Api}/${id}`, formData, {
        headers: {
          "Content-type": "multipart/form-data",
        },
      });
      // with sweetalert2
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Data berhasil ditambahkan",
        showConfirmButton: false,
        timer: 1500,
      });

      navigate("/contacts-list");
    } catch (error) {
      console.log(error);
      if (error.response.status === 422) {
        console.log(error.response.data.errors);
        setErrors(error.response.data.errors);
      }
    }
  };

  return (
    <Container>
      {/* errors */}
      <h3 className="text-center my-3">Form Add Contacts Members</h3>
      <hr />
      {errors.length > 0 ? (
        <div className="alert alert-danger">
          {errors.map((error) => (
            <li key={error.msg}>{error.msg}</li>
          ))}
        </div>
      ) : (
        ""
      )}
      <div className="mt-3 d-lg-flex flex-lg-row justify-content-between d-sm-flex flex-sm-column">
        <Col className="col-lg-6">
          <form onSubmit={updateContact}>
            <div className="form-group my-3">
              <label>Full Name</label>
              <input
                type="text"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group my-3">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group my-3">
              <label>Phone</label>
              <input
                type="text"
                className="form-control"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="form-group my-3">
              <label>Image</label>
              <input
                type="file"
                className="form-control"
                onChange={loadImage}
              />
            </div>
            {/* button submit */}
            <button type="submit" className="btn btn-primary">
              Update Contact
            </button>
            {/* back */}
            <button
              type="button"
              className="btn btn-outline-secondary mx-2"
              onClick={() => navigate("/contacts-list")}
            >
              Back
            </button>
          </form>
        </Col>
        {/* image preview */}
        <Col className="col-lg-5">
          {preview ? (
            <Figure>
              <Figure.Image
                // width={171}
                // height={200}
                width="100%"
                style={{ height: 300 }}
                alt={previewName}
                src={preview}
                className="img-thumbnail"
              />
              <Figure.Caption>{previewName}</Figure.Caption>
            </Figure>
          ) : (
            ""
          )}
        </Col>
      </div>
    </Container>
  );
};

export default Edit;
