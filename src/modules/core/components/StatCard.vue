<template>
  <v-sheet class="ma-2" border rounded :elevation="1">
    <v-card flat class="pa-5">
      <v-row justify="center" align="center">
        <v-card-title>{{ statValue }}</v-card-title>
        <v-card-subtitle>{{ statLabel }}</v-card-subtitle>
      </v-row>
    </v-card>
  </v-sheet>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  statValue: {
    type: Number,
    required: true,
  },
  statLabel: {
    type: String,
    required: true,
  },
});
</script>
