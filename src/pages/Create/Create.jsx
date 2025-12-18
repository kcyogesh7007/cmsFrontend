import React, { useState } from "react";
import "./Create.css";
import Navbar from "../../components/Navbar/Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    title: "",
    subTitle: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const createBlog = async (e) => {
    e.preventDefault();

    const response = await axios.post("http://localhost:3000/createBlog", data);

    if (response.status == 201) {
      navigate("/");
      alert("Blog added successfully");
    } else {
      alert("Something went wrong");
    }
  };

  return (
    <>
      <Navbar />
      <form onSubmit={createBlog} className="form-container">
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Enter title"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="subtitle">Subtitle</label>
          <input
            type="text"
            id="subtitle"
            name="subTitle"
            placeholder="Enter subtitle"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            rows={5}
            placeholder="Enter description"
            defaultValue={""}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Create;
