<script setup lang="ts">
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
import TitleElement from '../components/TitleElement.vue'
</script>

<template>
  <div>
    <TitleElement title="CastMate - 404" />
    <main>
      <Navbar />
      <div class="container">
        <h1>Page not found</h1>
      </div>
      <Footer />
    </main>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
}

h1 {
  font-size: 2rem;
}
</style>