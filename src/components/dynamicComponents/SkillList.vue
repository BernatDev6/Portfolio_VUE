<template>
    <div class="list">
         <p>{{ props.content.name }}</p>
         <p>Conocimiento: {{ props.content.knowledge }}</p>
         <p>{{ props.content.img }}</p>
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
    padding: var(--base-spacing);
    margin: var(--base-spacing) 0;
    display: flex;
    justify-content: space-around;
    align-items: center;

    p {
        margin: 0;
    }
 }
 
 </style>