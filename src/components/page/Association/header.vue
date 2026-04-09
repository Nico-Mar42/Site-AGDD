<template>
  <nav
    class="relative flex items-center justify-around min-h-[6rem] w-[75%] max-w-5xl mx-auto mt-16 mb-4 p-4 rounded-lg bg-black bg-opacity-30"
    :style="{ 
      backgroundImage: `url(${cadrehead})`,
      backgroundSize: '100% 100%',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }"
  >
    <!-- Ligne principale -->
    <div class="flex flex-row items-center justify-around w-full relative px-12">
      <!-- Texte gauche + dropdown -->
      <div class="flex-1 flex justify-start pl-2">
        <div class="relative group" @mouseleave="delayedClose('association')" @mouseenter="openMenu('association')">
          <router-link
            class="text-white text-xl font-bold font-cinzel uppercase tracking-wide hover:text-gold transition"
            to="/association"
            @mouseenter="openMenu('association')"

          >
            L’ASSOCIATION
          </router-link>
          <div
            v-if="showAssociation"
            @mouseenter="openMenu('association')"
            @mouseleave="delayedClose('association')"
            class="absolute left-0 mt-2 w-48 rounded-lg p-4 shadow-lg z-50 bg-slate-800"
            :style="{
              backgroundImage: `url(${cadre})`,
              backgroundSize: '100% 100%',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }"
          >
            <router-link to="/association" class="block px-4 text-lg py-2 text-white hover:bg-gold hover:text-black">Présentation</router-link>
            <router-link to="/association/contact" class="block px-4 text-lg py-2 text-white hover:bg-gold hover:text-black">Contact</router-link>
            <router-link to="/association/reseaux" class="block px-4 text-lg py-2 text-white hover:bg-gold hover:text-black">Réseaux</router-link>
            <router-link to="/association/agenda" class="block px-4 text-lg py-2 text-white hover:bg-gold hover:text-black">Agenda</router-link>
          </div>
        </div>
      </div>

      <!-- Logo centré et au-dessus du cadre -->
      <router-link
        to="/"
        class="absolute left-1/2 -translate-x-1/2 -top-20 z-30 flex justify-center items-center"
        style="width: 13rem; height: 13rem;"
      >
        <img
          :src="logo"
          alt="Logo"
          class="w-full h-full hover:grayscale hover:w-[95%] object-contain"
        />
      </router-link>

      <!-- Texte droit + dropdown -->
      <div class="flex-1 flex justify-end pr-6">
        <div class="relative group" @mouseleave="delayedClose('actualPlay')" @mouseenter="openMenu('actualPlay')">
          <router-link
            class="text-white text-xl font-bold font-cinzel uppercase tracking-wide hover:text-gold transition"
            @mouseenter="openMenu('actualPlay')"
            to="/twitch/"
          >
            ACTUAL PLAY
          </router-link>
          <div
            v-if="showActualPlay"
            @mouseenter="openMenu('actualPlay')"
            @mouseleave="delayedClose('actualPlay')"
            class="absolute left-0 mt-2 w-48 rounded-lg p-4 shadow-lg z-50 bg-slate-800"
            :style="{
              backgroundImage: `url(${cadre})`,
              backgroundSize: '100% 100%',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }"
          >
            <router-link to="/twitch/" class=" text-lg block px-4 py-2 text-white hover:bg-gold hover:text-black">La Chaîne</router-link>
            <router-link to="/twitch/cyberpunk" class=" text-lg block px-4 py-2 text-white hover:bg-gold hover:text-black">Cyberpunk</router-link>
            <router-link to="/twitch/dragons" class="block px-4 text-lg py-2 text-white hover:bg-gold hover:text-black">Dragons</router-link>
            <router-link to="/twitch/terra-nova" class="block px-4 text-lg py-2 text-white hover:bg-gold hover:text-black">Terra Nova</router-link>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import cadrehead from '../../../assets/association/cadre_header.png'
import cadre from '../../../assets/association/cadre text.png'
import logo from '../../../assets/logo.png'

const showAssociation = ref(false)
const showActualPlay = ref(false)
let closeTimeout = null

function openMenu(menu) {
  clearTimeout(closeTimeout)
  if (menu === 'association') {
    showAssociation.value = true
    showActualPlay.value = false
  }
  if (menu === 'actualPlay') {
    showActualPlay.value = true
    showAssociation.value = false
  }
}

function delayedClose(menu) {
  clearTimeout(closeTimeout)
  closeTimeout = setTimeout(() => {
    if (menu === 'association') showAssociation.value = false
    if (menu === 'actualPlay') showActualPlay.value = false
  }, 300)
}
</script>

<style scoped>
.font-cinzel {
  font-family: 'Cinzel Decorative', serif;
}
.hover\:text-gold:hover {
  color: #FFD700;
}
.hover\:bg-gold:hover {
  background-color: #f0e39a;
}
.border-gold {
  border-color: #FFD700;
}
</style>