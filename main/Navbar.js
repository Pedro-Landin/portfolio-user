import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Menu Portfolio</h1>
      <div className="links">
          <Link to="/">Home</Link>
          <Link to="/create">Novo Projeto</Link>
      {/*     <Link to="/login">Login</Link> */}
      </div>
    </nav>
  );
};

export default Navbar;

