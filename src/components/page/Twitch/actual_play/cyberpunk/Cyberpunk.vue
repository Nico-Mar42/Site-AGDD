<template >
  <div 
    class=" bg-black min-h-screen flex flex-col h-full w-full justify-center items-center"
  >
    <div class="2xl:w-[50%] w-full flex h-full flex-col justify-center items-center">
      <headerMobile v-if="isMobile" />
      <HeaderDesktop v-else />
      <img 
        class="mt-4 z-1 mb-[-25%]"
        src="../../../../../assets/twitch/cadre_up.png" 
        alt="top background"
        style="
        width: 120%;"
      ></img>
      <div class="flex flex-row items-center justify-center pt-7  gap-1">
        <img class="w-[70%] mb-12 " src="../../../../../assets/twitch/title_cyber.png" alt="Logo">
        
      </div>

      <div class="flex flex-col">
        <h2 class="text-xl 2xl:text-3xl  font-bold pl-6 mt-4 text-white" 
        style="
          text-align: start;
          color: red;
          font-weight: 700;
          font-family: 'Orbitron', sans-serif;
          text-shadow: 0 0 10px #9146FF, 0 0 20px #9146FF, 0 0 30px #9146FF, 0 0 40px #9146FF,0 0 10px #9146FF, 0 0 20px #9146FF, 0 0 30px #9146FF, 0 0 40px #9146FF;;
          white-space: nowrap;
          letter-spacing: 2px;
        ">Les runners</h2>
      </div>


      <div 
        ref="scrollContainer"
        class="flex flex-row items-center m-7 w-[80%] 2xl:w-[70%] 2 justify-start bg-slate-950 no-scrollbar overflow-x-auto py-5 "
        style="scroll-snap-type: x mandatory; white-space: nowrap; cursor: grab; user-select: none;"
        @mousedown="startDrag"
        @mousemove="onDrag"
        @mouseup="endDrag"
        @mouseleave="endDrag"
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
      <h2 class="text-xl 2xl:text-3xl font-bold pl-6 mt-4 text-white" 
      style="
        text-align: start;
        color: red;
        font-weight: 700;
        font-family: 'Orbitron', sans-serif;
        text-shadow: 0 0 10px #9146FF, 0 0 20px #9146FF, 0 0 30px #9146FF, 0 0 40px #9146FF,0 0 10px #9146FF, 0 0 20px #9146FF, 0 0 30px #9146FF, 0 0 40px #9146FF;;
        white-space: nowrap;
        letter-spacing: 2px;
      ">Les Episodes</h2>
      <div class=" m-8 z-20 2xl:w-[70%]  aspect-video rounded-lg border-2 border-[#9146FF] shadow-[0_0_15px_rgba(145,70,255,0.5)] overflow-hidden">
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
          class="block relative rounded-lg hover:underline 2xl:text-2xl overflow-hidden my-0 ml-4"
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
          class="block relative rounded-lg hover:underline 2xl:text-2xl overflow-hidden my-0 ml-4"
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
      <div class="flex flex-row justify-center items-center p-4 mt-4 ">
        <router-link 
          to="/" 
          class="block relative rounded-lg hover:underline 2xl:text-2xl overflow-hidden my-0 ml-4"
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

      <zoomPerso 
        v-if="selectedPerso" 
        :Name="selectedPerso" 
        @close="selectedPerso = null" 
      />
          <img 
        class="mt-4 z-1 mt-[-25%] "
        src="../../../../../assets/twitch/cadre_down.png" 
        alt="top background"
        style="
        width: 120%;"
        ></img>  
    </div>
    
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import widgetAPButton from './cyber_Perso_button.vue'
import zoomPerso from './zoom_perso.vue'
import floppyImg from '../../../../../assets/cyberpunk/floppy.png'
import laurenImg from '../../../../../assets/cyberpunk/lauren.png'
import mariaImg from '../../../../../assets/cyberpunk/maria.png'
import francaisImg from '../../../../../assets/cyberpunk/francais.png'
import HeaderDesktop from '../../header.vue';
import HeaderMobile from '../../header_mobile.vue';

const scrollContainer = ref(null)
const isDown = ref(false)
const startX = ref(0)
const scrollLeft = ref(0)

const startDrag = (e) => {
  isDown.value = true
  startX.value = e.pageX - scrollContainer.value.offsetLeft
  scrollLeft.value = scrollContainer.value.scrollLeft
}

const onDrag = (e) => {
  if (!isDown.value) return
  e.preventDefault()
  const x = e.pageX - scrollContainer.value.offsetLeft
  const walk = (x - startX.value) * 1.5 // multiplier pour ajuster la vitesse
  scrollContainer.value.scrollLeft = scrollLeft.value - walk
}

const endDrag = () => {
  isDown.value = false
}

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

const selectedPerso = ref(null)

const openZoom = (P_name) => {
  selectedPerso.value = P_name
}
</script>