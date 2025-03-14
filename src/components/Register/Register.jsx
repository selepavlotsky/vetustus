import { useForm } from "react-hook-form";
import "./Register.scss";
import { useState } from "react";
import { peticionRegister } from "../../API/usuarios";


const Register = () => {
  const [errorRegistro, setErrorRegistro] = useState(null); // estado para guardar el mensaje de error si el registro sale mal.

  const regexPassword =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/;
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit(async (values) => {
    console.log(values);

    // ENVIO DEL FORM AL BACK.
    try {
      const data = await peticionRegister(values); // llama a la funcion para enviar los datos del usuario a registrar al back.
      console.log(data); // mostrame la respuesta en la consola.
    } catch (error) {
      setErrorRegistro(error.response.data.message); // si hay algun error en el try, manda mensaje de error.
    }
  });
  return (
    <div className="register-container">
      <div className="wrapper register-details">
        <div className="register-content">
          <h1>
            Regístrate en Vetustus y accede a ofertas especiales en nuestra
            colección de antigüedades.
          </h1>
          <h2>
            Sé el primero en descubrir piezas únicas y recibe descuentos
            exclusivos solo para miembros.
          </h2>
          <p> Descuento de bienvenida en tu primera compra </p>
          <p> Acceso anticipado a nuevas piezas</p>
          <p> Promociones especiales solo para registrados</p>
        </div>

        <form onSubmit={onSubmit}>
          <div className="form-fields">
            <label htmlFor="">Nombre</label>
            <input
              type="text"
              placeholder="Nombre completo"
              {...register("nombre", {
                required: "El campo nombre es obligatorio",
                minLength: {
                  value: 4,
                  message: "El nombre debe contener al menos 4 carácteres",
                },
              })}
            />
            {errors.nombre && (
              <p className="form-error">{errors.nombre.message}</p>
            )}
          </div>{" "}
          <div className="form-fields">
            <label htmlFor="">Email</label>
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
            {errors.email && (
              <p className="form-error">{errors.email.message}</p>
            )}
          </div>
          <div className="form-fields">
            <label htmlFor="">Teléfono</label>
            <input
              type="telefono"
              placeholder="Teléfono"
              {...register("telefono", {
                required: "El campo teléfono es obligatorio",
                minLength: {
                  value: 4,
                  message: "El telefono debe contener al menos 8 carácteres",
                },
                pattern: {
                  value: /^\(?\d{2}\)?[\s\.-]?\d{4}[\s\.-]?\d{4}$/,
                  message: "El teléfono debe tener formato válido.",
                },
              })}
            />
            {errors.telefono && (
              <p className="form-error">{errors.telefono.message}</p>
            )}
          </div>
          <div className="form-fields">
            <label htmlFor="">Dirección</label>
            <input
              type="text"
              placeholder="Dirección"
              {...register("direccion", {
                required: "El campo direccion es obligatorio",
                minLength: {
                  value: 6,
                  message: "El direccion debe contener al menos 6 carácteres",
                },
              })}
            />
            {errors.direccion && (
              <p className="form-error">{errors.direccion.message}</p>
            )}
          </div>
          <div className="form-fields">
            <label htmlFor="">Contraseña</label>
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
            />
            {errors.password && (
              <p className="form-error">{errors.password.message}</p>
            )}
          </div>
          <div className="form-fields">
            <label htmlFor="">Confirmar contraseña</label>
            <input
              type="password"
              placeholder="Confirmar contraseña"
              {...register("passwordConfirm", {
                required: "La confirmación de la password es obligatoria",
                validate: (value) =>
                  value === watch("password") ||
                  "Las contraseñas deben coincidir",
              })}
            />
            {errors.passwordConfirm && (
              <p className="form-error">{errors.passwordConfirm.message}</p>
            )}
          </div>
          {errorRegistro && <p className="form-error">{errorRegistro}</p>}{" "}
          {/*si existe un error en el registro, mostramelo.*/}
          <button type="submit">Registrarme</button>
        </form>
      </div>
    </div>
  );
};

export default Register;

//no funciona el register
