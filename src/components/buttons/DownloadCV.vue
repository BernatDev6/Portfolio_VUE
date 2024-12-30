<template>
    <a @click="confirmDownload"
        rel="noopener noreferrer" 
        class="social-icon"
        title="Descargar CV"
        aria-label="CV de Bernat Font"
    >
        <v-icon name="ai-cv"></v-icon>
    </a>
</template>

<script setup>
import Swal from "sweetalert2";

const confirmDownload = () => {
Swal.fire({
    title: "Quieres descargar el CV?",
    icon: "question",
    showCancelButton: true,
    confirmButtonText: "Download",
    cancelButtonText: "Cancel",
}).then((result) => {
    if (result.isConfirmed) {
        const link = document.createElement("a");
        link.href = "/files/My_CV.pdf";
        link.download = "Bernat_Font_CV.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
});
};
</script>  