import axios from "./axios";

export const peticionLogin = (user) => axios.post("login", user);

export const peticionRegister = (user) => axios.post("registro", user);

export const peticionVerificarTokenUsuario = () => axios.get("verificar");
