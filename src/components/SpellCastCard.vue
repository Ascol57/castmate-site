<script setup lang="ts">
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { onMounted } from 'vue'

gsap.registerPlugin(ScrollTrigger)

const props = defineProps<{
    id: string
}>()

onMounted(() => {
    gsap.to('.wrapper[data="' + props.id + '"] .card', { opacity: 0, y: 500, duration: 0, ease: 'linear' })
    gsap.to('.wrapper[data="' + props.id + '"] .card', {
        scrollTrigger: {
            trigger: '.wrapper[data="' + props.id + '"]',
            start: 'top 80%',
            end: 'bottom 20%',
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
        <div class="card">
            <div class="image">
                <img src="https://www.castmate.io/_nuxt/SpellCast.7ac98899.png" alt="Card Image">
            </div>
            <div class="card-content">
                <h2>Earn Bits with Triggers</h2>
                <p>CastMate's companion extension SpellCast works with the profile system to dynamically show bits
                    powered triggers to the viewer.</p>
            </div>
            <div class="background">
                <img data-v-00374620="" src="https://www.spellcast.gg/_nuxt/img/bits-icon.2b7e8c7.png"
                    class="raining-bit"
                    style="top: -4rem; height: 1.2628rem; left: 0%; animation-delay: 4.919s; filter: blur(1.60182px) drop-shadow(rgb(13, 191, 117) 0px 0px 0.85rem); animation-duration: 3.7372s;">
                    <img
                    data-v-00374620="" src="https://www.spellcast.gg/_nuxt/img/bits-icon.2b7e8c7.png"
                    class="raining-bit"
                    style="top: -4rem; height: 1.92228rem; left: 2.5%; animation-delay: 5.60781s; filter: blur(0.602609px) drop-shadow(rgb(13, 191, 117) 0px 0px 0.85rem); animation-duration: 3.07772s;"><img
                    data-v-00374620="" src="https://www.spellcast.gg/_nuxt/img/bits-icon.2b7e8c7.png"
                    class="raining-bit"
                    style="top: -4rem; height: 1.89387rem; left: 5%; animation-delay: 0.751281s; filter: blur(0.645658px) drop-shadow(rgb(13, 191, 117) 0px 0px 0.85rem); animation-duration: 3.10613s;"><img
                    data-v-00374620="" src="https://www.spellcast.gg/_nuxt/img/bits-icon.2b7e8c7.png"
                    class="raining-bit"
                    style="top: -4rem; height: 1.24671rem; left: 7.5%; animation-delay: 5.00054s; filter: blur(1.62619px) drop-shadow(rgb(13, 191, 117) 0px 0px 0.85rem); animation-duration: 3.75329s;"><img
                    data-v-00374620="" src="https://www.spellcast.gg/_nuxt/img/bits-icon.2b7e8c7.png"
                    class="raining-bit"
                    style="top: -4rem; height: 1.01135rem; left: 10%; animation-delay: 4.99839s; filter: blur(1.98281px) drop-shadow(rgb(13, 191, 117) 0px 0px 0.85rem); animation-duration: 3.98865s;"><img
                    data-v-00374620="" src="https://www.spellcast.gg/_nuxt/img/bits-icon.2b7e8c7.png"
                    class="raining-bit"
                    style="top: -4rem; height: 2.84641rem; left: 12.5%; animation-delay: 1.90925s; filter: blur(0px) drop-shadow(rgb(13, 191, 117) 0px 0px 0.85rem); animation-duration: 2.15359s;"><img
                    data-v-00374620="" src="https://www.spellcast.gg/_nuxt/img/bits-icon.2b7e8c7.png"
                    class="raining-bit"
                    style="top: -4rem; height: 1.71221rem; left: 15%; animation-delay: 2.22419s; filter: blur(0.920895px) drop-shadow(rgb(13, 191, 117) 0px 0px 0.85rem); animation-duration: 3.28779s;"><img
                    data-v-00374620="" src="https://www.spellcast.gg/_nuxt/img/bits-icon.2b7e8c7.png"
                    class="raining-bit"
                    style="top: -4rem; height: 1.1404rem; left: 17.5%; animation-delay: 2.9441s; filter: blur(1.78727px) drop-shadow(rgb(13, 191, 117) 0px 0px 0.85rem); animation-duration: 3.8596s;"><img
                    data-v-00374620="" src="https://www.spellcast.gg/_nuxt/img/bits-icon.2b7e8c7.png"
                    class="raining-bit"
                    style="top: -4rem; height: 1.03144rem; left: 20%; animation-delay: 0.207769s; filter: blur(1.95237px) drop-shadow(rgb(13, 191, 117) 0px 0px 0.85rem); animation-duration: 3.96856s;"><img
                    data-v-00374620="" src="https://www.spellcast.gg/_nuxt/img/bits-icon.2b7e8c7.png"
                    class="raining-bit"
                    style="top: -4rem; height: 1.30435rem; left: 22.5%; animation-delay: 0.394964s; filter: blur(1.53886px) drop-shadow(rgb(13, 191, 117) 0px 0px 0.85rem); animation-duration: 3.69565s;"><img
                    data-v-00374620="" src="https://www.spellcast.gg/_nuxt/img/bits-icon.2b7e8c7.png"
                    class="raining-bit"
                    style="top: -4rem; height: 2.27096rem; left: 25%; animation-delay: 1.53461s; filter: blur(0.0742972px) drop-shadow(rgb(13, 191, 117) 0px 0px 0.85rem); animation-duration: 2.72904s;"><img
                    data-v-00374620="" src="https://www.spellcast.gg/_nuxt/img/bits-icon.2b7e8c7.png"
                    class="raining-bit"
                    style="top: -4rem; height: 1.00109rem; left: 27.5%; animation-delay: 0.846169s; filter: blur(1.99834px) drop-shadow(rgb(13, 191, 117) 0px 0px 0.85rem); animation-duration: 3.99891s;"><img
                    data-v-00374620="" src="https://www.spellcast.gg/_nuxt/img/bits-icon.2b7e8c7.png"
                    class="raining-bit"
                    style="top: -4rem; height: 2.4869rem; left: 30%; animation-delay: 3.41239s; filter: blur(0px) drop-shadow(rgb(13, 191, 117) 0px 0px 0.85rem); animation-duration: 2.5131s;"><img
                    data-v-00374620="" src="https://www.spellcast.gg/_nuxt/img/bits-icon.2b7e8c7.png"
                    class="raining-bit"
                    style="top: -4rem; height: 1.00135rem; left: 32.5%; animation-delay: 5.5468s; filter: blur(1.99796px) drop-shadow(rgb(13, 191, 117) 0px 0px 0.85rem); animation-duration: 3.99865s;"><img
                    data-v-00374620="" src="https://www.spellcast.gg/_nuxt/img/bits-icon.2b7e8c7.png"
                    class="raining-bit"
                    style="top: -4rem; height: 1.00902rem; left: 35%; animation-delay: 5.54512s; filter: blur(1.98633px) drop-shadow(rgb(13, 191, 117) 0px 0px 0.85rem); animation-duration: 3.99098s;"><img
                    data-v-00374620="" src="https://www.spellcast.gg/_nuxt/img/bits-icon.2b7e8c7.png"
                    class="raining-bit"
                    style="top: -4rem; height: 1.31837rem; left: 37.5%; animation-delay: 0.25713s; filter: blur(1.51762px) drop-shadow(rgb(13, 191, 117) 0px 0px 0.85rem); animation-duration: 3.68163s;"><img
                    data-v-00374620="" src="https://www.spellcast.gg/_nuxt/img/bits-icon.2b7e8c7.png"
                    class="raining-bit"
                    style="top: -4rem; height: 1.9869rem; left: 40%; animation-delay: 2.5431s; filter: blur(0.504692px) drop-shadow(rgb(13, 191, 117) 0px 0px 0.85rem); animation-duration: 3.0131s;"><img
                    data-v-00374620="" src="https://www.spellcast.gg/_nuxt/img/bits-icon.2b7e8c7.png"
                    class="raining-bit"
                    style="top: -4rem; height: 2.92346rem; left: 42.5%; animation-delay: 0.497726s; filter: blur(0px) drop-shadow(rgb(13, 191, 117) 0px 0px 0.85rem); animation-duration: 2.07654s;"><img
                    data-v-00374620="" src="https://www.spellcast.gg/_nuxt/img/bits-icon.2b7e8c7.png"
                    class="raining-bit"
                    style="top: -4rem; height: 1.29234rem; left: 45%; animation-delay: 5.36599s; filter: blur(1.55705px) drop-shadow(rgb(13, 191, 117) 0px 0px 0.85rem); animation-duration: 3.70766s;"><img
                    data-v-00374620="" src="https://www.spellcast.gg/_nuxt/img/bits-icon.2b7e8c7.png"
                    class="raining-bit"
                    style="top: -4rem; height: 1.07942rem; left: 47.5%; animation-delay: 0.31702s; filter: blur(1.87967px) drop-shadow(rgb(13, 191, 117) 0px 0px 0.85rem); animation-duration: 3.92058s;"><img
                    data-v-00374620="" src="https://www.spellcast.gg/_nuxt/img/bits-icon.2b7e8c7.png"
                    class="raining-bit"
                    style="top: -4rem; height: 1.00828rem; left: 50%; animation-delay: 3.56658s; filter: blur(1.98745px) drop-shadow(rgb(13, 191, 117) 0px 0px 0.85rem); animation-duration: 3.99172s;"><img
                    data-v-00374620="" src="https://www.spellcast.gg/_nuxt/img/bits-icon.2b7e8c7.png"
                    class="raining-bit"
                    style="top: -4rem; height: 1.02617rem; left: 52.5%; animation-delay: 0.679676s; filter: blur(1.96035px) drop-shadow(rgb(13, 191, 117) 0px 0px 0.85rem); animation-duration: 3.97383s;"><img
                    data-v-00374620="" src="https://www.spellcast.gg/_nuxt/img/bits-icon.2b7e8c7.png"
                    class="raining-bit"
                    style="top: -4rem; height: 1.65751rem; left: 55%; animation-delay: 4.69069s; filter: blur(1.00378px) drop-shadow(rgb(13, 191, 117) 0px 0px 0.85rem); animation-duration: 3.34249s;"><img
                    data-v-00374620="" src="https://www.spellcast.gg/_nuxt/img/bits-icon.2b7e8c7.png"
                    class="raining-bit"
                    style="top: -4rem; height: 1.72297rem; left: 57.5%; animation-delay: 3.41965s; filter: blur(0.904592px) drop-shadow(rgb(13, 191, 117) 0px 0px 0.85rem); animation-duration: 3.27703s;"><img
                    data-v-00374620="" src="https://www.spellcast.gg/_nuxt/img/bits-icon.2b7e8c7.png"
                    class="raining-bit"
                    style="top: -4rem; height: 2.03205rem; left: 60%; animation-delay: 2.83565s; filter: blur(0.436295px) drop-shadow(rgb(13, 191, 117) 0px 0px 0.85rem); animation-duration: 2.96795s;"><img
                    data-v-00374620="" src="https://www.spellcast.gg/_nuxt/img/bits-icon.2b7e8c7.png"
                    class="raining-bit"
                    style="top: -4rem; height: 2.6069rem; left: 62.5%; animation-delay: 4.69919s; filter: blur(0px) drop-shadow(rgb(13, 191, 117) 0px 0px 0.85rem); animation-duration: 2.3931s;"><img
                    data-v-00374620="" src="https://www.spellcast.gg/_nuxt/img/bits-icon.2b7e8c7.png"
                    class="raining-bit"
                    style="top: -4rem; height: 1.04393rem; left: 65%; animation-delay: 2.65007s; filter: blur(1.93344px) drop-shadow(rgb(13, 191, 117) 0px 0px 0.85rem); animation-duration: 3.95607s;"><img
                    data-v-00374620="" src="https://www.spellcast.gg/_nuxt/img/bits-icon.2b7e8c7.png"
                    class="raining-bit"
                    style="top: -4rem; height: 1.04532rem; left: 67.5%; animation-delay: 5.1427s; filter: blur(1.93133px) drop-shadow(rgb(13, 191, 117) 0px 0px 0.85rem); animation-duration: 3.95468s;"><img
                    data-v-00374620="" src="https://www.spellcast.gg/_nuxt/img/bits-icon.2b7e8c7.png"
                    class="raining-bit"
                    style="top: -4rem; height: 2.55217rem; left: 70%; animation-delay: 1.93446s; filter: blur(0px) drop-shadow(rgb(13, 191, 117) 0px 0px 0.85rem); animation-duration: 2.44783s;"><img
                    data-v-00374620="" src="https://www.spellcast.gg/_nuxt/img/bits-icon.2b7e8c7.png"
                    class="raining-bit"
                    style="top: -4rem; height: 1.47171rem; left: 72.5%; animation-delay: 1.54058s; filter: blur(1.28529px) drop-shadow(rgb(13, 191, 117) 0px 0px 0.85rem); animation-duration: 3.52829s;"><img
                    data-v-00374620="" src="https://www.spellcast.gg/_nuxt/img/bits-icon.2b7e8c7.png"
                    class="raining-bit"
                    style="top: -4rem; height: 1.8786rem; left: 75%; animation-delay: 0.18351s; filter: blur(0.668786px) drop-shadow(rgb(13, 191, 117) 0px 0px 0.85rem); animation-duration: 3.1214s;"><img
                    data-v-00374620="" src="https://www.spellcast.gg/_nuxt/img/bits-icon.2b7e8c7.png"
                    class="raining-bit"
                    style="top: -4rem; height: 1.0275rem; left: 77.5%; animation-delay: 0.509886s; filter: blur(1.95833px) drop-shadow(rgb(13, 191, 117) 0px 0px 0.85rem); animation-duration: 3.9725s;"><img
                    data-v-00374620="" src="https://www.spellcast.gg/_nuxt/img/bits-icon.2b7e8c7.png"
                    class="raining-bit"
                    style="top: -4rem; height: 1.00006rem; left: 80%; animation-delay: 0.52469s; filter: blur(1.99991px) drop-shadow(rgb(13, 191, 117) 0px 0px 0.85rem); animation-duration: 3.99994s;"><img
                    data-v-00374620="" src="https://www.spellcast.gg/_nuxt/img/bits-icon.2b7e8c7.png"
                    class="raining-bit"
                    style="top: -4rem; height: 1.07242rem; left: 82.5%; animation-delay: 0.0396153s; filter: blur(1.89028px) drop-shadow(rgb(13, 191, 117) 0px 0px 0.85rem); animation-duration: 3.92758s;"><img
                    data-v-00374620="" src="https://www.spellcast.gg/_nuxt/img/bits-icon.2b7e8c7.png"
                    class="raining-bit"
                    style="top: -4rem; height: 1.08135rem; left: 85%; animation-delay: 0.500361s; filter: blur(1.87675px) drop-shadow(rgb(13, 191, 117) 0px 0px 0.85rem); animation-duration: 3.91865s;"><img
                    data-v-00374620="" src="https://www.spellcast.gg/_nuxt/img/bits-icon.2b7e8c7.png"
                    class="raining-bit"
                    style="top: -4rem; height: 1.00712rem; left: 87.5%; animation-delay: 5.88615s; filter: blur(1.98922px) drop-shadow(rgb(13, 191, 117) 0px 0px 0.85rem); animation-duration: 3.99288s;"><img
                    data-v-00374620="" src="https://www.spellcast.gg/_nuxt/img/bits-icon.2b7e8c7.png"
                    class="raining-bit"
                    style="top: -4rem; height: 1.00003rem; left: 90%; animation-delay: 2.85812s; filter: blur(1.99995px) drop-shadow(rgb(13, 191, 117) 0px 0px 0.85rem); animation-duration: 3.99997s;"><img
                    data-v-00374620="" src="https://www.spellcast.gg/_nuxt/img/bits-icon.2b7e8c7.png"
                    class="raining-bit"
                    style="top: -4rem; height: 1.00375rem; left: 92.5%; animation-delay: 4.4517s; filter: blur(1.99432px) drop-shadow(rgb(13, 191, 117) 0px 0px 0.85rem); animation-duration: 3.99625s;"><img
                    data-v-00374620="" src="https://www.spellcast.gg/_nuxt/img/bits-icon.2b7e8c7.png"
                    class="raining-bit"
                    style="top: -4rem; height: 2.66455rem; left: 95%; animation-delay: 1.51337s; filter: blur(0px) drop-shadow(rgb(13, 191, 117) 0px 0px 0.85rem); animation-duration: 2.33545s;"><img
                    data-v-00374620="" src="https://www.spellcast.gg/_nuxt/img/bits-icon.2b7e8c7.png"
                    class="raining-bit"
                    style="top: -4rem; height: 1.04629rem; left: 97.5%; animation-delay: 4.50559s; filter: blur(1.92986px) drop-shadow(rgb(13, 191, 117) 0px 0px 0.85rem); animation-duration: 3.95371s;">
            </div>
            <span class="spellcast-logo-span">
                <span class="spellcast-logo-text">Powered by </span>
                <img src="https://www.castmate.io/_nuxt/spellcast-logo.51c0a687.svg" class="spellcast-logo-glyph">
                <span class="spellcast-logo-text">PELLCAST</span>
            </span>
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
    background: linear-gradient(160deg, #000821, #0373e6);
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
    background: linear-gradient(159deg, #0162ff 16%, #15fb1d 91%);
    background-clip: text;
    color: transparent;
}

p {
    font-size: 1rem;
    color: var(--vt-c-white-mute);
    text-align: center;
}

.image {
    --z-height: 80px;
    transform: rotateY(-15deg) translateZ(var(--z-height));
    margin: auto;
    width: 80%;
    grid-column: 2/3;
    grid-row: 1;
}

.card-content {
    grid-column: 1/2;
    grid-row: 1;
}

/* .image {
    --z-height: 80px;
    transform: rotateY(15deg) translateZ(var(--z-height));
    margin: auto;
    width: 80%;
    grid-column: 1/2;
    grid-row: 1;
}

.card-content {
    grid-column: 2/3;
    grid-row: 1;
} */

.card .spellcast-logo-span {
    color: #fff;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
    font-size: unset;
    font-weight: unset;
    line-height: 1.5 !important;
    white-space: nowrap;
}

.card .spellcast-logo-glyph {
    bottom: .4em !important;
    display: inline-block !important;
    height: 1.5em !important;
    position: relative !important;
    vertical-align: middle;
    width: auto;
}

@media (min-width: 1024px) {
    .spellcast-logo-span {
        position: absolute;
        bottom: 1rem;
        left: 1rem;
    }
}

@media (max-width: 1024px) {
    .card {
        grid-template-columns: 1fr;
        height: 70vh;
    }

    .image {
        grid-column: 1/2;
        grid-row: 2;
        width: 60%;
        height: auto;
    }

    .card-content {
        grid-column: 1/2;
        grid-row: 1;
    }

    /* .image {
        grid-column: 1/2;
        grid-row: 2;
        width: 60%;
        height: auto;
    }

    .card-content {
        grid-column: 1/2;
        grid-row: 1;
    } */
}

@media (max-width: 768px) {
    .card {
        height: 60vh;
    }

    .image {
        width: 80%;
    }
}

.background {
    overflow: hidden;
    position: absolute;
    width: 100%;
    height: 100%;
}

.card .raining-bit {
    animation-name: rain;
    animation-direction: normal;
    animation-duration: 1.5s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in;
    width: auto;
    height: auto;
    height: 2rem;
}

@keyframes rain {
    0% {
        transform: translateY(-4rem);
    }

    100% {
        transform: translateY(80vh);
    }
}
</style>