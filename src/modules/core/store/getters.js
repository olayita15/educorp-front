export default {
  // Getter para obtener el nombre completo del usuario
  fullName: (state) => {
    if (state.user) {
      return `${state.user.firstName} ${state.user.lastName}`;
    }
    return '';
  },

  // Getter para verificar si la información del usuario ha sido cargada
  isUserLoaded: (state) => !!state.user,

  // Getter para comprobar si los detalles del perfil están cargados
  hasProfileDetail: (state) => !!state.userProfileDetail,

  // Getter para verificar si hay algún error en las peticiones
  hasError: (state) => !!state.error,

  // Getter para el estado de carga
  loadingStatus: (state) => state.isLoading,
};