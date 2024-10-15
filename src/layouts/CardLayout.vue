<template>
    <div class="container">
         <SkillCard v-for="item in props.content" :key="item.id" :content="item" />
    </div>
 </template>
 
 <script setup>
     import { defineProps } from 'vue';
     import SkillCard from '@/components/dynamicComponents/SkillCard.vue';
 
     const props = defineProps(['content'])
 </script>
 
 <style scoped >
 .container{
     display: flex;
     justify-content: center;
     align-items: flex-start;
     flex-wrap: wrap;
     gap: var(--large-spacing)
 }
 </style>