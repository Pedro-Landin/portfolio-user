import { Link } from "react-router-dom";

const BlogList = ({ blogs, title, handleDelete }) => {
  return (
    <div className="blog-list">
      <h2>{title}</h2>
  
      {console.log(blogs)}
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <h2>{blog.name}</h2>
            <p>{blog.description}</p>
            {/*<button onClick={() => handleDelete(blog.id)}>delete blog</button>*/}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
