// Importa todas las funciones necesarias desde 'userService', donde estarán las llamadas a la API para gestionar información de usuario
import * as userService from '../services/user';

export default {
  // Acción para obtener y establecer la información general del usuario en el estado
  setUser() {
    // Llama a la función 'getUser' desde 'userService' para obtener la información del usuario
    userService.getUser()
      .then(result => {
        // Actualiza el estado 'user' con los datos del usuario obtenidos
        this.user = result.data;
      })
      .catch(error => {
        // Si hay un error en la petición, lo lanza para ser gestionado en otro lugar
        throw error;
      });
  },

  // Acción para obtener y establecer los detalles del perfil del usuario
  setUserProfileDetail(userId) {
    // Llama a 'getUserProfileDetail' en 'userService' y pasa el parámetro 'userId'
    // para obtener la información detallada del perfil de un usuario específico
    userService.getUserProfileDetail(userId)
      .then(result => {
        // Al recibir los datos, establece 'userProfileDetail' con la información detallada
        this.userProfileDetail = result.data;
      })
      .catch(error => {
        // Lanza el error si la petición falla, para su manejo
        throw error;
      });
  },
};