<template>
    <div class="card">
         <h3>{{ props.content.name }}</h3>
         <p>Conocimiento: {{ props.content.knowledge }}</p>
         <p>Conocimiento: {{ props.content.img }}</p>
    </div>
 </template>
 
 <script setup>
     import { defineProps } from 'vue';
 
     const props = defineProps(['content'])
 
 </script>
 
 <style scoped >
 .card {
     background-color: var(--bg-primary-color);
     color: var(--text-color);
     border-radius: var(--border-radius);
     padding: var(--base-spacing);
     margin: 30px;
     min-width: 250px;
     display: flex;
     flex-direction: column;
 }
 
 </style>