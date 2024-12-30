<template>
  <section id="projects" class="projects">
      <h2>My Projects</h2>
      <div class="container project-list d-flex flex-wrap justify-content-center">
        <ProjectCard 
          v-for="project in projects" 
          :key="project.id" 
          :title="project.title" 
          :description="project.description" 
          :img="project.img"
          :url="project.url"
        />
      </div>
    </section>
  </template>
  
  <script setup>
  import ProjectCard from './ProjectCard.vue';
  import { ref } from 'vue';
  
  const projects = ref([
    {
      id: 1,
      title: "React components",
      description: "Explora una colección de componentes personalizables para React. Cada componente incluye ejemplos interactivos, código JSX y estilos CSS, diseñados para facilitar el desarrollo de tus aplicaciones web.",
      img: require("@/assets/images/ReactComponentsImg.avif"),
      url: "https://components-react-storage.vercel.app/"
    },
    {
      id: 2,
      title: "Comming soon...",
      description: "This is the second project, demonstrating a unique design.",
      img: "https://picsum.photos/id/26/300",
      url: "#"
    },
    {
      id: 3,
      title: "Comming soon...",
      description: "This is the third project, featuring a responsive layout.",
      img: "https://picsum.photos/id/36/300",
      url: "#"
    }
  ]);
  </script>
  
  <style scoped lang="scss">
  .projects {
    color: var(--text-color);
    background-color: var(--bg-secondary-color);
    padding: var(--large-spacing) 0;

    .project-list {
      display: flex;
      flex-wrap: wrap;
      gap: calc(var(--large-spacing) * 1.5);
    }
  }
  </style>
  