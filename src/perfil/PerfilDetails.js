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
        </form>
      )}
    </div>
  );
};

export default PerfilDetails;
