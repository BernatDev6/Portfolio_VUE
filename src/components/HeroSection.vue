<template>
  <section id="home" class="hero d-flex flex-md-row flex-column align-items-center justify-content-evenly">
    <div class="hero-text d-flex flex-column align-items-md-start align-items-center justify-content-evenly">
      <div class="text-md-start">
        <p>Hola!!!</p>
        <h1>Soy <span>Bernat Font</span>.</h1>
        <p>
          I am a web developer passionate about creating stunning websites.
          I am a web developer passionate about creating stunning websites.
          I am a web developer passionate about creating stunning websites.
        </p>
      </div>
      <button @click.prevent="scrollToSection('contact')" class="hero__button">Contacta with me</button>
      <div class="social-media gap-4 gap-md-2">
        <a 
          href="https://www.linkedin.com/in/bernat-font-gin%C3%A9-07508924b/" 
          target="_blank" 
          rel="noopener noreferrer" 
          class="social-icon"
          title="LinkedIn"
        >
          <v-icon name="bi-linkedin" scale="1.5"></v-icon>
        </a>
        <a 
          href="https://github.com/bernatdev6" 
          target="_blank" 
          rel="noopener noreferrer" 
          class="social-icon"
          title="GitHub"
        >
          <v-icon name="bi-github" scale="1.5"></v-icon>
        </a>
        <a 
          href="https://www.linkedin.com/in/bernat-font-gin%C3%A9-07508924b/" 
          target="_blank" 
          rel="noopener noreferrer" 
          class="social-icon"
          @click="openWhatsApp"
          title="WhatsApp"
        >
          <v-icon name="bi-whatsapp" scale="1.5"></v-icon>
        </a>
      </div>
    </div>
    <div class="hero-image-wrapper d-none d-sm-block">
      <div class="hero-image">
        <img src="@/assets/images/HeroImg.png" alt="">
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const phoneNumber = ref('654636920'); 
  
  const defaultMessage = ref('Hola Bernat, '); // Personaliza este mensaje
  
  const openWhatsApp = () => {
    const encodedMessage = encodeURIComponent(defaultMessage.value);
    const whatsappLink = `https://wa.me/${phoneNumber.value}?text=${encodedMessage}`;
    window.open(whatsappLink, '_blank');
  };

  function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    const offset = 60;
    if (section) {
      const sectionPosition = section.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: sectionPosition, behavior: 'smooth' });
    }
  }
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

    .social-media {
      display: flex;
      padding-top: var(--large-spacing);

      .social-icon {
        color: var(--text-color);
        transition: color 0.3s;

        &:hover {
          color: var(--primary-color);
        }
      }
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
