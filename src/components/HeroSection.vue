<template>
  <section class="hero d-flex flex-md-row flex-column align-items-center justify-content-evenly pt-5 pt-xl-0">
    <div class="hero-text d-flex flex-column align-items-md-start align-items-center justify-content-evenly">
      <div class="text-md-start">
        <p class="pt-4 pt-lg-0">Hello!!!</p>
        <h1>Me llamo <span>Bernat Font</span>.</h1>
        <p>I am a web developer passionate about creating stunning websites.</p>
      </div>
      <button @click="exploreProjects" class="hero__button">Explore My Projects</button>
    </div>
    <div class="hero-image d-none d-sm-block">
      <img src="@/assets/images/HeroImg.png" alt="">
    </div>
  </section>
</template>

<script setup>

</script>

<style scoped lang="scss">
.hero {
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
      font-size: var(--subheading-font-size);
      margin-bottom: var(--base-spacing);
    }

    &__button {
      &:hover{
        background-color: var(--tertiary-color);
        color: var(--secondary-color);
      }
    }
  }

  .hero-image{
    padding: var(--large-spacing);

    img {
      max-width: 100%;
      height: auto;
      width: 40vh;
    }
  }
}
</style>
