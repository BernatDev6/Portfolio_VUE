<template>
    <div class="header">
        <button
          class="show-button"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasExample"
          aria-controls="offcanvasExample"
        >
          <v-icon name="co-hamburger-menu" scale="1.5"/>
        </button>
        <span>Bernat Font</span>
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
    background-color: var(--bg-color);
    color: var(--text-color);
  
    .offcanvas-header {
      background-color: var(--primary-color);
      color: var(--bg-color);
      border-bottom: 1px solid var(--accent-color);
  
      .title {
        font-size: var(--heading-font-size);
        margin: 0;
      }
  
      .btn-close {
        background-color: var(--bg-color);
        color: var(--text-color);
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
              background-color: var(--accent-color);
              color: var(--bg-color);
            }
          }
        }
      }
    }
  }

  span{
    color: var(--text-color);
  }
  
  .header{
    padding: 12px;
    background-color: var(--bg-color);
    display: flex;
    justify-content: space-between;
  }

  button {
    padding: 4px;
    display: flex;
    justify-content: flex-start;
    background-color: var(--primary-color);
    color: var(--tertiary-color);
    transition: background-color 0.3s, border-color 0.3s;
  
    &:hover {
      background-color: var(--secondary-color);
      border-color: var(--secondary-color);
    }
  }
  </style>
  