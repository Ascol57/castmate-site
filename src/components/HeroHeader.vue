<script setup lang="ts">
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin'
import { ref } from 'vue'

gsap.registerPlugin(TextPlugin)

function clamp(x: number) {
    return Math.max(-15, Math.min(x, 15));
}

const oneREM = parseFloat(getComputedStyle(document.documentElement).fontSize);

function rotate(e: MouseEvent) {
    const cardItem = document.querySelector('.card-item') as HTMLElement;
    if (!cardItem) return;

    const halfHeight = cardItem.offsetHeight / 2;

    var x = clamp(-(e.offsetY - halfHeight) / 10);
    var y = clamp((e.offsetX - halfHeight) / 10);

    cardItem.style.transform = 'rotateX(' + x + 'deg) rotateY(' + y + 'deg)';
}

function stopRotate() {
    const cardItem = document.querySelector('.card-item') as HTMLElement;
    if (!cardItem) return;
    cardItem.style.transform = 'rotate(0)';
}

defineExpose({
    setup: function setup() {
        gsap.to('.hero-header h1', { opacity: 0, duration: 0, ease: 'linear' });
        gsap.to('.hero-header .boxed img', { y: oneREM * 4, duration: 0, ease: 'linear' });
        gsap.to('.hero-header span', { opacity: 0, duration: 0, ease: 'linear' });
        gsap.to('.hero-header .cta .download', { opacity: 0, duration: 0, ease: 'power2' });
        gsap.to('.hero-header .card', { opacity: 0, y: 27 * oneREM, duration: 0, ease: 'linear' });
    },
    launchTransition: function launchTransition() {
        var tl = gsap.timeline();
        tl.to('.hero-header h1', { opacity: 1, duration: 0.5, ease: 'power2' });
        tl.to('.hero-header .boxed img', { y: 0, duration: 1, ease: 'power3' });
        tl.to({}, 1, {});
        tl.to('.hero-header span', { opacity: 1, duration: 0.1, ease: 'power2' });
        tl.to('.hero-header p', {
            text: "Create and Automate powerful viewer engagement.",
            duration: 2,
            //slow then speeds up easing
            ease: 'power1.in'
        })
        tl.to('.hero-header span', { opacity: 0, duration: 0.1, delay: 0.5, ease: 'linear' });
        tl.to('.hero-header .cta .download', { opacity: 1, text: "Download", duration: 0.5, ease: 'power2' });
        tl.to('.hero-header .cta .leftBar', { 'background-image': 'linear-gradient(to left, rgb(100, 116, 139), rgba(0, 0, 0, 0))', duration: 0.5, delay: -0.5, ease: 'power2' });
        tl.to('.hero-header .cta .rightBar', { 'background-image': 'linear-gradient(to right, rgb(100, 116, 139), rgba(0, 0, 0, 0))', duration: 0.5, delay: -0.5, ease: 'power2' });
        tl.to('.hero-header .card', { opacity: 1, y: 0, duration: 1, ease: 'power2' });
        tl.play();
    },
    cancelAnimation: function cancelAnimation() {
        gsap.to('.hero-header h1', { opacity: 1, duration: 0, ease: 'linear' });
        gsap.to('.hero-header .boxed img', { y: 0, duration: 0, ease: 'linear' });
        gsap.to('.hero-header span', { opacity: 0, duration: 0, ease: 'linear' });
        gsap.to('.hero-header p', { text: "Create and Automate powerful viewer engagement.", duration: 0, ease: 'linear' });
        gsap.to('.hero-header .cta .download', { opacity: 1, text: "Download", duration: 0, ease: 'linear' });
        gsap.to('.hero-header .cta .leftBar', { 'background-image': 'linear-gradient(to left, rgb(100, 116, 139), rgba(0, 0, 0, 0))', duration: 0, ease: 'linear' });
        gsap.to('.hero-header .cta .rightBar', { 'background-image': 'linear-gradient(to right, rgb(100, 116, 139), rgba(0, 0, 0, 0))', duration: 0, ease: 'linear' });
        gsap.to('.hero-header .card', { opacity: 1, y: 0, duration: 0, ease: 'linear' });
    }
})

async function fetchGitHubReleases(owner: string, repo: string, token: string) {
    const url = `https://api.github.com/repos/${owner}/${repo}/releases/latest`;
    const headers = {
        "Accept": "application/vnd.github+json",
        "Authorization": `Bearer ${token}`,
        "X-GitHub-Api-Version": "2022-11-28"
    };

    try {
        const response = await fetch(url, { headers });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching GitHub releases:', error);
    }
}

var downloadSrc = ref("")

fetchGitHubReleases('Lordtocs', 'Castmate', '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').then(release => {
    release.assets.forEach((asset: { name: string; browser_download_url: string }) => {
        if (asset.name.endsWith('.exe') && !asset.name.endsWith('-portable.exe ')) {
            downloadSrc.value = asset.browser_download_url;
        }
    });
});
</script>

<template>
    <div class="hero-header">
        <h1>The Easiest <div class="boxed"><img src="../assets/twitchLabel.png" alt="" srcset=""></div> Automation
            Toolkit</h1>
        <div class="wrapper">
            <p class="typewriter"></p><span>|</span>
        </div>
        <div class="cta">
            <div class="leftBar"></div>
            <a class="download" :src="downloadSrc"></a>
            <div class="rightBar"></div>
        </div>
        <div class="card" @mousemove="rotate" @mouseleave="stopRotate">
            <div class="card-item">
                <img src="../assets/Automation.webp" alt="" srcset="">
            </div>
        </div>
    </div>
    <div class="space"></div>
</template>

<style scoped>
.hero-header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 50vh;
    width: 100vw;
    color: var(--vt-c-white);
    text-align: center;
}

h1 {
    font-size: 3rem;
    font-weight: 500;
    position: relative;
    top: -10px;
}

h1 .boxed {
    height: 4rem;
    position: relative;
    top: 1rem;
}

h1 img {
    height: 4rem;
}

.wrapper {
    height: 1.5rem;
    display: flex;
}

p {
    font-size: 1.5rem;
}

span {
    font-size: 1.5rem;
    color: rgb(209, 209, 209);
}

.cta {
    margin-top: 2rem;
    width: 50%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.leftBar {
    background-image: linear-gradient(to left, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0));
    width: 30%;
    height: 3px;
}

.rightBar {
    background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0));
    width: 30%;
    height: 3px;
}

.card {
    position: absolute;
    bottom: -15vh;
    perspective: 1000px;
    transform-style: preserve-3d;
    width: 100vw;
    height: 65vh;
}

.card-item {
    transition: transform 0.2s;
}

.card-item img {
    width: 60vw;
}

.download {
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

.download:hover {
    background-size: 120%;
    color: var(--vt-c-white);
    letter-spacing: 0.1vw;
}

.space {
    height: calc(50vh - 5rem + 15vh);
}

@media (max-width: 1024px) {
    .card {
        bottom: -10vh;
        height: 50vh;
    }

    .cta {
        margin-top: 5rem;
    }
}

@media (max-width: 768px) {
    h1 {
        font-size: 2.5rem;
    }

    h1 .boxed {
        height: 3.5rem;
    }

    h1 img {
        height: 3.5rem;
    }

    .space {
        height: calc(50vh - 5rem);
    }

    .card {
        bottom: -5vh;
        height: 40vh;
    }

    .card-item img {
        width: 90vw;
    }
}

@media (max-width: 480px) {
    .card {
        display: none;
    }
    .hero-header {
        height: 70vh;
        padding: 0.2rem;
    }
    .space {
        height: 0;
    }
}
</style>