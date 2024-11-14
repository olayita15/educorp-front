<template>
  <v-sheet class="py-2 ma-2 px-5">
    <v-card flat class="pa-2">
      <div class="d-flex flex-column justify-start align-start">
        <v-card-title>Leaderboard</v-card-title>
        <hr class="mb-4 w-100" color="blue" inset style="z-index: 10;" />
        <v-data-iterator :items="items" :page="page">
          <template v-slot:default="{ items }">
            <template v-for="(item, i) in items" :key="i">
              <v-card rounded class="w-100">
                <v-card-text>
                  <v-row justify="start" align="center" no-gutters>
                    <v-col cols="4">
                      <v-img height="50px" width="60px" :src="item.raw.image" cover rounded="circle" />
                    </v-col>
                    <v-col cols="8">
                      <h4 class="text-no-wrap mr-5">{{ item.raw.title }}</h4>
                      <span class="number">Puntaje: {{ item.raw.count }}</span>
                    </v-col>
                  </v-row>
                </v-card-text>
              </v-card>
              <br />
            </template>
          </template>
        </v-data-iterator>
      </div>
    </v-card>
  </v-sheet>
</template>

<script setup>
import { ref } from 'vue';

const page = ref(1);
const items = ref([
  {
    title: 'Marina Golondrina',
    count: 200,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbCnMTv0hYJofIGWTRMryz537avNQEcQ46tw&s',
  },
  {
    title: 'Jaime Lopera',
    count: 190,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7AR5iFpr7tkS-WPgmKJ-sh9T110WhV5k4Kg&s',
  },
  {
    title: 'Betty',
    count: 180,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVvKTXeE1N1YrZlTaXVzfRjhrsXVbwyABtpg&s',
  },
]);
</script>
