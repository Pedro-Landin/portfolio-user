import { Link } from "react-router-dom";
import { useState } from "react";
import "./login";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");



  return (
    <div>
      <form>
        <label>Email:</label>
        <input
          type="email"
          required
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Password:</label>
        <input
          type="password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
       
       {
        email === "admin@gmail.com" && password === "123"
        ? <div class="submit">
        <Link  to="/">
          <button>Login</button>
        </Link>
       </div>

       : <div><h1>Por favor digitar a senha correta</h1></div>
    
       }
 

    
       

      </form>
      <h3>{email}</h3>
            <h3>{password}</h3>
    </div>
  );
};

export default Login;
