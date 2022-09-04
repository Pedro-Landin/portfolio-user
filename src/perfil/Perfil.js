import PerfilList from "./PerfilList"
import useFetch from "../default/useFetch";

const Perfil = () => {
  const { data: blogs, isPending, error} = useFetch('http://localhost:3000/user')

  //const handleDelete = (id) => {
  //  const newBlogs = blogs.filter((blog) => blog.id !== id);
  //  setBlogs(newBlogs);
  //};

  return (
    <div className="home">
    {error && <div>{ error }</div>}
    { isPending && <div>Loading...</div>}
    { blogs && <PerfilList blogs={blogs} title="Usuario" /> }
    </div>
  );
};

export default Perfil;
