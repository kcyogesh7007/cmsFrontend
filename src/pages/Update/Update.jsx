import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const Update = () => {
  const [blog, setBlog] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  const fetchBlog = async () => {
    const response = await axios.get("http://localhost:3000/blogs/" + id);
    setBlog(response.data.data);
  };

  const handleUpdate = (e) => {
    const { name, value } = e.target;
    setBlog({
      ...blog,
      [name]: value,
    });
  };
  useEffect(() => {
    fetchBlog();
  }, []);

  const updateBlog = async (e) => {
    e.preventDefault();
    const response = await axios.patch(
      "http://localhost:3000/blogs/" + id,
      blog
    );
    if (response.status == 200) {
      navigate("/");
    }
  };
  return (
    <>
      <Navbar />
      <div>
        <form onSubmit={updateBlog} className="form-container">
          <div>
            <h2>Update blog</h2>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Enter title"
              value={blog.title}
              onChange={handleUpdate}
            />
          </div>
          <div>
            <label htmlFor="subtitle">Subtitle</label>
            <input
              type="text"
              id="subtitle"
              name="subTitle"
              placeholder="Enter subtitle"
              value={blog.subTitle}
              onChange={handleUpdate}
            />
          </div>
          <div>
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              rows={5}
              placeholder="Enter description"
              value={blog.description}
              onChange={handleUpdate}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default Update;
