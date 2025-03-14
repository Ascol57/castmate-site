<script setup lang="ts">
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { onMounted, onUnmounted } from 'vue'

gsap.registerPlugin(ScrollTrigger)

var openSidebarToogle = false

onMounted(() => {
    document.querySelector('#app')?.classList.add('overflow-x-hidden')
    gsap.to('nav .button', { opacity: 0, duration: 0, ease: 'linear' })

    function resize(t: number) {
        if (window.innerWidth > 768) {
            gsap.to('.grid', { 'grid-template-columns': '250px 1fr', duration: t, ease: 'linear' })
            gsap.to('.sidebarAnim', { opacity: 1, width: '100%', duration: t, ease: 'linear' })
            gsap.to('.sidebar', { width: '250px', duration: t, ease: 'linear' })
            gsap.to('.docscontent', { width: '100%', opacity: 1, duration: t, ease: 'linear' })
        } else {
            gsap.to('.grid', { 'grid-template-columns': '0fr 1fr', duration: t, ease: 'linear' })
            gsap.to('.sidebarAnim', { opacity: 0, width: 0, duration: t, ease: 'linear' })
            gsap.to('.sidebar', { width: '100%', duration: t, ease: 'linear' })
            gsap.to('.docscontent', { width: '100%', opacity: 1, duration: t, ease: 'linear' })
            openSidebarToogle = false
        }
    }

    window.addEventListener('resize', () => { resize(0.5) })

    resize(0)
})

onUnmounted(() => {
    document.querySelector('#app')?.classList.remove('overflow-x-hidden')
})

function toggleSidebar() {
    if (window.innerWidth > 768) {
        gsap.to('.grid', { 'grid-template-columns': '250px 1fr', duration: 0.5, ease: 'linear' })
        gsap.to('.sidebarAnim', { opacity: 1, width: '100%', duration: 0.5, ease: 'linear' })
        gsap.to('.sidebar', { width: '250px', duration: 0.5, ease: 'linear' })
        gsap.to('.docscontent', { width: '100%', opacity: 1, duration: 0.5, ease: 'linear' })
    } else {
        if (openSidebarToogle) {
            gsap.to('.grid', { 'grid-template-columns': '0fr 1fr', duration: 0.5, ease: 'linear' })
            gsap.to('.sidebarAnim', { opacity: 0, width: 0, duration: 0.5, ease: 'linear' })
            gsap.to('.docscontent', { width: '100%', opacity: 1, duration: 0.5, ease: 'linear' })
            openSidebarToogle = false
        } else {
            gsap.to('.grid', { 'grid-template-columns': '1fr 0fr', duration: 0.5, ease: 'linear' })
            gsap.to('.sidebarAnim', { opacity: 1, width: '100%', duration: 0.5, ease: 'linear' })
            gsap.to('.docscontent', { width: 0, opacity: 0, duration: 0, ease: 'linear' })
            openSidebarToogle = true
        }
    }
}

(document as any).toggleSidebar = toggleSidebar

defineExpose({ toggleSidebar })
</script>

<template>
    <nav>
        <RouterLink to="/" class="logo">
            <img src="../assets/castmate-logo.svg" alt="Castmate Logo" srcset="">
        </RouterLink>
        <ul>
            <li><a>
                    <RouterLink to="/#">Home</RouterLink>
                </a></li>
            <li><a>
                    <RouterLink to="/docs">Docs</RouterLink>
                </a></li>
            <li><a>
                    <RouterLink to="/contact">Contact</RouterLink>
                </a></li>
        </ul>
        <div class="button"><a>Download</a></div>
    </nav>
    <div class="underbar"></div>
    <div class="mobile-nav">
        <a @click="toggleSidebar">Menu</a>
        <div class="separation"></div>
        <a><RouterLink to="/contact">Contact</RouterLink></a>
    </div>
</template>

<style>
.overflow-x-hidden {
    overflow-x: hidden;
}
</style>

<style scoped>
.logo {
    display: flex;
    justify-content: left;
    align-items: center;
    height: 5rem;
    background-color: transparent;
}

.logo img {
    height: 3rem;
}

nav {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    height: 5rem;
    width: 100vw;
    background-color: var(--vt-c-black);
    color: var(--vt-c-white);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    padding: 0 5rem;
    border-bottom: 1px solid var(--vt-c-light-purple);
}

ul {
    display: flex;
    justify-content: space-around;
    align-items: center;
    list-style: none;
}

li {
    padding: 0.5rem;
}

li a {
    box-shadow: inset 0 0 0 0 var(--vt-c-black-mute-2);
    color: var(--vt-c-white);
    padding: 0 .25rem;
    margin: 0 -.25rem;
    border-radius: 5px;
    transition: color .3s ease-in-out, box-shadow .3s ease-in-out;
}

li a:hover {
    color: var(--vt-c-white);
    box-shadow: inset 300px 0 0 0 var(--vt-c-black-mute);
}

.button {
    text-align: right;
}

.button a {
    align-items: center;
    background-clip: border-box;
    background-origin: padding-box;
    background-image: linear-gradient(60deg, rgb(8, 96, 255) 25%, rgb(214, 84, 255) 75%);
    border: 1px solid var(--vt-c-white);
    border-radius: 4px;
    justify-content: center;
    color: var(--vt-c-white);
    font-weight: 700;
    padding: 0.5rem 1rem;
    transition: all 0.15s ease-in-out;
    cursor: pointer;
    background-size: 100%;
    letter-spacing: 0vw;
}

.button a:hover {
    background-size: 120%;
    color: var(--vt-c-white);
    letter-spacing: 0.1vw;
}

.underbar {
    height: 5rem;
    width: 100%;
    background: linear-gradient(132deg, var(--vt-c-light-blue), var(--vt-c-light-purple));
}

.mobile-nav {
    display: none;
    position: fixed;
    top: 5rem;
    left: 0;
    width: 100vw;
    background-color: var(--vt-c-black);
    color: var(--vt-c-white);
    z-index: 1000;
    padding: 0 1rem;
    list-style: none;
    text-align: center;
}

.mobile-nav a {
    display: inline-block;
    width: 100%;
    height: 100%;
    box-shadow: inset 0 0 0 0 var(--vt-c-black);
    color: var(--vt-c-white);
}

.mobile-nav a:hover {
    box-shadow: inset 0 0 0 0 var(--vt-c-black);
    background-color: transparent;
}

.mobile-nav .separation {
    width: 1px;
    height: 100%;
    background-color: var(--vt-c-light-purple);
}

@media (max-width: 1024px) {
    nav {
        padding: 0 3rem;
    }
}

@media (max-width: 768px) {
    ul {
        display: none;
    }

    nav {
        grid-template-columns: 1fr 1fr;
        padding: 0 1rem;
    }

    .mobile-nav {
        display: grid;
        grid-template-columns: 1fr 1px 1fr;
        padding: 0 1rem;
    }

    .underbar {
        height: calc(7rem - 2px);
    }
}
</style>