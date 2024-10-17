<template>
  <div class="menu d-flex justify-content-between align-items-center">
      <button
        class="show-button"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasExample"
        aria-controls="offcanvasExample"
      >
        <v-icon name="co-hamburger-menu" scale="1"/>
      </button>
      <div class="menu__logo">
        <router-link :to="{name: 'home'}">My Portfolio</router-link>
      </div>
      <button class="theme-toggle" @click="toggleTheme">
          <v-icon name="io-invert-mode-sharp" scale="1"/>
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
        <li><a class="nav-link" href="#home" @click.prevent="scrollToSection('home')">Home</a></li>
        <li><a class="nav-link" href="#projects" @click.prevent="scrollToSection('projects')">Projects</a></li>
        <li><a class="nav-link" href="#about" @click.prevent="scrollToSection('about')">About</a></li>
        <li><a class="nav-link" href="#skills" @click.prevent="scrollToSection('skills')">Skills</a></li>
        <li><a class="nav-link" href="#contact" @click.prevent="scrollToSection('contact')">Contact</a></li>
      </ul>
    </div>
  </div>
</template>
  
<script setup>
import { ref, onMounted } from 'vue';
import { Offcanvas } from 'bootstrap';

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

    const offcanvasElement = document.getElementById('offcanvasExample');
    const offcanvasInstance = Offcanvas.getInstance(offcanvasElement);
    if (offcanvasInstance) {
      offcanvasInstance.hide();
    }
  }
}
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
  z-index: 99;

  &__logo a {
    font-size: var(--text-font-size);
    color: var(--text-color);
    text-decoration: none;
    transition: color 0.3s;

    &:hover{
      color: var(--primary-color);
    }
  }
}
</style>
  