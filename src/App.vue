<template>
  <MainMenu v-if="isDesktop" />
  <ResponsiveMenu v-else />
  <router-view/>
</template>

<script setup>
  import { ref, onMounted, onUnmounted } from 'vue';

  import MainMenu from './components/MainMenu.vue';
  import ResponsiveMenu from './components/ResponsiveMenu.vue';


  const isDesktop = ref(false);

  // Function to update the screen size
  const updateScreenSize = () => {
    // Check for the Bootstrap 'md' breakpoint (768px)
    isDesktop.value = window.innerWidth >= 768; // 'md' breakpoint
  };

  // Set up the event listener on mount
  onMounted(() => {
    updateScreenSize();
    window.addEventListener('resize', updateScreenSize);
  });

  // Clean up the event listener when the component is unmounted
  onUnmounted(() => {
    window.removeEventListener('resize', updateScreenSize);
  });
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
