<script setup lang="ts">
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
import ContactPanel from '../components/ContactPanel.vue'
import TitleElement from '../components/TitleElement.vue'
</script>

<template>
  <div>
    <TitleElement title="CastMate - Contact" />
    <main>
      <Navbar />
      <ContactPanel />
      <Footer />
    </main>
  </div>
</template>

<style></style>
