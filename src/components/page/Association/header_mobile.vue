<template>
  <nav class="w-full bg-slate-800 shadow-lg px-4 py-2 flex flex-col h-20 items-center relative z-50">
    <!-- Logo centré avec ombre -->
    <router-link to="/" class="flex justify-center  items-center mb-2">
      <img :src="logo" alt="Logo" class="w-[8rem] p-[] rounded-full shadow-md bg-slate-800 " />
    </router-link>

    <!-- Hamburger menu (inchangé) -->
    <button
        @click="menuOpen = !menuOpen"
        class="absolute right-4 top-6 z-50 flex flex-col justify-center items-center w-10 h-10"
        aria-label="Ouvrir/fermer le menu"
        >
        <template v-if="!menuOpen">
            <!-- Burger -->
            <span class="block w-8 h-1 bg-white rounded transition-all duration-300"></span>
            <span class="block w-8 h-1 bg-white rounded my-1 transition-all duration-300"></span>
            <span class="block w-8 h-1 bg-white rounded transition-all duration-300"></span>
        </template>
        <template v-else>
            <!-- Croix (X) -->
            <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
        </template>
    </button>

    <!-- Overlay (pour effet fondu, ferme le menu au clic) -->
    <transition name="fade">
    <div
        v-if="menuOpen"
        class="fixed inset-0 bg-black bg-opacity-40 z-40"
        @click="menuOpen = false"
    ></div>
    </transition>

    <!-- Drawer menu à droite -->
    <transition name="fade">
    <div
        v-if="menuOpen"
        class="fixed top-20 right-0 h-full w-64 bg-slate-700 rounded-l-2xl shadow-xl p-4 flex flex-col gap-2 z-50 transition-transform duration-300"
        style="max-width: 90vw;"
    >
        <router-link to="/association" class="block text-gold font-bold text-center mb-2">L’ASSOCIATION</router-link>
        <router-link to="/association" class="menu-link">Présentation</router-link>
        <router-link to="/association/agenda" class="menu-link">Agenda</router-link>
        <router-link to="/association/contact" class="menu-link">Contact</router-link>
        <router-link to="/association/reseaux" class="menu-link">Réseaux</router-link>
        <div class="border-b border-gold my-2"></div>
        <router-link to="/twitch" class="block text-gold font-bold text-center mb-2">ACTUAL PLAY</router-link>
        <router-link to="/twitch" class="menu-link">La Chaîne</router-link>
        <router-link to="/twitch/cyberpunk" class="menu-link">Cyberpunk</router-link>
        <router-link to="/twitch/dragons" class="menu-link">Dragons</router-link>
        <router-link to="/twitch/terra-nova" class="menu-link">Terra Nova</router-link>
    </div>
    </transition>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import logo from '../../../assets/logo.png'

const menuOpen = ref(false)
</script>

<style scoped>
.text-gold {
  color: #FFD700;
}
.border-gold {
  border-color: #FFD700;
}
.menu-link {
  @apply block px-4 py-2 text-white rounded-lg text-lg text-center transition;
}
.menu-link:hover {
  background-color: #FFD700;
  color: #000;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

</style>