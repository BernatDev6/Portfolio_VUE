<template>
    <div class="list">
        <div class="w-100 d-flex justify-content-between">
            <p :style="{color: props.content.iconColor}">{{ props.content.name }}</p>
            <p :style="{color: props.content.iconColor}">{{ props.content.knowledge+'%' }}</p>
        </div>
        <div class="progress" role="progressbar" aria-label="Progress bar" :aria-valuenow="props.content.knowledge" aria-valuemin="0" aria-valuemax="100">
            <div
                class="progress-bar progress-bar-striped progress-bar-animated"
                :style="{ width: props.content.knowledge + '%', backgroundColor: props.content.iconColor}"
            ></div>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps(['content']);
</script>

<style scoped lang="scss">
.list {
    color: var(--text-color);
    background-color: var(--bg-primary-color);
    border-radius: var(--border-radius);
    width: 100%;
    max-width: 500px;
    padding: var(--base-spacing);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

p {
    margin: 0;
    font-size: var(--small-text-font-size)
}

.progress {
    width: 100%;
    margin: var(--base-spacing) 0;
}
</style>
