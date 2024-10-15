<template>
   <div class="container">
        <SkillList v-for="item in props.content" :key="item.id" :content="item" />
   </div>
</template>

<script setup>
    import { defineProps } from 'vue';
    import SkillList from '@/components/dynamicComponents/SkillList.vue';

    const props = defineProps(['content'])
</script>

<style scoped >
.container{
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
}
</style>