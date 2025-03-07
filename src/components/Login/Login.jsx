import { Link } from "react-router";
import "./Login.scss";

const Login = () => {
  return (
    <div className="login-container">
      <h1>Iniciar Sesión</h1>
      <form
        className="wrapper"
        action="
    "
      >
        <input type="text" placeholder="Usuario o email" />
        <input type="text" placeholder="Contraseña" />
        <button>Ingresar</button>
        <Link className="login-actions">Me olvidé la contraseña</Link>
        <p>
          Si todavía no te registraste hace{" "}
          <Link className="login-actions" to="/register">
            click acá
          </Link>{" "}
          para hacerlo.
        </p>
      </form>
    </div>
  );
};

export default Login;
