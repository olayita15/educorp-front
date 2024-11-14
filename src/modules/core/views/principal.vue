<template>
  <v-container>
    <v-row no-gutters>
      <v-col>
        <DashboardWelcome />
      </v-col>
    </v-row>

    <v-row no-gutters justify="start" align="center">
      <v-col>
        <StatCard :statValue="3475" statLabel="Usuarios" />
      </v-col>
      <v-col>
        <StatCard :statValue="6200" statLabel="Cursos asignados" />
      </v-col>
    </v-row>

    <v-row no-gutters class="mt-2">
      <v-col>
        <StatCard :statValue="5600" statLabel="Cursos completados" />
      </v-col>
    </v-row>

    <v-row no-gutters class="mt-2">
      <v-col>
        <Leaderboard />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import DashboardWelcome from '../components/DashboardWelcome.vue';
import StatCard from '../components/StatCard.vue';
import Leaderboard from '../components/Leaderboard.vue';
</script>
