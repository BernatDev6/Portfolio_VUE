<template>
  <div class="home">
    <HeroSection />
    <ProjectSection />
    <div class="section-divider"></div>
    <SkillsSection />
    <div class="section-divider"></div>
  </div>
</template>

<script setup>
import HeroSection from '@/components/HeroSection.vue'
import ProjectSection from '@/components/ProjectSection.vue';
import SkillsSection from '@/components/SkillsSection.vue';
</script>

<style scoped lang="scss">
.section-divider {
  display: flex;
  justify-content: center;
  padding: var(--large-spacing) 0;
  background-color: var(--bg-secondary-color);

  &::before {
    content: '';
    width: 80%;
    height: 2px;
    background: repeating-linear-gradient(
      to right,
      var(--primary-color) 0,
      var(--primary-color) 6px,
      transparent 2px,
      transparent 16px
    );
  }
}

</style>
