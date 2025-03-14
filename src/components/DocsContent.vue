<script lang="ts">
import VueMarkdown from 'vue-markdown-render'
import { defineComponent, onMounted, ref } from 'vue'

export default defineComponent({
    name: 'MyComponent',
    components: {
        VueMarkdown
    },
    setup(props, ctx) {
        var src = ref('')
        const options = ref({
            html: true,
            linkify: true,
            typographer: true
        })

        var name = 'CastMate Documentation'

        const loadMarkdown = async (name: string) => {
            const response = await fetch(`/docs/${name}`)
            if (response.ok) {
                src.value = await response.text()
            } else {
                console.error(`Failed to load ${name}`)
            }
        }

        onMounted(() => {
            loadMarkdown(name + '.md')

            console.log(options.value)

            document.changePage = (name2: string) => {
                loadMarkdown(name2)
            }
        })

        return {
            src,
            options
        }
    }
})
</script>

<template>
    <div class="docscontent">
        <VueMarkdown :source="src" :options="options" />
    </div>
</template>

<style>
.docscontent {
    padding: 2vw;
}

.docscontent h1 {
    font-size: 3rem;
    font-weight: 700;
    margin: 5px 0;
    color: var(--vt-c-white);
}

.docscontent h2 {
    font-size: 2rem;
    font-weight: 600;
    margin: 5px 0;
    color: var(--vt-c-white);
}

.docscontent h3 {
    font-size: 1.25rem;
    font-weight: 500;
    margin: 5px 0;
    color: var(--vt-c-white);
}

.docscontent p {
    font-size: 1rem;
    font-weight: 400;
    margin: 5px 0;
    color: var(--vt-c-white);
}

.docscontent img {
    display: block;
    margin: 10px 0;
    max-width: 100%;
}

.card {
    color: var(--vt-c-white);
    font-family: Roboto, sans-serif;
    padding: 5px;
    padding-right: 0;
    border-radius: 4px;
    background-color: var(--main-color);
}

.card a, .warning a {
    color: var(--vt-c-white);
}

.card a:hover, .warning a:hover {
    color: var(--vt-c-white);
    background-color: transparent;
    cursor: default;
}

.card .name {
    font-size: 1.25rem;
    font-weight: 500;
    padding: .5rem 1rem;
}

.card .name span {
    margin-right: 5px;
}

.card .content {
    margin-left: 15px;
    padding: 16px;
    border-radius: 4px;
    margin-top: 5px;
    background-color: var(--background-color);
}

.card .content ul {
    list-style-type: none;
    padding: 10px;
    gap: 10px;
    display: flex;
    flex-direction: column;
}

.card .content ul li, .card .content ul li div {
    border-radius: 4px;
    background-color: var(--dark-color);
}

.card .content ul li div {
    display: flex;
    justify-content: left;
    align-items: center;
    background-color: var(--light-color);
}

.card .content ul li p {
    padding: 5px;
}

.card .content ul li .tag {
    background-color: rgba(255, 255, 255, 0.15);
    border-radius: 4px;
}

.card .content ul li .tag.scriptable::after {
    content: '{}';
    color: var(--vt-c-white);
    margin-left: 5px;
}

.warning {
    background-color: var(--dark-color);
    border-left: 10px solid #693906;
    border-radius: 4px;
    margin: 10px 0;
    display: flex;
    gap: 5px;
}

.warning .mdi {
    font-size: 1.5rem;
    padding: 10px;
}

.warning div {
    display: flex;
    flex-direction: column;
}

.warning div .title {
    font-size: 1.25rem;
    font-weight: 600;
}

.card li .warning {
    margin: 0 10px;
}

.card .content ul li div.warning {
    background-color: var(--dark-color);
}

.card .content ul li div.warning div {
    background-color: transparent;
}

li {
    color: var(--vt-c-white);
}
</style>