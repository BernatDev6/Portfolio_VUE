<template>
    <div class="menu d-flex justify-content-between align-items-center">
        <button
          class="show-button"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasExample"
          aria-controls="offcanvasExample"
        >
          <v-icon name="co-hamburger-menu" scale="1.5"/>
        </button>
        <div class="menu__logo">
          <router-link :to="{name: 'home'}">My Portfolio</router-link>
        </div>
        <button class="theme-toggle" @click="toggleTheme">
            <v-icon name="io-invert-mode-sharp" scale="1.5"/>
        </button>
    </div>
  
    <div
      class="offcanvas offcanvas-start"
      tabindex="-1"
      id="offcanvasExample"
      aria-labelledby="offcanvasExampleLabel"
    >
      <div class="offcanvas-header">
        <h3 class="offcanvas-title title" id="offcanvasExampleLabel">Bernat Font</h3>
        <button
          type="button"
          class="btn-close p-3"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div class="offcanvas-body">
        <ul class="list-unstyled list">
          <li>
            <router-link class="nav-link" :to="{ name: 'home' }">Home</router-link>
          </li>
          <li>
            <router-link class="nav-link" :to="{ name: 'home' }">About</router-link>
          </li>
          <li>
            <router-link class="nav-link" :to="{ name: 'home' }">Contact</router-link>
          </li>
          <li>
            <router-link class="nav-link" :to="{ name: 'home' }">Bootstrap Comp</router-link>
          </li>
        </ul>
      </div>
    </div>
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
  .offcanvas {
    background-color: var(--bg-primary-color);
    color: var(--text-color);
  
    .offcanvas-header {
      background-color: var(--bg-primary-color);
      color: var(--text-color);
      border-bottom: 1px solid var(--accent-color);

      .btn-close {
        box-shadow: none;
        background-color: #ffffff00;
        color: var(--primary-color);
        &:hover {
          color: var(--primary-color);
        }
      }
  
      .title {
        font-size: var(--heading-font-size);
        color: var(--primary-color);
        margin: 0;
      }
    }
  
    .offcanvas-body {
      padding: var(--base-spacing);
  
      .list {
        margin: 0;
        padding: 0;
        list-style: none;
  
        li {
          margin-bottom: var(--small-spacing);
  
          .nav-link {
            color: var(--text-color);
            font-size: var(--text-font-size);
            text-decoration: none;
            padding: var(--small-spacing);
            display: block;
            transition: background-color 0.3s, color 0.3s;
  
            &:hover {
              background-color: var(--bg-secondary-color);
              color: var(--primary-color);
            }
          }
        }
      }
    }
  }
  
  .menu{
    position: fixed;
    width: 100%;
    padding: var(--base-spacing);
    background-color: #00000021;
    backdrop-filter: blur(10px);

    &__logo a {
      font-size: var(--subheading-font-size);
      color: var(--text-color);
      text-decoration: none;
      transition: color 0.3s;

      &:hover{
        color: var(--primary-color);
      }
    }
  }
</style>
  