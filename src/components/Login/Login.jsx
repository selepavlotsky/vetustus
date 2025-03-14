import { Link } from "react-router";
import { useForm } from "react-hook-form";
import "./Login.scss";
import { useState } from "react";
import peticionLoginUsuario from "../../API/login";

const Login = () => {
  const regexPassword =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/;
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [errorLogin, setErrorLogin] = useState(null); // estado para guardar el error si el login sale mal

  const onSubmit = handleSubmit(async (values) => {
    console.log(values);
    // ENVIO DEL FORM AL BACK.
    try {
      const data = await peticionLoginUsuario(values); //llama a la funcion para enviar los datos del login
      console.log(data); // ver respuesta en consola
    } catch (error) {
      setErrorLogin(error.response.data.message); // si hay error en el try mandar mensaje de error
    }
  });

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
            pattern: {
              value: regexPassword,
              message:
                "La password debe contener minusculas, mayusculas, al menos un simbolo especial y un número.",
            },
          })}
        />{" "}
        {errors.password && (
          <p className="form-error">{errors.password.message}</p>
        )}
        {errorLogin && <p className="form-error">{errorLogin}</p>}
        {/*si existe un error en el login, mostramelo.*/}
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
