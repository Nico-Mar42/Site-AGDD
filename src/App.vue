<template>
  <!-- Écran de chargement (s'affiche au début) -->
  <Transition name="fade">
    <div v-if="isLoading" class="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-slate-900 text-white">
      <!-- Un petit cercle qui tourne -->
      <div class="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-white mb-4"></div>
      <!-- Un texte stylé -->
      <div class="font-serif text-2xl tracking-widest uppercase animate-pulse">Chargement...</div>
    </div>
  </Transition>

  <!-- Contenu du site (masqué tant que isLoading est vrai) -->
  <div 
    v-show="!isLoading"
    class="bg-black min-h-screen bg-cover bg-center flex justify-center items-center"
  >
    <router-view />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const isLoading = ref(true)

onMounted(() => {
  // Le navigateur déclenche l'événement 'load' quand TOUT est chargé (images, CSS, polices)
  if (document.readyState === 'complete') {
    isLoading.value = false
  } else {
    window.addEventListener('load', () => {
      isLoading.value = false
    })
  }

  // Sécurité : si un asset est trop long à charger, on force l'affichage après 5s
  setTimeout(() => {
    isLoading.value = false
  }, 5000)
})
</script>

<style>
/* Transition douce pour faire disparaître le loader */
.fade-leave-active {
  transition: opacity 0.8s ease;
}
.fade-leave-to {
  opacity: 0;
}
</style>