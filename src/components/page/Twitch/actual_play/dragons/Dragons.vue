<template>
  <div 
    class=" min-h-screen bg-cover bg-center "
    :style="{
      backgroundImage: `url(${bg})`,
      backgroundColor: 'rgba(247, 242, 224, 0.8)',
      backgroundAttachment: 'fixed',
      backgroundSize: '100% 100%',
    }"
  >
    <div class="flex flex-row items-center justify-center pt-7  gap-1">
      <img class="w-64 h-20 " src="../../../../../assets/dragons/Dragons_logo.png" alt="Logo">
      
    </div>

    <div class="flex flex-col">
      <h2 class="text-2xl font-bold pl-6 mt-4 text-white" 
      style="
        font-size: 1.3rem;
        text-align: start;
        color: Black;
        font-weight: 900;
        text-decoration: underline 2px solid black;
        font-family: 'Cinzel Decorative', serif;
        white-space: nowrap;
        letter-spacing: 2px;
      ">Les Aventuriers :</h2>
    </div>


    <div 
      class="flex flex-row items-center m-7  justify-start bg-slate-950 no-scrollbar overflow-x-auto py-5 "
      style="scroll-snap-type: x mandatory; white-space: nowrap;"
      >
      <widget-AP-button 
        title= "Eolzranth"
        text="Eolzranth"
        :button="EolImg"
        Colors="white"
        :OnPress="() => openZoom('eolzranth')" 
      />
      <widget-AP-button 
        title= "Antani"
        text="Antani"
        :button="AntaniImg"
        Colors="white"
        :OnPress="() => openZoom('antani')"
      />
      <widget-AP-button 
        title= "Abyss"
        text="Abyss"
        :button="AbyssImg"
        Colors="white"
        :OnPress="() => openZoom('abyss')"
      />
      <widget-AP-button 
        title= "Hebor"
        text="Hebor"
        :button="HeborImg"
        Colors="white"
        :OnPress="() => openZoom('hebor')"
      />
      <widget-AP-button 
        title= "Thalanir"
        text="Thalanir"
        :button="ThalanirImg"
        Colors="white"
        :OnPress="() => openZoom('thalanir')"
      />
    </div>
    <h2 class="text-2xl font-bold pl-6 mt-4 text-white" 
    style="
        font-size: 1.3rem;
        text-align: start;
        color: Black;
        font-weight: 900;
        text-decoration: underline 2px solid black;
        font-family: 'Cinzel Decorative', serif;
        white-space: nowrap;
        letter-spacing: 2px;
    ">Les Episodes :</h2>
    <div class=" m-8 max-w-4xl aspect-video rounded-lg border-2 border-[#9146FF] shadow-[0_0_15px_rgba(145,70,255,0.5)] overflow-hidden">
      <iframe 
        class="w-full h-full"
        src="https://www.youtube.com/embed/videoseries?list=PL2GLJ_tbUMNGvY_bUnPGBM61G7BUsI0zr" 
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
          color: 'black',
          fontSize: '1.2rem',
          fontWeight: 'bold',
          textDecoration: 'underline 2px solid black',
          textShadow: '2px 2px 6px rgba(0, 0, 0, 0.5)',
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
          color: 'black',
          fontSize: '1.2rem',
          fontWeight: 'bold',
          textDecoration: 'underline 2px solid black',
          textShadow: '2px 2px 6px rgba(0, 0, 0, 0.5)',
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
          color: 'black',
          fontSize: '1.2rem',
          fontWeight: 'bold',
          textDecoration: 'underline 2px solid black ',
          textShadow: '2px 2px 6px rgba(0, 0, 0, 0.5)',
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
import bg from '../../../../../assets/dragons/dragons_bg.png'
import widgetAPButton from './dragons_Perso_button.vue'
import zoomPerso from './zoom_perso.vue'
import EolImg from '../../../../../assets/dragons/eolzranth.png'
import AntaniImg from '../../../../../assets/dragons/antani.png'
import AbyssImg from '../../../../../assets/dragons/abyss.png'
import HeborImg from '../../../../../assets/dragons/hebor.png'
import ThalanirImg from '../../../../../assets/dragons/thalanir.png'



const selectedPerso = ref(null)

const openZoom = (P_name) => {
  selectedPerso.value = P_name
}
</script>