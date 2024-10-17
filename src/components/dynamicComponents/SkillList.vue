<template>
    <div class="list">
         <p :style="{color: props.content.iconColor}">{{ props.content.name }}</p>
    </div>
 </template>
 
 <script setup>
     import { defineProps } from 'vue';
 
     const props = defineProps(['content'])
 
 </script>
 
 <style scoped >
 .list {
    clip-path: polygon(0% 0%, 90% 0%, 100% 50%, 90% 100%, 0% 100%, 10% 50%);
    color: var(--text-color);
    background-color: var(--bg-primary-color);
    width: 100%;
    max-width: 300px;
    padding: var(--base-spacing);
    display: flex;
    justify-content: space-around;
    align-items: center;

    p {
        margin: 0;
    }
 }

 </style>