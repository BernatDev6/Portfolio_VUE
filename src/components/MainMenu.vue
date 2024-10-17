<template>
  <div class="header">
    <nav class="menu d-flex justify-content-between align-items-center">
      <div class="menu__logo">
        <router-link :to="{name: 'home'}">My Portfolio</router-link>
      </div>
      <ul class="menu__links d-flex align-items-center m-0">
        <li><a href="#home" @click.prevent="scrollToSection('home')">Home</a></li>
        <li><a href="#projects" @click.prevent="scrollToSection('projects')">Projects</a></li>
        <li><a href="#about" @click.prevent="scrollToSection('about')">About</a></li>
        <li><a href="#skills" @click.prevent="scrollToSection('skills')">Skills</a></li>
        <li><a href="#contact" @click.prevent="scrollToSection('contact')">Contact</a></li>
      </ul>
      <button @click="toggleTheme">
        <v-icon name="io-invert-mode-sharp"/>
      </button>
    </nav>
  </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  
  const isDarkMode = ref(false);
  
  const toggleTheme = () => {
    isDarkMode.value = !isDarkMode.value;
    document.documentElement.setAttribute(
      'data-theme',
      isDarkMode.value ? 'light' : 'dark'
    );
  };

  onMounted(() => {
    document.documentElement.setAttribute('data-theme', 'dark');
  });

  function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    const offset = 60;
    if (section) {
      const sectionPosition = section.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: sectionPosition, behavior: 'smooth' });
    }
  }

  </script>
  
  <style scoped lang="scss">
  .menu {
    position: fixed;
    width: 100%;
    padding: var(--base-spacing);
    background-color: #00000021;
    backdrop-filter: blur(10px); 
    color: var(--text-color);
    z-index: 99;
  
    &__logo a {
      font-size: var(--subheading-font-size);
      color: var(--text-color);
      text-decoration: none;
      transition: color 0.3s;

      &:hover{
        color: var(--primary-color);
      }
    }
  
    &__links {
      list-style: none;
      gap: var(--base-spacing);
  
      li a {
        text-decoration: none;
        color: var(--text-color);
        font-size: var(--small-text-font-size);
        transition: color 0.3s;
  
        &:hover {
          color: var(--primary-color);
        }
      }
    }
  }
  </style>
  