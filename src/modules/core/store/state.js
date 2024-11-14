export default () => ({
  // Información general del usuario (ej. nombre, correo electrónico)
  user: null,

  // Detalles específicos del perfil del usuario (ej. biografía, avatar)
  userProfileDetail: null,

  // Variable para gestionar el estado de carga (útil para mostrar un loader en la interfaz)
  isLoading: false,

  // Variable para manejar posibles errores en las peticiones
  error: null,
});
