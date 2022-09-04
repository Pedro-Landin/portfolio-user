import BlogList from "../blog/BlogList";
import useFetch from "../default/useFetch";


const Home = () => {
  const { data: blogs, isPending, error} = useFetch('http://localhost:3000/categories')

  return (
    <div className="home">
    
   
    {error && <div>{ error }</div>}
    { isPending && <div>Loading...</div>}
    { blogs && <BlogList blogs={blogs} title="All Projects!" /> }
    </div>
  );
};

export default Home;
