<template>
  <section id="home" class="hero d-flex flex-lg-row flex-column-reverse align-items-center justify-content-evenly px-xl-5">
    <div class="hero-text d-flex flex-column align-items-lg-start align-items-center justify-content-evenly">
      <div class="text-start">
        <h1 class="primary-color">Bernat Font</h1>
        <p>
          Soy un desarrollador web apasionado por crear experiencias digitales intuitivas y visualmente atractivas. Me especializo en construir aplicaciones modernas, combinando diseño en el frontend y solidez funcional en el backend.
          <br>
          Explora mi portafolio y descubre cómo puedo ayudarte a dar vida a tu próximo proyecto.
        </p>
      </div>
      <button @click.prevent="scrollToSection('contact')" class="hero__button my-3">Contactame</button>
      <div class="social-media gap-4 gap-lg-3 mb-3">
        <a 
          href="https://www.linkedin.com/in/bernat-font-gin%C3%A9-07508924b/" 
          target="_blank" 
          rel="noopener noreferrer" 
          class="social-icon"
          title="LinkedIn"
          aria-label="LinkedIn de Bernat Font"
        >
          <v-icon name="bi-linkedin"></v-icon>
        </a>
        <a 
          href="https://github.com/bernatdev6" 
          target="_blank" 
          rel="noopener noreferrer" 
          class="social-icon"
          title="GitHub"
          aria-label="GitHub de Bernat Font"
        >
          <v-icon name="bi-github"></v-icon>
        </a>
        <a 
          href="https://www.linkedin.com/in/bernat-font-gin%C3%A9-07508924b/" 
          target="_blank" 
          rel="noopener noreferrer" 
          class="social-icon"
          @click="openWhatsApp"
          title="WhatsApp"
          aria-label="WhatsApp de Bernat Font"
        >
          <v-icon name="bi-whatsapp"></v-icon>
        </a>
        <DownloadCV />
      </div>
    </div>
    <div class="hero-image flex-shrink-0 m-4">
        <img src="@/assets/images/HeroImg.avif" alt="imagen de Bernat Font" loading="lazy">
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import DownloadCV from './buttons/DownloadCV.vue';

const phoneNumber = ref('654636920'); 

const defaultMessage = ref('Hola Bernat, ');

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

<style lang="scss">
.hero {
  padding-top: calc(var(--subheading-font-size) + (2*var(--base-spacing)));
  text-align: center;
  background-color: var(--bg-primary-color);
  box-shadow: var(--box-shadow);
  
  .hero-text {
    color: var(--text-color);
    padding: var(--large-spacing);
    max-width: 1200px;

    p {
      margin-bottom: var(--base-spacing);
    }

    .social-media {
      display: flex;
      padding-top: var(--large-spacing);

      .social-icon {
        color: var(--text-color);
        transition: color 0.3s;
        cursor: pointer;

        &:hover {
          color: var(--primary-color);
        }
      }
    }

    &__button {
      &:hover {
        background-color: var(--tertiary-color);
        color: var(--secondary-color);
      }
    }
  }

  .hero-image {
    background-color: var(--bg-secondary-color);
    border-radius: 61% 39% 57% 43% / 66% 53% 47% 34%;
    overflow: hidden;
    max-width: 600px;
    aspect-ratio: 4 / 4;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform .3s ease;
    }

    &:hover {
      img {
        transform: scale(1.1);
      }
    }
  }
}
</style>
