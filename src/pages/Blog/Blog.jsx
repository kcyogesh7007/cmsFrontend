import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Blog.css";
import Navbar from "../../components/Navbar/Navbar";

const Blog = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({});
  const { id } = useParams();

  const handleDelete = async () => {
    const response = await axios.delete("http://localhost:3000/blogs/" + id);
    if (response.status == 200) {
      navigate("/");
    }
  };

  const fetchBlog = async () => {
    const response = await axios.get("http://localhost:3000/blogs/" + id);
    setData(response.data.data);
  };
  useEffect(() => {
    fetchBlog();
  }, []);

  return (
    <>
      <Navbar />
      <div className="post-container">
        <div className="post-title">{data.title}</div>
        <div className="post-subtitle">{data.subTitle}</div>
        <div className="post-description">{data.description}</div>
        <button onClick={handleDelete} className="delete-btn">
          Delete
        </button>
      </div>
    </>
  );
};

export default Blog;
