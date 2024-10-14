<template>
  <section class="home">
    <div class="hero">
      <h1>Welcome to My Portfolio</h1>
      <p>I am a web developer passionate about creating stunning websites.</p>
      <button @click="exploreProjects">Explore My Projects</button>
    </div>

    <div class="features">
      <div class="card">
        <h2>Responsive Design</h2>
        <p>All my projects are mobile-friendly and look great on any device.</p>
      </div>
      <div class="card">
        <h2>Modern Technologies</h2>
        <p>I use the latest frameworks and libraries to build high-quality web applications.</p>
      </div>
      <div class="card">
        <h2>Custom Animations</h2>
        <p>I incorporate animations to make the user experience more engaging.</p>
      </div>
    </div>
  </section>
</template>

<script setup>
const exploreProjects = () => {
  console.log("Navigating to projects section...");
  // Aquí podrías agregar la lógica para navegar a la sección de proyectos
};
</script>

<style scoped lang="scss">
.home {
  padding: var(--large-spacing);
  text-align: center;

  .hero {
    background-color: var(--accent-color);
    color: var(--bg-color);
    padding: var(--large-spacing);
    border-radius: var(--border-radius);
    box-shadow: var(--box-shadow);
    margin-bottom: var(--large-spacing);

    h1 {
      font-size: var(--heading-font-size);
      margin-bottom: var(--base-spacing);
    }

    p {
      font-size: var(--text-font-size);
      margin-bottom: var(--base-spacing);
    }
  }

  .features {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: var(--base-spacing);

    .card {
      padding: var(--base-spacing);
      background-color: var(--bg-color);
      color: var(--text-color);
      border-radius: var(--border-radius);
      box-shadow: var(--box-shadow);
      transition: transform 0.3s;

      h2 {
        font-size: var(--subheading-font-size);
        margin-bottom: var(--small-spacing);
      }

      p {
        font-size: var(--text-font-size);
      }

      &:hover {
        transform: translateY(-5px);
      }
    }
  }
}
</style>
