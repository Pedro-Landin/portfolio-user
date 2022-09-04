import { useParams, useHistory} from "react-router-dom";
import useFetch from "../default/useFetch";
import { useState } from "react";

const PerfilDetails = () => {
  const { id } = useParams()
  const {data: blog, error, isPending } = useFetch('http://localhost:3000/user/' + id);
  const history = useHistory();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");


  const handleClcikUp = (e) => {
    e.preventDefault();
    const blog =  { name, description };
    console.log(blog)
    fetch('http://localhost:3000/user/' + id, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(blog),

    }).then(() => {
      history.push('/');
    })
  }



  return (
    <div className="blog-details">
     {isPending && <div>Loading...</div> }
     {error && <div>{ error }</div> }
     {blog && (
       <form>
         <label>titulo</label>
         <input
          type="text"
          required
         /*  value={blog.name} */
          onChange={(e) => setName(e.target.value)} 
        />
         <label>descrição</label>
         <input
          type="text"
          required
          /* value={blog.description} */
          onChange={(e) => setDescription(e.target.value)} 
        />
        <div>{ blog.created_at }</div>
   
         <button onClick={handleClcikUp}>update</button>
       </form>
     )}
    </div>
  );
}

export default PerfilDetails;