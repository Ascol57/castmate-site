<script setup lang="ts">
</script>

<template>
  <router-view v-slot="{ Component, route }">
    <transition name="fade" mode="out-in">
      <component :key="$route.path" :is="Component" />
    </transition>
  </router-view>
</template>

<style scoped></style>