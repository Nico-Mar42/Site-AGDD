<template>
  <div 
    class=" min-h-screen bg-cover bg-center "
    :style="{
      backgroundImage: `url(${bg})`,
      backgroundAttachment: 'fixed',
      backgroundSize: '100% 100%',
    }"
  >
    <div class="flex flex-row items-center justify-center pt-7  gap-1">
      <img class="w-64 h-20 " src="../../../../../assets/twitch/title_cyber.png" alt="Logo">
      
    </div>

    <div class="flex flex-col">
      <h2 class="text-2xl font-bold pl-6 mt-4 text-white" 
      style="
        font-size: 1.3rem;
        text-align: start;
        color: red;
        font-weight: 700;
        font-family: 'Orbitron', sans-serif;
        text-shadow: 0 0 10px #9146FF, 0 0 20px #9146FF, 0 0 30px #9146FF, 0 0 40px #9146FF,0 0 10px #9146FF, 0 0 20px #9146FF, 0 0 30px #9146FF, 0 0 40px #9146FF;;
        white-space: nowrap;
        letter-spacing: 2px;
      ">Les runners :</h2>
    </div>


    <div 
      class="flex flex-row items-center m-7  justify-start bg-slate-950 no-scrollbar overflow-x-auto py-5 "
      style="scroll-snap-type: x mandatory; white-space: nowrap;"
      >
      <widget-AP-button 
        title= "Lauren"
        text="Lauren"
        :button="laurenImg"
        Colors="white"
        :OnPress="() => openZoom('lauren')" 
      />
      <widget-AP-button 
        title= "Floppy"
        text="Floppydisk"
        :button="floppyImg"
        Colors="white"
        :OnPress="() => openZoom('floppy')"
      />
      <widget-AP-button 
        title= "Maria"
        text="Maria"
        :button="mariaImg"
        Colors="white"
        :OnPress="() => openZoom('maria')"
      />
      <widget-AP-button 
        title= "Le Français"
        text="Le Français"
        :button="francaisImg"
        Colors="white"
        :OnPress="() => openZoom('francais')"
      />
    </div>
    <h2 class="text-2xl font-bold pl-6 mt-4 text-white" 
    style="
      font-size: 1.3rem;
      text-align: start;
      color: red;
      font-weight: 700;
      font-family: 'Orbitron', sans-serif;
      text-shadow: 0 0 10px #9146FF, 0 0 20px #9146FF, 0 0 30px #9146FF, 0 0 40px #9146FF,0 0 10px #9146FF, 0 0 20px #9146FF, 0 0 30px #9146FF, 0 0 40px #9146FF;;
      white-space: nowrap;
      letter-spacing: 2px;
    ">Les Episodes :</h2>
    <div class=" m-8 max-w-4xl aspect-video rounded-lg border-2 border-[#9146FF] shadow-[0_0_15px_rgba(145,70,255,0.5)] overflow-hidden">
      <iframe 
        class="w-full h-full"
        src="https://www.youtube.com/embed/videoseries?list=PL2GLJ_tbUMNEjExvK71uCv3A9hCmbN9Kf" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerpolicy="strict-origin-when-cross-origin" 
        allowfullscreen>
      </iframe>
    </div>
    
    <div class="flex flex row justify-center items-center p-4 mt-4 mb-[-2rem]">
      <router-link 
        to="/association/contact" 
        class="block relative rounded-lg overflow-hidden my-0 ml-4"
        :style="{ 
          color: 'white',
          fontSize: '1.2rem',
          fontWeight: 'bold',
          textDecoration: 'underline 2px solid white',
          textShadow: '2px 2px 6px rgba(255, 255, 255, 0.5)',
          cursor: 'pointer',
          margin: 0,
          padding: 0
        }"
        >Nous Contacter</router-link>
        <div class="p-8"></div>
      <router-link 
        to="/association/reseaux" 
        class="block relative rounded-lg overflow-hidden my-0 ml-4"
        :style="{ 
          color: 'white',
          fontSize: '1.2rem',
          fontWeight: 'bold',
          textDecoration: 'underline 2px solid white',
          textShadow: '2px 2px 6px rgba(255, 255, 255, 0.5)',
          cursor: 'pointer',
          margin: 0,
          padding: 0
        }"
        >
        Nos Réseaux
      </router-link>
    </div>
    <div class="flex flex-row justify-center items-center p-4 mt-4 mb-[-7rem]">
      <router-link 
        to="/" 
        class="block relative rounded-lg overflow-hidden my-0 ml-4"
        :style="{ 
          color: 'white',
          fontSize: '1.2rem',
          fontWeight: 'bold',
          textDecoration: 'underline 2px solid white',
          textShadow: '2px 2px 6px rgba(255, 255, 255, 0.5)',
          cursor: 'pointer',
          margin: 0,
          padding: 0
        }"
        >
        Accueil
      </router-link>
    </div>

    <zoomPerso 
      v-if="selectedPerso" 
      :Name="selectedPerso" 
      @close="selectedPerso = null" 
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import bg from '../../../../../assets/twitch/cadre.png'
import widgetAPButton from './cyber_Perso_button.vue'
import zoomPerso from './zoom_perso.vue'
import floppyImg from '../../../../../assets/cyberpunk/floppy.png'
import laurenImg from '../../../../../assets/cyberpunk/lauren.png'
import mariaImg from '../../../../../assets/cyberpunk/maria.png'
import francaisImg from '../../../../../assets/cyberpunk/francais.png'


const selectedPerso = ref(null)

const openZoom = (P_name) => {
  selectedPerso.value = P_name
}
</script>