<template>
    <section id="contact" class="contact-section">
      <h2>Contact</h2>
      <form ref="formRef" @submit.prevent="sendEmail" class="container contact-form">
        <label for="user_name">Nombre <span>*</span></label>
        <input
          type="text"
          id="user_name"
          name="user_name"
          v-model="form.user_name"
          maxlength="40"
          :class="{ invalid: !form.user_name && showError }"
        />
  
        <label for="user_surname">Apellidos</label>
        <input
          type="text"
          id="user_surname"
          name="user_surname"
          v-model="form.user_surname"
          maxlength="40"
        />
  
        <label for="user_email">Email <span>*</span></label>
        <input
          type="email"
          id="user_email"
          name="user_email"
          v-model="form.user_email"
          maxlength="100"
          :class="{ invalid: !form.user_email && showError }"
        />
  
        <label for="message">Mensaje <span>*</span></label>
        <textarea
          id="message"
          name="message"
          v-model="form.message"
          maxlength="500"
          :class="{ invalid: !form.message && showError }"
        ></textarea>
  
        <!-- Mensaje de error -->
        <p v-if="errorMessage" class="error" v-html="errorMessage"></p>
  
        <button type="submit" class="mt-4">Enviar</button>
      </form>
    </section>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import emailjs from '@emailjs/browser';
  import Swal from 'sweetalert2';
  
  const errorMessage = ref('');
  const showError = ref(false); // Para resaltar los campos inválidos
  const form = ref({
    user_name: '',
    user_surname: '',
    user_email: '',
    message: '',
  });
  
  const formRef = ref(null);
  
  const sendEmail = () => {
    // Validaciones
    if (!form.value.user_name || !form.value.user_email || !form.value.message) {
      showError.value = true;
      errorMessage.value =
        "<span class='error-icon'>⚠️ </span> Campos obligatorios (*) vacíos.";
      return;
    }
  
    // Si pasa las validaciones, enviar el formulario
    showError.value = false;
    emailjs
      .sendForm('service_19utkcs', 'template_w1vgou6', formRef.value, {
        publicKey: 'r6AC_t7FNYG0VEZjk',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          Swal.fire({
            icon: 'success',
            title: '¡Correo enviado!',
            text: 'Tu mensaje ha sido enviado con éxito.',
            confirmButtonText: 'Aceptar',
          });

          // Reset del errorMesage
          errorMessage.value = "" 
          
          // Reset del formulario
          form.value = {
            user_name: '',
            user_surname: '',
            user_email: '',
            message: '',
          };
        },
        (error) => {
          console.log('FAILED...', error.text);
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Tu mensaje no se ha podido enviar.',
            confirmButtonText: 'Aceptar',
          });
        }
      );
  };
  </script>
  
  <style scoped lang="scss">
  .contact-section {
    background-color: var(--bg-secondary-color);
    padding: 0 var(--base-spacing) calc(var(--large-spacing) * 2) var(--base-spacing);
  }
  
  .contact-form {
    background-color: var(--bg-primary-color);
    border-radius: var(--border-radius);
    padding: var(--large-spacing);
    box-shadow: var(--box-shadow);
    max-width: 500px;
  
    label,
    p {
      width: 100%;
      text-align: left;
      font-size: var(--text-font-size);
      color: var(--text-color);
      margin-bottom: var(--small-spacing);
  
      &.error {
        color: var(--error-color);
        font-weight: bold;
        margin-top: var(--base-spacing);
      }
  
      span {
        color: var(--primary-color);
      }
    }
  
    input[type='text'],
    input[type='email'],
    textarea {
      width: 100%;
      padding: var(--small-spacing);
      margin-bottom: var(--large-spacing);
      border-radius: var(--border-radius);
      border: 1.5px solid var(--bg-secondary-color);
      font-size: var(--small-text-font-size);
      background-color: var(--bg-secondary-color);
      color: var(--text-color);
  
      &:focus {
        background-color: var(--bg-secondary-color);
        color: var(--text-color);
        border-color: var(--primary-color);
        outline: none;
      }
  
      &:-webkit-autofill {
        -webkit-text-fill-color: var(--text-color);
        box-shadow: 0 0 0px 1000px var(--bg-secondary-color) inset;
      }

      &.invalid {
        border: 1.5px solid var(--error-color);
      }
    }
  
    textarea {
      min-height: 100px;
      resize: none;
      margin-bottom: 0;
    }
  }  
  </style>
  