<script setup lang="ts">
import SideDocsBar from '../components/SideDocsBar.vue'
import DocsContent from '../components/DocsContent.vue'
</script>

<template>
    <div class="grid">
        <SideDocsBar />
        <DocsContent />
    </div>
</template>

<style scoped>
.grid {
    display: grid;
    grid-template-columns: 250px 1fr;
}
</style>