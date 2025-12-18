import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./Home.css";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    const response = await axios.get("http://localhost:3000/blogs");
    setBlogs(response.data.data);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);
  return (
    <div>
      <Navbar />
      <div className="cards-container">
        {blogs.map((blog) => {
          return (
            <div key={blog._id} className="card">
              <div className="card-title">{blog.title}</div>
              <div className="card-subtitle">{blog.subTitle}</div>
              <div className="card-description">{blog.description}</div>
              <Link to={`/blog/${blog._id}`}>See more</Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
