<script setup lang="ts">
import TitleSplash from '../components/TitleSplash.vue'
import Navbar from '../components/Navbar.vue'
import HeroHeader from '../components/HeroHeader.vue'
import CardElement from '../components/CardElement.vue'
import SpellCastCard from '../components/SpellCastCard.vue'
import Footer from '../components/Footer.vue'
import TitleElement from '../components/TitleElement.vue'

import { onMounted, useTemplateRef } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const titleSplash = useTemplateRef('titleSplash')
const heroHeader = useTemplateRef('heroHeader')

var skipSetup = false

if (localStorage.disableIntro) {
  skipSetup = true
}

function setup() {
  document.body.style.overflow = 'hidden';
  gsap.to('nav', { y: -100, opacity: 0, duration: 0, ease: 'linear' })
  gsap.to('.underbar', { y: 0, opacity: 0, duration: 0, ease: 'linear' })
  gsap.to('.mobile-nav', { y: 0, opacity: 0, duration: 0, ease: 'linear' })
  if (heroHeader.value) {
    heroHeader.value.setup()
  }
}

onMounted(() => {
  if (skipSetup) {
    if (titleSplash.value) {
      titleSplash.value.cancelAnimation()
    }
    if (heroHeader.value) {
      heroHeader.value.cancelAnimation()
    }
    document.body.style.overflow = 'auto';
    return
  }
  if (localStorage.visited == undefined) {
    localStorage.visited = true
    localStorage.disableIntro = true
  }
  setup()
  if (titleSplash.value) {
    titleSplash.value.callbackAnimation(() => {
      if (heroHeader.value) {
        heroHeader.value.launchTransition()
      }
      setTimeout(() => {
        gsap.to('nav', { y: 0, opacity: 1, duration: 1, ease: 'linear' })
        gsap.to('.underbar', { opacity: 1, duration: 1, ease: 'linear' })
        gsap.to('.mobile-nav', { opacity: 1, duration: 1, ease: 'linear' })
        setTimeout(() => {
          document.body.style.overflow = 'auto';
        }, 4000);
      }, 2000);
    })
  }
})
</script>

<template>
  <div>
    <TitleElement title="CastMate - The All-in-One Streamer Toolkit" />
    <main>
      <TitleSplash ref="titleSplash" />
      <Navbar ref="navbar" />
      <HeroHeader ref="heroHeader" />
      <a id="features"></a>
      <CardElement id="1" title="Profile System"
        description="Use CastMate's Profile system to organize your triggers and automations. Automatically switch out your channel point rewards."
        image="https://www.castmate.io/_nuxt/Profiles.09293c9a.webp" alignement="left" />
      <CardElement id="2" title="Powerful Automations"
        description="Quickly build automations using an easy click and drag interface. No coding experience required."
        image="https://www.castmate.io/_nuxt/Automation2.ea279528.webp" alignement="right" />
      <CardElement id="3" title="Overlays"
        description="Add overlays to OBS with just one click. Use the powerful editor to customize them to your own style."
        image="https://www.castmate.io/_nuxt/Overlays.be51cfef.webp" alignement="left" />
      <CardElement id="4" title="Smart Lights"
        description="Easily integrate your smart lights and plugs into your smart-lights." image="/images/Lights.png"
        alignement="right" />
      <SpellCastCard id="5" />
      <Footer />
    </main>
  </div>
</template>

<style scoped>
main {
  height: 100vh;
  width: 100vw;
}
</style>