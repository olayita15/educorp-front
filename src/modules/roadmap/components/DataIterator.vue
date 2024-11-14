<template>
  <v-card>
    <v-data-iterator
      :items="games"
      :items-per-page="3"
      :search="search"
    >
      <template v-slot:header>
        <v-toolbar class="px-2">
          <v-text-field
            v-model="search"
            density="comfortable"
            placeholder="Search"
            prepend-inner-icon="mdi-magnify"
            style="max-width: 350px;"
            variant="solo"
            clearable
            hide-details
          ></v-text-field>
        </v-toolbar>
      </template>

      <template v-slot:default="{ items }">
        <v-container class="pa-2" fluid>
          <v-row dense>
            <v-col
              v-for="item in items"
              :key="item.title"
              cols="auto"
              md="4"
            >
              <v-card class="pb-3" border flat>
                <v-img :src="item.raw.img"></v-img>

                <v-list-item :subtitle="item.raw.subtitle" class="mb-2">
                  <template v-slot:title>
                    <strong class="text-h6 mb-2">{{ item.raw.title }}</strong>
                  </template>
                </v-list-item>

                <div class="d-flex justify-space-between px-4">
                  <div class="d-flex align-center text-caption text-medium-emphasis me-1">
                    <v-icon icon="mdi-clock" start></v-icon>

                    <div class="text-truncate">{{ item.raw.duration }}</div>
                  </div>

                  <v-btn
                    class="text-none"
                    size="small"
                    text="Inscribirse"
                    border
                    flat
                  >
                  </v-btn>
                </div>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </template>

      <template v-slot:footer="{ page, pageCount, prevPage, nextPage }">
        <div class="d-flex align-center justify-center pa-4">
          <v-btn
            :disabled="page === 1"
            density="comfortable"
            icon="mdi-arrow-left"
            variant="tonal"
            rounded
            @click="prevPage"
          ></v-btn>

          <div class="mx-2 text-caption">
            Página {{ page }} de {{ pageCount }}
          </div>

          <v-btn
            :disabled="page >= pageCount"
            density="comfortable"
            icon="mdi-arrow-right"
            variant="tonal"
            rounded
            @click="nextPage"
          ></v-btn>
        </div>
      </template>
    </v-data-iterator>
  </v-card>
</template>

<script setup>
import {ref} from 'vue';

const search = ref(null);
const games = ref([
  {
    img: 'https://cdn.vuetifyjs.com/docs/images/graphics/games/4.png',
    title: 'Introducción a HTML y CSS',
    subtitle: 'Aprende a crear páginas web modernas y estilizadas desde cero.',
    advanced: false,
    duration: '3 minutos',
  },
  {
    img: 'https://cdn.vuetifyjs.com/docs/images/graphics/games/2.png',
    title: 'JavaScript Avanzado: Patrones y Buenas Prácticas',
    subtitle: 'Desarrolla aplicaciones web robustas y optimizadas con técnicas avanzadas de JavaScript.',
    advanced: true,
    duration: '5 minutos',
  },
  {
    img: 'https://cdn.vuetifyjs.com/docs/images/graphics/games/3.png',
    title: 'Fundamentos de Python para Desarrollo Web',
    subtitle: 'Domina los conceptos básicos de Python y su uso en aplicaciones web.',
    advanced: false,
    duration: '4 minutos',
  },
  {
    img: 'https://cdn.vuetifyjs.com/docs/images/graphics/games/5.png',
    title: 'Desarrollo de Aplicaciones con React',
    subtitle: 'Construye interfaces interactivas y escalables usando React y JSX.',
    advanced: true,
    duration: '6 minutos',
  },
  {
    img: 'https://cdn.vuetifyjs.com/docs/images/graphics/games/6.png',
    title: 'Crea Juegos con Phaser.js',
    subtitle: 'Aprende los conceptos básicos de desarrollo de juegos y crea tus propios juegos en 2D.',
    advanced: false,
    duration: '3.5 minutos',
  },
  {
    img: 'https://cdn.vuetifyjs.com/docs/images/graphics/games/7.png',
    title: 'Backend con Node.js y Express',
    subtitle: 'Desarrolla APIs RESTful con Node.js y Express para aplicaciones escalables.',
    advanced: true,
    duration: '7 minutos',
  },
  {
    img: 'https://cdn.vuetifyjs.com/docs/images/graphics/games/1.png',
    title: 'Desarrollo de Realidad Virtual con A-Frame',
    subtitle: 'Crea experiencias inmersivas en VR usando A-Frame y WebVR.',
    advanced: true,
    duration: '4 minutos',
  },
  {
    img: 'https://cdn.vuetifyjs.com/docs/images/graphics/games/8.png',
    title: 'Introducción a Bases de Datos con SQL',
    subtitle: 'Comprende los fundamentos de bases de datos relacionales y aprende a usar SQL.',
    advanced: false,
    duration: '3 minutos',
  }
]);
</script>