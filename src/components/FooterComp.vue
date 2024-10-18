<template>
   <footer class="footer">
    <div>
        <p>Bernat Logo</p>
    </div>
    <div class="social-media">
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
    </footer>
</template>

<script setup>

</script>

<style scoped >
    .footer {
        padding: var(--large-spacing);
        background-color: var(--primary-color);
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        flex-wrap: wrap;
        gap: var(--large-spacing);
    }

    .social-media {
      display: flex;
      gap: var(--base-spacing);

      .social-icon {
        color: var(--text-color);
      }
    }

    p{
        color: var(--text-color);
        margin: 0;
    }
</style>