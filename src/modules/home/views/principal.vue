<template>
  <v-container>
    <v-row no-gutters>
      <v-col>
        <v-sheet class="pa-2 ma-2"   
        :elevation="1"
        border
        rounded>
          <v-card flat>
            <v-img
              height="200px"
              src="https://educacionuruguay.net/wp-content/uploads/nino-plataformas-educativas-programacion.webp"
              cover
            ></v-img>
            <v-card-title>
              Dashboard
            </v-card-title>

            <v-card-subtitle>
              ¡Bienvenido a tu dashboard!
            </v-card-subtitle>

            <v-card-text>
              Acá encontrarás las herramientas que necesitas para gestionar y personalizar tu experiencia.
            </v-card-text>
          </v-card>
        </v-sheet>
      </v-col>
    </v-row>

    <v-row no-gutters justify="start" align="center">
      <v-col>
        <v-sheet class="ma-2" border rounded :elevation="1">
          <v-card flat class="pa-5">
            <v-row justify="center" align="center">
              <v-card-title>
                3,475
              </v-card-title>
              <v-card-subtitle>
                Usuarios
              </v-card-subtitle>
            </v-row>
          </v-card>
        </v-sheet>
      </v-col>
      <v-col>
        <v-sheet class="ma-2" border rounded :elevation="1">
          <v-card flat class="pa-5">
            <v-row justify="center" align="center">
              <v-card-title>
              6,200
              </v-card-title>
              <v-card-subtitle>
                Cursos asignados
              </v-card-subtitle>
            </v-row>
          </v-card>
        </v-sheet>
      </v-col>
    </v-row>
    <v-row no-gutters class="mt-2">
      <v-col>
        <v-row justify="center" align="center">
          <v-sheet class="ma-2" border rounded :elevation="1">
            <v-card flat class="pa-2">
              <div class="d-flex flex-column justify-center align-center">
                <v-card-title>
                  <span>5,600</span>
                </v-card-title>
                <v-card-subtitle>
                  Cursos completados
                </v-card-subtitle>
              </div>
            </v-card>
          </v-sheet>
        </v-row>
      </v-col>
    </v-row>
    <v-row no-gutters class="mt-2">
      <v-col>
        <v-sheet class="py-2 ma-2 px-5">
          <v-card flat class="pa-2">
              <div class="d-flex flex-column justify-star align-start">
                <v-card-title>
                  Leaderboard
                </v-card-title>
                <hr class="mb-4 w-100" color="blue" inset style="z-index: 10;"/>
                <v-data-iterator :items="items" :page="page">
                  <template v-slot:default="{ items }">
                    <template v-for="(item, i) in items" :key="i">
                        <v-card rounded class="w-100">
                          <v-card-text>
                            <v-row justify="start" align="center" no-gutters>
                              <v-col cols="4">
                                <v-img
                                height="50px"
                                width="60px"
                                :src="item.raw.image"
                                cover
                                rounded="circle"/>
                              </v-col>
                              <v-col cols="8">
                                <h4 class="text-no-wrap mr-5">
                                  {{ item.raw.title }}
                                </h4>
                                <span class="number">
                                  Puntaje: {{ item.raw?.count }}
                                </span>
                              </v-col>
                            </v-row>
                          </v-card-text>
                        </v-card>
                      <br>
                    </template>
                  </template>
                </v-data-iterator>
              </div>
            </v-card>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from 'vue'

const page = ref(1)
const items = ref([
  {
    title: 'Marina Golondrina',
    count: 200,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbCnMTv0hYJofIGWTRMryz537avNQEcQ46tw&s'
  },
  {
    title: 'Jaime Lopera',
    count: 190,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7AR5iFpr7tkS-WPgmKJ-sh9T110WhV5k4Kg&s'
  },
  {
    title: 'Betty',
    count: 180,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVvKTXeE1N1YrZlTaXVzfRjhrsXVbwyABtpg&s'
  }
]);
</script>

<style lang="scss" scoped>
@property --num {
  syntax: "<integer>";
  initial-value: 0;
  inherits: false;
}

.number {
  animation: counter 5s linear ease-in-out forwards;
  counter-reset: num var(--num);
  font: 800 10px system-ui;
}
.number::after {
  content: counter(num);
}

@keyframes counter {
  from {
    --num: 0;
  }
  to {
    --num: 100;
  }
}
</style>