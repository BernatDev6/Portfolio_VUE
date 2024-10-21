<template>
  <MainLayout>
   <template #header>
    <MainMenu v-if="isDesktop" />
    <ResponsiveMenu v-else />
   </template>
  </MainLayout>
</template>

<script setup>
  import { ref, onMounted, onUnmounted } from 'vue';

  import MainLayout from '@/layouts/MainLayout.vue';
  import MainMenu from '@/components/MainMenu.vue';
  import ResponsiveMenu from '@/components/ResponsiveMenu.vue';


  const isDesktop = ref(false);

  // Function to update the screen size
  const updateScreenSize = () => {
    // Check for the Bootstrap 'md' breakpoint (768px)
    isDesktop.value = window.innerWidth >= 768; // 'md' breakpoint
  };

  onMounted(() => {
    updateScreenSize();
    window.addEventListener('resize', updateScreenSize);
  });

  // Clean up the event listener when the component is unmounted
  onUnmounted(() => {
    window.removeEventListener('resize', updateScreenSize);
  });
</script>

<style scoped >

</style>