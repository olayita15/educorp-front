<template>
  <div>
    <v-card class="mx-auto" max-width="800" variant="outlined">
      <v-img
        src="https://owius.com/wp-content/uploads/2019/05/Online-Courts-Hackathon-Team-777x440.jpg"
        alt="Hackatón 2024"
        class="card-image"
      />
      <v-card-title class="title">
        Hackatón 2024
      </v-card-title>
      <v-card-subtitle class="subtitle">
        ¡Únete a la innovación y crea el futuro!
      </v-card-subtitle>
      <div class="countdown">
        <p>{{ timeRemaining }}</p>
      </div>
      <v-card-actions>
        <v-row justify="center">
          <v-btn class="custom-button" @click="prueba">Inscríbete</v-btn>
        </v-row>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { toast } from 'vue3-toastify';

const endTime = new Date('2024-12-31T23:59:59');
const timeRemaining = ref('');

const updateCountdown = () => {
  const now = new Date();
  const totalSeconds = Math.floor((endTime - now) / 1000);
  
  if (totalSeconds <= 0) {
    timeRemaining.value = '¡La hackatón ha comenzado!';
    clearInterval(countdownInterval);
    return;
  }

  const days = Math.floor(totalSeconds / (3600 * 24));
  const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  timeRemaining.value = `${days}d ${hours}h ${minutes}m ${seconds}s`;
};

let countdownInterval;

const prueba = () => {
  toast.error('No has completado los puntos necesarios para inscríbirte.');
};

onMounted(() => {
  updateCountdown(); // Llama a la función inmediatamente
  countdownInterval = setInterval(updateCountdown, 1000); // Actualiza el contador cada segundo
});
</script>

<style lang="scss" scoped>
.title {
  font-size: 2.5em; /* Aumentar tamaño del título */
  text-align: center;
  color: #2c3e50; /* Color menos chillón para el título */
  margin: 16px 0;
  font-weight: bold; /* Hacer el texto más destacado */
}

.subtitle {
  font-size: 1.2em;
  text-align: center;
  color: #34495e; /* Color menos chillón para el subtítulo */
  margin: 16px 0;
  text-wrap: wrap;
}

.countdown {
  text-align: center;
  font-size: 1.5em; /* Tamaño del texto del contador */
  color: #7f8c8d; /* Color para el contador */
  margin: 16px 0;
}

.custom-button {
  background-color: #2980b9; /* Color de fondo del botón más suave */
  color: white; /* Color del texto del botón */
  border-radius: 8px; /* Bordes redondeados */
  padding: 10px 20px; /* Espaciado interno */
  transition: background-color 0.3s; /* Transición suave al cambiar de color */

  &:hover {
    background-color: #1a5276; /* Color al pasar el ratón */
  }
}
</style>
