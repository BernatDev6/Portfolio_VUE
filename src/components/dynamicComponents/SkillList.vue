<template>
    <div class="list">
         <p :style="{color: props.content.iconColor}">{{ props.content.name }}</p>
         <p>Conocimiento: {{ props.content.knowledge }}</p>
    </div>
 </template>
 
 <script setup>
     import { defineProps } from 'vue';
 
     const props = defineProps(['content'])
 
 </script>
 
 <style scoped >
 .list {
    color: var(--text-color);
    background-color: var(--bg-primary-color);
    border-radius: 12px;
    width: 100%;
    max-width: 500px;
    padding: var(--base-spacing);
    display: flex;
    justify-content: space-around;
    align-items: center;

    p {
        margin: 0;
    }
 }

 </style>