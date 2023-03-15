import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Api } from "../../../config/Api";

const AddContact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [image, setImage] = useState("");
  const [preview, setPreview] = useState("");
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();

  const loadImage = (e) => {
    console.log(e.target.files[0]);
    const img = e.target.files[0];
    setImage(img);
    setPreview(URL.createObjectURL(img));
  };

  const saveContact = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", image);
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phone);
    try {
      await axios.post(Api, formData, {
        headers: {
          "Content-type": "multipart/form-data",
        },
      });
      navigate("/contacts");
    } catch (error) {
      // console.log(error);
      if (error.response.status === 422) {
        console.log(error.response.data.errors);
        setErrors(error.response.data.errors);
      }
    }
  };

  return (
    <div className="columns is-centered mt-5">
      <div className="column is-half">
        {errors.length > 0 ? (
          <div className="notification is-danger">
            <button className="delete"></button>
            {errors.map((error) => (
              <li key={error.msg}>{error.msg}</li>
            ))}
          </div>
        ) : (
          ""
        )}
        <form onSubmit={saveContact}>
          <div className="field">
            <label className="label">Full Name</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Full Name ..."
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input
                type="email"
                className="input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email ..."
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Phone</label>
            <div className="control">
              <input
                type="number"
                className="input"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Phone"
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Image</label>
            <div className="control">
              <div className="file">
                <label className="file-label">
                  <input
                    type="file"
                    className="file-input"
                    onChange={loadImage}
                  />
                  <span className="file-cta">
                    <span className="file-label">Choose a file...</span>
                  </span>
                </label>
              </div>
            </div>
          </div>

          {preview ? (
            <figure className="image is-128x128">
              <img src={preview} alt="" />
            </figure>
          ) : (
            ""
          )}

          <div className="field">
            <div className="control">
              <button type="submit" className="button is-success">
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddContact;
