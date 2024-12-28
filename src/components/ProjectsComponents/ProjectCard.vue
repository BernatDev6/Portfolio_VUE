<template>
    <a :href="url" class="project-card" target="_blank" rel="noopener noreferrer">
        <div>
            <div class="image-wrapper">
                <img :src="img" :alt="`Imagen de ${title}`" class="project-image" loading="lazy">
            </div>
            <div class="project-info">
                <router-link to="#">{{ title }}</router-link>
                <p>{{ description }}</p>
            </div>
        </div>
        <div class="project-button">
            <button class="visit-button">
                Visitar
                <div class="icon">
                <svg
                    height="24"
                    width="24"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M0 0h24v24H0z" fill="none"></path>
                    <path
                    d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                    fill="currentColor"
                    ></path>
                </svg>
                </div>
            </button>
        </div>
    </a>
</template>  
  
<script setup>
import { defineProps } from 'vue'
defineProps({
    img: String,
    url: String,
    title: String,
    description: String,
})
</script>

<style scoped lang="scss">
    .project-card {
        background-color: var(--bg-primary-color);
        padding: var(--base-spacing);
        border-radius: var(--border-radius);
        box-shadow: var(--box-shadow);
        text-align: left;
        cursor: pointer;
        width: 300px;
        color: var(--text-color);
        text-decoration: none;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: start;

        // .image-wrapper styles
        .image-wrapper {
            overflow: hidden;
            border-radius: var(--border-radius);
            width: 100%;
            height: 250px;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        // .project-image styles
        .project-image {
            width: 100%;
            height: 100%;
            transition: transform 0.3s ease-in-out;
        }

        &:hover {
            .project-image {
            transform: scale(1.2);
            }

            .visit-button {
            .icon {
                width: calc(100% - 0.45em);
            }

            .icon svg {
                color: var(--primary-color);
            }
            }
        }

        // .project-info styles
        .project-info {
            margin-top: var(--base-spacing);

            a {
                color: var(--text-color);
                font-size: var(--text-font-size);
                margin-bottom: var(--small-spacing);
            }

            p {
                font-size: var(--small-text-font-size);
            }
        }

        // .project-button styles
        .project-button {
            margin-top: var(--base-spacing);

            a {
            color: var(--text-color);
            text-decoration: none;
            }

            &:hover {
            a {
                color: var(--primary-color);
            }
            }
        }
    }

    // .visit-button styles
    .visit-button {
        background: linear-gradient(135deg, var(--primary-color), var(--title-color));
        color: #fafafa;
        padding-left: 1.2em;
        font-size: 18px;
        border-radius: var(--border-radius);
        border: none;
        letter-spacing: 0.1em;
        display: flex;
        align-items: center;
        position: relative;
        height: 2.8em;
        padding-left: 3.3em;
        cursor: pointer;

        // .icon inside visit-button
        .icon {
            background: #fafafa;
            position: absolute;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 2.4em;
            width: 2.4em;
            border-radius: var(--border-radius);
            left: 0.2em;
            top: 0.19em;
            transition: all 0.3s;
        }

        .icon svg {
            width: 1.1em;
            color: var(--primary-color);
        }
    }

</style>
  