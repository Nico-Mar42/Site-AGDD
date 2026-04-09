<template >
  <div 
    class="bg-slate-800 min-h-screen flex flex-col h-full w-full justify-center items-center"
  >
    <div class="2xl:w-[50%] flex flex-col justify-center items-center"
    style="
      background-color: rgb(53, 74, 94);">
      <headerMobile v-if="isMobile" />
      <HeaderDesktop v-else />

      <img 
        class="rounded-full mx-auto mb-[-8rem]" 
        src="../../../assets/association/top_art_deco_bg.png" 
        alt="top background"
        style="
        width: 120%;"
        >
        <div class="flex flex-row justify-center items-center mb-6 mt-[4rem] 2xl:mt-[-5rem]">
          <h1 
            class="text-white text-2xl 2xl:text-4xl font-bold ml-4"
            style="
              text-align: center;
              font-family: 'Cinzel Decorative', serif;
            "
          >Agenda</h1>
        </div>

        <h2 
          class="text-white text-xl 2xl:text-2xl font-bold mt-4 mb-4"
          style="
            text-align: center;
            font-family: 'Cinzel Decorative', serif;
          "
          >Prochainement...</h2>

        <div class=" p-4">
          <iframe class=" w-full h-[60vh] 2xl:w-[30vw] 2xl:h-[80vh] border-0 mt-6"
            src="https://calendar.google.com/calendar/embed?src=f2fb5abb12e678aa38ebe9790df9198bd7df4685e989fe21f97a471f30945df4%40group.calendar.google.com&ctz=Europe%2FParis&mode=MONTH" 
            frameborder="0"
          ></iframe>
        </div>
      
    <div class="flex flex row justify-center items-center p-4 mt-4 mb-[-2rem] text-lg 2xl:text-2xl " >
      <router-link 
        to="/association/contact" 
        class="block relative hover:underline rounded-lg overflow-hidden my-0 ml-4"
        :style="{ 
          color: 'white',
          fontWeight: 'bold',
          cursor: 'pointer',
          margin: 0,
          padding: 0
        }"
        >Nous Contacter</router-link>
        <div class="p-8"></div>
      <router-link 
        to="/association/reseaux" 
        class="block relative rounded-lg hover:underline overflow-hidden my-0 ml-4 text-lg 2xl:text-2xl"
        :style="{ 
          color: 'white',
          fontWeight: 'bold',
          cursor: 'pointer',
          margin: 0,
          padding: 0
        }"
        >
        Nos Réseaux
      </router-link>
        
    </div>
    
    <div class="flex flex-row justify-center items-center p-4 mt-4 mb-[-7rem] 2xl:mb-[-14rem] ">
      <router-link 
        to="/" 
        class="block relative hover:underline rounded-lg overflow-hidden my-0 ml-4 text-lg 2xl:text-2xl"
        :style="{ 
          color: 'white',
          fontWeight: 'bold',
          cursor: 'pointer',
          margin: 0,
          padding: 0
        }"
        >
        Accueil
      </router-link>
    </div>
      <img 
        class="rounded-full mx-auto " 
        src="../../../assets/association/bottom_art_deco_bg.png" 
        alt="bottom background"
        style="
        width: 120%;"
        ></img>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import logo from '../../../assets/logo.png';
import HeaderDesktop from './header.vue';
import HeaderMobile from './header_mobile.vue';

const isMobile = ref(window.matchMedia('(max-width: 1024px)').matches)

function handleResize() {
  isMobile.value = window.matchMedia('(max-width: 1024px)').matches
}

onMounted(() => {
  window.addEventListener('resize', handleResize)

});
onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize)
});

</script>