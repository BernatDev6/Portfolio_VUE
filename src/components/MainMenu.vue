<template>
    <nav class="menu">
      <div class="menu__logo">
        <router-link :to="{name: 'home'}">My Portfolio</router-link>
      </div>
      <ul class="menu__links">
        <li><router-link :to="{name: 'home'}">Home</router-link></li>
        <li><router-link :to="{name: 'home'}">Projects</router-link></li>
        <li><router-link :to="{name: 'home'}">Contact</router-link></li>
      </ul>
      <button class="theme-toggle" @click="toggleTheme">
        <v-icon name="io-invert-mode-sharp"/>
      </button>
    </nav>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const isDarkMode = ref(false);
  
  const toggleTheme = () => {
    isDarkMode.value = !isDarkMode.value;
    document.documentElement.setAttribute(
      'data-theme',
      isDarkMode.value ? 'dark' : 'light'
    );
  };
  </script>
  
  <style scoped lang="scss">
  .menu {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: var(--base-spacing);
    background-color: var(--bg-color);
    color: var(--text-color);
    box-shadow: var(--box-shadow);
  
    &__logo a {
      font-size: var(--heading-font-size);
      color: var(--primary-color);
      text-decoration: none;
    }
  
    &__links {
      list-style: none;
      display: flex;
      gap: var(--base-spacing);
  
      li a {
        text-decoration: none;
        color: var(--text-color);
        font-size: var(--text-font-size);
  
        &:hover {
          color: var(--accent-color);
        }
      }
    }

    span{
      color: var(--text-color);
    }
  
    .theme-toggle {
      background-color: var(--primary-color);
      color: var(--bg-color);
      border: none;
      padding: var(--small-spacing) var(--base-spacing);
      border-radius: var(--border-radius);
      cursor: pointer;
      transition: background-color 0.3s;
  
      &:hover {
        background-color: var(--secondary-color);
      }
    }
  }
  </style>
  