// Importa defineStore desde Pinia, que permite definir una tienda (store) 
// con un identificador único, además de especificar el estado, getters y acciones
import { defineStore } from 'pinia';

// Importa el estado inicial del store desde el archivo 'state.js' 
// que define los datos que manejará esta tienda
import state from './state';

// Importa los getters desde 'getters.js', que son funciones que devuelven 
// datos derivados del estado de la tienda, similar a propiedades computadas
import getters from './getters';

// Importa las acciones desde 'actions.js', que son funciones 
// que permiten modificar el estado de la tienda o realizar operaciones asíncronas
import actions from './actions';

// Define y exporta el store 'useClothesStore' usando defineStore.
// La tienda se identifica como 'clothes' y usa las partes importadas (estado, getters, acciones)
export const useClothesStore = defineStore('clothes', {
  state,      // Inicializa el estado del store con el objeto de estado importado
  getters,    // Define los getters que actúan como propiedades computadas del estado
  actions,    // Define las acciones para manipular el estado y realizar tareas complejas
});
