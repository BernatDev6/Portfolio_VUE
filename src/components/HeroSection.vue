<template>
  <section class="hero d-flex flex-md-row flex-column align-items-center justify-content-evenly">
    <div class="hero-text d-flex flex-column align-items-md-start align-items-center justify-content-evenly">
      <div class="text-md-start">
        <p>Hello!!!</p>
        <h1>Soy <span>Bernat Font</span>.</h1>
        <p>I am a web developer passionate about creating stunning websites.</p>
      </div>
      <button @click="exploreProjects" class="hero__button">Explore My Projects</button>
    </div>
    <div class="hero-image-wrapper d-none d-sm-block">
      <div class="hero-image">
        <img src="@/assets/images/HeroImg.png" alt="">
      </div>
    </div>
  </section>
</template>

<script setup>

</script>

<style scoped lang="scss">
.hero {
  padding-top: calc(var(--subheading-font-size) + (2*var(--base-spacing)));
  text-align: center;
  background-color: var(--bg-primary-color);
  box-shadow: var(--box-shadow);
  
  .hero-text {
    color: var(--text-color);
    padding: var(--large-spacing);
    max-width: 720px;
    margin-bottom: var(--large-spacing);

    h1 {
      font-size: var(--heading-font-size);

      span{
        color: var(--primary-color);
      }
    }

    p {
      margin-bottom: var(--base-spacing);
    }

    &__button {
      &:hover{
        background-color: var(--tertiary-color);
        color: var(--secondary-color);
      }
    }
  }

  .hero-image-wrapper {
    position: relative;
    padding: var(--large-spacing);
    background-color: var(--bg-secondary-color);
    clip-path: polygon(40% 15%, 90% 40%, 80% 80%, 20% 90%, 0% 40%);
    z-index: 1;
  }

  .hero-image {
    img {
      max-width: 100%;
      height: auto;
      width: 40vh;
      border-radius: 15px;
    }
  }
}
</style>
