<template>
    <a @click="confirmDownload"
        rel="noopener noreferrer" 
        class="social-icon icon-cv"
        title="Descargar CV"
        aria-label="CV de Bernat Font"
    >
        <v-icon name="ai-cv"></v-icon>
    </a>
  
    <!-- Modal de vista previa -->
    <div v-if="isPreviewVisible" class="modal-overlay" @click.self="closePreview">
      <div class="modal-content">
        <iframe :src="pdfUrl" width="100%" height="500px" style="border: none;"></iframe>
        <button @click="closePreview" class="close-btn"><v-icon name="io-close"></v-icon></button>
      </div>
    </div>
  </template>
  
  <script setup>
  import Swal from "sweetalert2";
  import { ref } from "vue";
  
  // Controlar si mostrar el modal de vista previa
  const isPreviewVisible = ref(false);
  const pdfUrl = ref("/files/My_CV.pdf");
  
  const confirmDownload = () => {
    Swal.fire({
      title: "Qué deseas hacer con el CV?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Vista Previa",
      cancelButtonText: "Cancelar",
      showDenyButton: true,
      denyButtonText: "Descargar",
      customClass: {
      denyButton: 'btn-swal-download' // Cambiar el color del botón Deny
    },
    }).then((result) => {
      if (result.isConfirmed) {
        // Mostrar vista previa en el modal
        showPreview();
      } else if (result.isDenied) {
        // Descargar archivo
        downloadCV();
      }
    });
  };
  
  // Función para mostrar la vista previa en el modal
  const showPreview = () => {
    isPreviewVisible.value = true;
  };
  
  // Función para cerrar el modal de vista previa
  const closePreview = () => {
    isPreviewVisible.value = false;
  };
  
  // Función para descargar el CV
  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = "/files/My_CV.pdf";
    link.download = "Bernat_Font_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  </script>
  
  <style scoped>
    .icon-cv {
        color: var(--text-color);
    }

  /* Estilos del overlay (fondo oscuro que cubre la pantalla) */
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }
  
  /* Estilos del contenido del modal */
  .modal-content {
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    width: 80%;
    max-width: 800px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    position: relative;
  }
  
  /* Botón para cerrar el modal */
  .close-btn {
    position: absolute;
    top: 10px;
    right: 10px;
    background-color: #f44336;
    color: white;
    border: none;
    padding: 10px;
    cursor: pointer;
    border-radius: 5px;
    font-size: 16px;
  }
  
  .close-btn:hover {
    background-color: #d32f2f;
  }
  </style>
  