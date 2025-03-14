<script setup lang="ts">
import { onMounted } from 'vue'

import DocsPath from '../../docs/path.json'

function generateSidebarHTML(data: any) {
    function processNode(node: any, currentPath = '') {
        let html = '';

        // Traitement des fichiers avec chemin complet
        if (node.file) {
            node.file.forEach((file: string) => {
                const fileName = file.replace(/\.md$/, '');
                const fullPath = `${currentPath}${file}`;
                // Échappement des apostrophes pour le JavaScript
                const safePath: string = fullPath.replace(/'/g, "\\'");
                html += `<a onclick="document.changePage('${safePath}'); document.toggleSidebar()">${fileName}</a>`;
            });
        }

        // Traitement des répertoires avec construction du chemin
        if (node.dir) {
            node.dir.forEach((dir: any) => {
                html += `<button class="accordion">${dir.name}</button>`;
                html += `<div class="panel">`;
                const nestedPath = `${currentPath}${dir.name}/`;
                html += processNode(dir, nestedPath); // Chemin imbriqué
                html += `</div>`;
            });
        }

        return html;
    }

    return processNode(data);
}

onMounted(() => {
    const sidebarHTML = generateSidebarHTML(DocsPath);
    const sidebar = document.querySelector('.sidebar');

    if (sidebar) {
        sidebar.innerHTML = sidebarHTML;
    }

    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function (this: HTMLElement) {
            this.classList.toggle("active");
            var panel = this.nextElementSibling as HTMLElement;
            extend(panel);
        });
    }
});

function extend(panel: HTMLElement, extend2: boolean = false, addition: number = 0) {
    if (panel === null) return;
    if (!panel.classList.contains('panel')) {
        return;
    }
    if (panel.style.maxHeight && !extend2) {
        panel.style.removeProperty('max-height');
    } else {
        panel.style.maxHeight = panel.scrollHeight + addition + "px";
        if (panel.parentElement) {
            extend(panel.parentElement, true, addition + panel.scrollHeight);
        }
    }
}
</script>

<template>
    <div class="sidebarAnim">
        <div class="sidebar">
            <button class="accordion">Get Started</button>
            <div class="panel">
                <a>Introduction</a>
                <a>Quick Start</a>
            </div>

            <button class="accordion">Essentials</button>
            <div class="panel">
                <a>Overlay</a>
                <a>Profiles</a>
                <a>Stream Plans</a>
                <a>Templates</a>
            </div>

            <button class="accordion">Essentials</button>
            <div class="panel">
                <button class="accordion">Section 2</button>
                <div class="panel">
                    <p>Lorem ipsum...</p>
                </div>

                <button class="accordion">Section 3</button>
                <div class="panel">
                    <p>Lorem ipsum...</p>
                </div>
            </div>

            <button class="accordion">Section 2</button>
            <div class="panel">
                <p>Lorem ipsum...</p>
            </div>

            <button class="accordion">Section 3</button>
            <div class="panel">
                <p>Lorem ipsum...</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.sidebarAnim {
    height: 100%;
}

.sidebar {
    position: fixed;
    height: 100%;
    background-color: var(--vt-c-black);
    color: var(--vt-c-white);
}
</style>

<style>
.sidebar a {
    display: block;
    padding: 12px;
    text-decoration: none;
    color: var(--vt-c-white);
    background-color: var(--vt-c-black);
}

.sidebar .panel {
    padding-left: 18px;
    background-color: var(--vt-c-black);
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.2s ease-out;
}

.sidebar .panel a {
    display: block;
    padding: 12px;
    text-decoration: none;
    color: var(--vt-c-white);
    height: 100%;
}

.sidebar .accordion {
    background-color: var(--vt-c-black-mute);
    color: var(--vt-c-white);
    cursor: pointer;
    padding: 18px;
    width: 100%;
    text-align: left;
    border: none;
    outline: none;
    transition: 0.4s;
}

.sidebar .active,
.sidebar .accordion:hover {
    background-color: var(--vt-c-black-mute-2);
}

.sidebar .accordion:after {
    content: '\02795';
    /* Unicode character for "plus" sign (+) */
    font-size: 13px;
    color: #777;
    float: right;
    margin-left: 5px;
}

.sidebar .active:after {
    content: "\2796";
    /* Unicode character for "minus" sign (-) */
}
</style>