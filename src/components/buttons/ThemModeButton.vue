<template>
    <label class="input9">
      <input 
        type="checkbox" 
        class="input9__input" 
        @change="toggleTheme" 
        :checked="isDarkMode" 
      />
      <span class="input9__slider"></span>
    </label>
  </template>
  
  <script setup>
  import { ref, onMounted, watch } from 'vue';
  
  const isDarkMode = ref(false);
  
  const toggleTheme = () => {
    isDarkMode.value = !isDarkMode.value;
    document.documentElement.setAttribute(
      'data-theme',
      isDarkMode.value ? 'dark' : 'light'
    );
  };
  
  onMounted(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    isDarkMode.value = savedTheme === 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
  });
  
  watch(isDarkMode, (newValue) => {
    const theme = newValue ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
  });
  </script>

<style scoped >
.input9 {
  font-size: 16px;
  position: relative;
  display: inline-block;
  width: 3.5em;
  height: 2em;
}

.input9__input {
  opacity: 0;
  width: 0;
  height: 0;
}

.input9__slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #afafaf;
  transition: .6s;
  border-radius: 30px;
}

.input9__slider:before {
  position: absolute;
  content: "";
  height: 1.4em;
  width: 1.4em;
  border-radius: 50%;
  left: 10%;
  bottom: 16%;
  box-shadow: inset 15px -4px 0px 15px var(--bg-secondary-color);
  transition: .6s;
}

.input9__input:checked + .input9__slider {
  background-color: #666666;
}

.input9__input:checked + .input9__slider:before {
  transform: translateX(100%);
  box-shadow: inset 8px -4px 0px 0px var(--bg-secondary-color);
}
</style>