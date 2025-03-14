<template>
    <div class="wrapper">
        <div class="card">
            <h1>Contact Us</h1>
            <div class="grid">
                <a href="https://discord.gg/txt4DUzYJM" class="contact">
                    <h2>Discord</h2>
                    <p>Lordtocs' Castle</p>
                </a>
                <a href="mailto:lordtocs@gmail.com" class="contact">
                    <h2>Email</h2>
                    <p>lordtocs@gmail.com</p>
                </a>
            </div>
        </div>
    </div>
</template>

<style scoped>
.card {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    border-radius: 1rem;
    margin: calc(5.5vh - 1px) auto;
    perspective: 1000px;
    transform-style: preserve-3d;
    background-clip: content-box;
    height: 50vh;
    width: 80vw;
    padding: 1rem;
    background: var(--vt-c-black);
}

.grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
}

.contact {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: var(--vt-c-black-mute);
    padding: 1rem;
    border-radius: 1rem;
    width: 10rem;
    height: 10rem;
}

h1 {
    font-size: 2rem;
    font-weight: 700;
    margin: 0.5rem 0;
    background: linear-gradient(132deg, #0860ff, #d654ff);
    background-clip: text;
    color: transparent;
}

h2 {
    font-size: 1.5rem;
    font-weight: 500;
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

@media (max-width: 768px) {
    .grid {
        grid-template-columns: 1fr;
    }
}

@media (max-width: 480px) {
    .card {
        flex-direction: column;
        height: 70vh;
    }
}
</style>