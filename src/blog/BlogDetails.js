import { useParams, useHistory } from "react-router-dom";
import useFetch from "../default/useFetch";
import { useState } from "react";

const BlogDetails = () => {
  const { id } = useParams();
  const {
    data: blog,
    error,
    isPending,
  } = useFetch("http://localhost:3000/categories/" + id);
  const history = useHistory();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleClcik = () => {
    fetch("http://localhost:3000/categories/" + blog.id, {
      method: "DELETE",
    }).then(() => {
      history.push("/");
    });
  };

  const handleClcikUp = (e) => {
    e.preventDefault();
    const blog = { name, description };
    console.log(blog);
    fetch("http://localhost:3000/categories/" + id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      history.push("/");
    });
  };

  return (
    <div className="create">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <form>
          <div className="container-details-blog">
            <h1>{blog.name}</h1>
            <h2>{blog.description}</h2>
            <strong>Data de Criação:</strong>
            <h3>{blog.created_at}</h3>
          </div>
        </form>
      )}
    </div>
  );
};

export default BlogDetails;
