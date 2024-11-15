<template>
   <div class="container">
        <SkillProgress v-for="item in props.content" :key="item.id" :content="item" />
   </div>
</template>

<script setup>
    import { defineProps } from 'vue';
    import SkillProgress from '@/components/DynamicComponents/SkillProgress.vue';

    const props = defineProps(['content'])
</script>

<style scoped lang="scss">
.container{
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: var(--large-spacing);
}
</style>