<template>
    <div class="skill-card">
         <v-icon :name="props.content.icon" :style="{color: props.content.iconColor}"/>
         <p>{{ props.content.name }}</p>
    </div>
 </template>
 
 <script setup>
     import { defineProps } from 'vue';
 
     const props = defineProps(['content'])
 
 </script>
 
 <style scoped >
 svg {
    height: 100px;
    width: auto;
 }
 .skill-card {
     background-color: var(--bg-primary-color);
     padding: var(--small-spacing);
     border-radius: var(--border-radius);

     p {
        margin: 0;
        color: var(--text-color);
        font-size: var(--small-text-font-size)
     }
 }
 
 </style>