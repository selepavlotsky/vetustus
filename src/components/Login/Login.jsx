import { Link } from "react-router";
import { useForm } from "react-hook-form";
import "./Login.scss";
import { useUserContext } from "../../context/UserContext";
import { useNavigate } from "react-router";
import { useEffect } from "react";

const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const {
    loginUsuario,
    errors: errorsLogin,
    estaAutenticado,
    usuario,
  } = useUserContext();

  const onSubmit = handleSubmit(async (values) => {
    loginUsuario(values);
  });

  useEffect(() => {
    if (estaAutenticado) {
      // si esta autenticado
      if (usuario?.rol === "admin") {
        //y si es igual a admin
        navigate("/panel"); // llevame al panel
      } else {
        navigate("/"); // si esta autenticado pero no es admin, llevame al home
      }
    }
  }, [estaAutenticado]); // cada vez que estaAutenticado cambia se ejecuta esto

  return (
    <div className="login-container">
      <h1>Iniciar Sesión</h1>
      <form
        onSubmit={onSubmit}
        className="wrapper"
        action="
    "
      >
        <input
          type="email"
          placeholder="Correo electrónico"
          {...register("email", {
            required: "El campo email es obligatorio",
            minLength: {
              value: 4,
              message: "El nombre debe contener al menos 4 carácteres",
            },
            pattern: {
              value: /^[a-z0-9.]{1,64}@[a-z0-9.]{1,64}$/i,
              message: "El email debe tener formato válido.",
            },
          })}
        />
        {errors.email && <p className="form-error">{errors.email.message}</p>}
        <input
          type="password"
          placeholder="Contraseña"
          {...register("password", {
            required: "El campo password es obligatorio",
            minLength: {
              value: 6,
              message: "La password debe contener al menos 6 carácteres",
            },
          })}
        />{" "}
        {errors.password && (
          <p className="form-error">{errors.password.message}</p>
        )}
        {errorsLogin && <p className="form-error">{errorsLogin}</p>}
        {/*si existe un error en el login, mostramelo.*/}
        <button className="login-button">Ingresar</button>
        <Link className="login-actions">Olvidé mi contraseña</Link>
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
