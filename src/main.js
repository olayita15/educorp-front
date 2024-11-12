// main.js o main.ts
import { createApp } from 'vue'
import App from './App.vue'

import router from "./router";

// Importar Vuetify
import { createVuetify } from 'vuetify'
import 'vuetify/styles' // Importar estilos de Vuetify
import '@mdi/font/css/materialdesignicons.css' // Importar íconos MDI
import { aliases, mdi } from 'vuetify/iconsets/mdi'

import Toast from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

// Importar el tema
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// Crear la instancia de Vuetify
const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
});


const app = createApp(App)

app.use(Toast);
app.use(router);
app.use(vuetify)

app.mount('#app')
