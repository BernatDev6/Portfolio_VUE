<template>
    <div class="project-card">
        <div class="image-wrapper">
            <img :src="img" :alt="`Imagen de ${title}`" class="project-image">
        </div>
        <div class="project-info">
            <router-link to="#">{{ title }}</router-link>
            <p>{{ description }}</p>
        </div>
    </div>
  </template>
  
  <script setup>
    import { defineProps } from 'vue'
    defineProps(['title', 'description', 'img']);
  </script>

  <style scoped lang="scss">
.project-card {
    background-color: var(--bg-primary-color);
    padding: var(--base-spacing);
    border-radius: var(--border-radius);
    box-shadow: var(--box-shadow);
    text-align: left;
    width: 300px;

    .image-wrapper {
        overflow: hidden;
        border-radius: var(--border-radius);
        position: relative;
    }

    .project-image {
        object-fit: cover;
        transform: scale(1);
        transition: transform 0.3s ease-in-out;
    }

    &:hover {
        .project-image {
        transform: scale(1.2);
        }
    }

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
}
</style>
  