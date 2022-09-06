import { useParams, useHistory } from "react-router-dom";
import useFetch from "../default/useFetch";
import { useState } from "react";

const PerfilDetails = () => {
  const { id } = useParams();
  const {
    data: blog,
    error,
    isPending,
  } = useFetch("http://localhost:3000/user/" + id);

  const history = useHistory();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [interests, setInterests] = useState("");

  const handleClcikUp = (e) => {
    e.preventDefault();
    const blog = { name, description, interests };
    console.log(blog);
    fetch("http://localhost:3000/user/" + id, {
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
            <strong>Interesses:</strong>
            <h2>{blog.interests}</h2>
            <strong>Data de Criação:</strong>
            <h3>{blog.created_at}</h3>
          </div>

          <div className="container-cad">
            <label>nome</label>
            <input
              type="text"
              required
              /*  value={blog.name} */
              onChange={(e) => setName(e.target.value)}
            />

            <label>apresentação</label>
            <textarea
              required
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>

            <label>interesses</label>
            <textarea
              required
              value={interests}
              onChange={(e) => setInterests(e.target.value)}
            ></textarea>

            <div className="buttons-update">
              <button onClick={handleClcikUp}>update</button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};

export default PerfilDetails;
