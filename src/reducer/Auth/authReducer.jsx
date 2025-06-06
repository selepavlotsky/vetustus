//DEFINIMOS LAS ACCIONES PARA EVITAR ERRORES AL ESCRIBIR

export const ACTIONS = {
  INIT_REQUEST: "INIT_REQUEST", //activa el loading
  LOGIN_USER: "LOGIN_USER", //se guardan datos del usuario, se pasa estaautenticado a true, isLoading a false
  SET_ERRORS: "SET_ERRORS", // si hay un error se muestra el mensaje de error y se resetea
  LOGOUT_USER: "LOGOUT_USER", // vuelve al inicial state, se borran los datos
  RESET_STATE: "RESET_STATE", // resetea el estado al estado inicial
  VERIFY_FAILURE: "VERIFY_FAILURE", //
};

//estado inicial
export const initialState = {
  usuario: null,
  estaAutenticado: false,
  errors: [],
  isLoading: false,
  isLoadingAuth: true,
};

//funcion reductora
export const authReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.INIT_REQUEST: //en el caso de que init-request sea la accion pasame el isLoading a true
      return { ...state, isLoading: true };
    case ACTIONS.LOGIN_USER:
      return {
        ...state,
        usuario: action.payload,
        estaAutenticado: true,
        isLoading: false,
        isLoadingAuth: false,
        errors: [],
      };
    case ACTIONS.SET_ERRORS:
      return {
        ...state,
        errors: action.payload,
        usuario: null,
        estaAutenticado: false,
        isLoading: false,
        isLoadingAuth: false
      };
    case ACTIONS.LOGOUT_USER:
      return { ...initialState };
    case ACTIONS.VERIFY_FAILURE:
      return { ...state, isLoadingAuth: false };
    case ACTIONS.RESET_STATE:
      return { ...initialState };
    default:
      return state;
  }
};
