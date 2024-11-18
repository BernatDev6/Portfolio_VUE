<template>
    <header>
        <slot name="header"></slot>
    </header>
    <div class="home">
      <HeroSection />
      <ProjectSection />
      <div class="section-divider"></div>
      <AboutSection />
      <div class="section-divider"></div>
      <SkillsSection />
      <div class="section-divider"></div>
      <ContactSection />
      <FooterComp />
    </div>
  </template>
  
  <script setup>
  import AboutSection from '@/components/AboutSection.vue';
  import ContactSection from '@/components/ContactSection.vue';
  import SkillsSection from '@/components/DynamicComponents/SkillsSection.vue';
  import FooterComp from '@/components/FooterComp.vue';
  import HeroSection from '@/components/HeroSection.vue'
  import ProjectSection from '@/components/ProjectsComponents/ProjectSection.vue';
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
  