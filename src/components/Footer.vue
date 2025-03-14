<script setup lang="ts">
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { onMounted } from 'vue'
import { RouterLink } from 'vue-router'

gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
    gsap.to('footer', { y: 100, opacity: 0, duration: 0, ease: 'linear' })
    gsap.to('footer', {
        scrollTrigger: {
            trigger: 'footer',
            start: 'top 90%',
            end: 'top 100%',
            markers: false
        },
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power2'
    })
})

var disableIntroStyle = ""
var enableIntroStyle = ""

function disableIntro() {
    localStorage.disableIntro = true
    reloadStyle()
    forceRerender()
}

function enableIntro() {
    localStorage.removeItem('disableIntro')
    reloadStyle()
    forceRerender()
}

function reloadStyle() {
    if (localStorage.disableIntro) {
        disableIntroStyle = 'display: none;'
        enableIntroStyle = ''
    } else {
        disableIntroStyle = ''
        enableIntroStyle = 'display: none;'
    }
}

reloadStyle()

import { ref } from 'vue';
const componentKey = ref(0);

const forceRerender = () => {
    componentKey.value += 1;
};
</script>

<template>
    <footer>
        <div class="footer-content">
            <div class="footer-content__left">
                <h2>CastMate</h2>
                <p>CastMate is a powerful automation tool for streamers. It allows you to easily create automations and
                    triggers for your stream.</p>
            </div>
            <div class="footer-content__right">
                <h3>Quick Links</h3>
                <ul>
                    <li><a @click="disableIntro" :style="disableIntroStyle" :key="componentKey">Disable the intro</a>
                    </li>
                    <li><a><RouterLink to="/#">Home</RouterLink></a></li>
                    <li><a><RouterLink to="/#features">Features</RouterLink></a></li>
                    <li><a><RouterLink to="/docs">Docs</RouterLink></a></li>
                    <li><a><RouterLink to="/contact">Contact</RouterLink></a></li>
                    <li><a @click="enableIntro" :style="enableIntroStyle" :key="componentKey">Enable the intro</a></li>
                </ul>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; 2025 CastMate. All rights reserved.</p>
        </div>
    </footer>
</template>

<style scoped>
footer {
    background-color: var(--vt-c-black);
    color: var(--vt-c-white);
    padding: 1rem;
}

.footer-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    gap: 1rem;
}

.footer-content__left {
    max-width: 400px;
}

.footer-content__right {
    min-width: 200px;
    max-width: 400px;
}

.footer-content__right h3 {
    margin-bottom: 0.5rem;
}

.footer-content__right ul {
    list-style: none;
    padding: 0;
}

.footer-content__right li {
    margin-bottom: 0.5rem;
}

.footer-bottom {
    background-color: var(--vt-c-dark-purple);
    text-align: center;
    padding: 1rem 0;
}

.footer-bottom p {
    margin: 0;
}

.footer-content__right a {
    box-shadow: inset 0 0 0 0 var(--vt-c-black-mute-2);
    color: var(--vt-c-white);
    padding: 0 .25rem;
    margin: 0 -.25rem;
    transition: color .3s ease-in-out, box-shadow .3s ease-in-out;
    border-radius: 5px;
}

.footer-content__right a:hover {
    color: var(--vt-c-white);
    box-shadow: inset 200px 0 0 0 var(--vt-c-black-mute);
}
</style>