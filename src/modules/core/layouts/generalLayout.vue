<template>
  <div>
    <router-view v-slot="{ Component, route }">
      <transition name="slide-fade">
        <component :is="Component" :key="route.name" />
      </transition>
    </router-view>
  </div>
</template>

<script setup>
</script>