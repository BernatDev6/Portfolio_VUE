<template>
    <section class="projects d-flex flex-column align-items-center">
      <h2>My Projects</h2>
      <div class="project-list d-flex flex-wrap justify-content-center container">
        <div v-for="project in projects" :key="project.id" class="project-card">
          <img :src="project.img" :alt="project.title" class="project-image">
          <div class="project-info">
            <h3>{{ project.title }}</h3>
            <p>{{ project.description }}</p>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const projects = ref([
    {
      id: 1,
      title: "Project One",
      description: "This is the first project, showcasing a cool feature.",
      img: "https://via.placeholder.com/300"
    },
    {
      id: 2,
      title: "Project Two",
      description: "This is the second project, demonstrating a unique design.",
      img: "https://via.placeholder.com/300"
    },
    {
      id: 3,
      title: "Project Three",
      description: "This is the third project, featuring a responsive layout.",
      img: "https://via.placeholder.com/300"
    }
  ]);
  </script>
  
  <style scoped lang="scss">
  .projects {
    color: var(--text-color);
    text-align: center;
    background-color: var(--bg-secondary-color);
    padding: var(--large-spacing);

    .project-list {
      display: flex;
      flex-wrap: wrap;
      gap: var(--large-spacing);
    }
  
    .project-card {
      background-color: var(--bg-primary-color);
      padding: var(--base-spacing);
      border-radius: var(--border-radius);
      box-shadow: var(--box-shadow);
      text-align: left;
      width: 300px;
  
      .project-image {
        width: 100%;
        height: auto;
        border-radius: var(--border-radius);
      }
  
      .project-info {
        margin-top: var(--base-spacing);
  
        h3 {
          font-size: var(--text-font-size);
          margin-bottom: var(--small-spacing);
        }
  
        p {
          font-size: var(--small-text-font-size);
        }
      }
    }
  }
  </style>
  