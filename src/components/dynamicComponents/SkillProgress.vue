<template>
    <div class="list">
        <p>{{ props.content.name }}</p>
        <div class="progress" role="progressbar" aria-label="Progress bar" :aria-valuenow="props.content.knowledge" aria-valuemin="0" aria-valuemax="100">
            <div
                class="progress-bar progress-bar-striped progress-bar-animated"
                :style="{ width: props.content.knowledge + '%', backgroundColor: 'var(--primary-color)'}"
            >{{ props.content.knowledge+'%' }}</div>
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
    padding: var(--base-spacing);
    margin: var(--base-spacing) 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

p {
    margin: 0;
}

.progress {
    width: 100%;
    margin: var(--base-spacing) 0;
}
</style>
