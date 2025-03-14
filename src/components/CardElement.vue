<script setup lang="ts">
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { onMounted } from 'vue'

gsap.registerPlugin(ScrollTrigger)

const props = defineProps<{
    title: string,
    description: string,
    image: string,
    alignement: string,
    id: string
}>()

onMounted(() => {
    gsap.to('.wrapper[data="' + props.id + '"] .card', { opacity: 0, y: 500, duration: 0, ease: 'linear' })
    gsap.to('.wrapper[data="' + props.id + '"] .card', {
        scrollTrigger: {
            trigger: '.wrapper[data="' + props.id + '"]',
            start: 'top 80%',
            end: 'bottom 10%',
            markers: false
        },
        y: 0,
        opacity: 1,
        duration: 1
    })
})
</script>

<template>
    <div class="wrapper" :data="id">
        <div class="card" :class="alignement">
            <div class="image">
                <img :src="image" alt="Card Image">
            </div>
            <div class="card-content">
                <h2>{{ title }}</h2>
                <p>{{ description }}</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.card {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    align-items: center;
    border-radius: 1rem;
    margin: 1rem auto;
    perspective: 1000px;
    transform-style: preserve-3d;
    background-clip: content-box;
    height: 50vh;
    width: 80vw;
    padding: 1rem;
    background: var(--vt-c-black);
}

.card img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 1rem;
}

.card-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

h2 {
    font-size: 1.5rem;
    font-weight: 700;
    margin: 0.5rem 0;
    background: linear-gradient(132deg, #0860ff, #d654ff);
    background-clip: text;
    color: transparent;
}

p {
    font-size: 1rem;
    color: var(--vt-c-white-mute);
    text-align: center;
}

.left .image {
    --z-height: 80px;
    transform: rotateY(-15deg) translateZ(var(--z-height));
    margin: auto;
    width: 80%;
    grid-column: 2/3;
    grid-row: 1;
}

.left .card-content {
    grid-column: 1/2;
    grid-row: 1;
}

.right .image {
    --z-height: 80px;
    transform: rotateY(15deg) translateZ(var(--z-height));
    margin: auto;
    width: 80%;
    grid-column: 1/2;
    grid-row: 1;
}

.right .card-content {
    grid-column: 2/3;
    grid-row: 1;
}

@media (max-width: 1024px) {
    .card {
        grid-template-columns: 1fr;
        height: 70vh;
    }

    .left .image {
        grid-column: 1/2;
        grid-row: 2;
        width: 60%;
        height: auto;
    }

    .left .card-content {
        grid-column: 1/2;
        grid-row: 1;
    }

    .right .image {
        grid-column: 1/2;
        grid-row: 2;
        width: 60%;
        height: auto;
    }

    .right .card-content {
        grid-column: 1/2;
        grid-row: 1;
    }
}

@media (max-width: 768px) {
    .card {
        height: 40vh;
    }

    .left .image {
        width: 80%;
    }

    .right .image {
        width: 80%;
    }
}
</style>