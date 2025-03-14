<script setup lang="ts">
import { gsap } from 'gsap';
import { onMounted } from 'vue'

var callbackAnimationFunction: (() => void) | null = null;

onMounted(() => {
    window.scrollTo(0, 0);
    var oneREM = parseFloat(getComputedStyle(document.documentElement).fontSize);

    var tl = gsap.timeline();
    tl.to('.box img', { y: oneREM * 5, duration: 0 });
    tl.to('.box img', { y: 0, duration: 1, delay: 0.5, ease: 'sine.out' });
    tl.to({}, 2, {});
    tl.to('.center', { filter: 'blur(4px)', opacity: 0, duration: 1, ease: 'linear' });
    tl.to('.center', { display: 'none', duration: 0 });

    tl.eventCallback('onComplete', () => {
        if (callbackAnimationFunction) {
            callbackAnimationFunction();
        }
    });

    tl.play();
})

defineExpose({
    callbackAnimation: function callbackAnimation(callback: () => void) {
        callbackAnimationFunction = callback;
    },
    cancelAnimation: function cancelAnimation() {
        gsap.to('.center', { display: 'none', duration: 0 });
    },
    data: 'Hello from TitleSplash'
})
</script>

<template>
    <div class="center">
        <div class="box">
            <img src="..\assets\castmate-logo.svg" alt="" srcset="">
        </div>
    </div>
</template>

<style scoped>
.center {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    position: absolute;
    width: 100vw;
    top: 0;
    left: 0;
    z-index: 100;
    background: radial-gradient(var(--vt-c-black), var(--vt-c-black));
}

.box {
    height: 5rem;
    overflow: hidden;
}

.box img {
    height: 5rem;
}
</style>