<template >
  <div 
    class=" bg-black min-h-screen flex flex-col h-full w-full justify-center items-center"
  >
    <div class="2xl:w-[50%] w-full flex h-full flex-col justify-center items-center">
      <headerMobile v-if="isMobile" />
      <HeaderDesktop v-else />

      <img 
        class="mt-4 z-1 mb-[-25%]"
        src="../../../assets/twitch/cadre_up.png" 
        alt="top background"
        style="
        width: 120%;"
        ></img>

      <div class="flex flex-row items-center justify-center pt-7 mb-5">
        <div 
        style="
          font-size: 1.8rem;
          text-align: center;
          color: white;
          font-weight: 700;
          font-family: 'Orbitron', sans-serif;
          text-shadow: 0 0 10px #9146FF, 0 0 20px #9146FF, 0 0 30px #9146FF, 0 0 40px #9146FF,0 0 10px #9146FF, 0 0 20px #9146FF, 0 0 30px #9146FF, 0 0 40px #9146FF;;
          white-space: nowrap;
          letter-spacing: 1px;
        "
        >Au Gré Des Dés</div>
      </div>
      <div class="flex w-[90%] 2xl:w-[70%] flex-col bg-slate-950 border border-white/10 cursor-pointer shadow-[0_0_15px_rgba(145,70,255,1)]">
        <div class="w-full max-w-4x mx-auto">
          <div id="twitch-player" class="aspect-video w-full bg-black shadow-lg"></div>
        </div>
        <a href="https://twitch.tv/au_gre_des_des" 
        class="flex items-center justify-center gap-3 w-full py-2 bg-[#9146FF] hover:bg-[#772ce8] font-bold text-sm transition-all  ">
        <svg class="w-5 h-5 text-center text-white" fill="currentColor" viewBox="0 0 24 24">...</svg>
        REJOINDRE LE CHAT SUR TWITCH
      </a>
      </div>
      <div class="flex flex-col">
        <h2 class="text-2xl font-bold text-lg 2xl:text-2xl mt-12 pl-6  text-white" 
        style="
          text-align: start;
          color: white;
          font-weight: 700;
          font-family: 'Orbitron', sans-serif;
          text-shadow: 0 0 10px #9146FF, 0 0 20px #9146FF, 0 0 30px #9146FF, 0 0 40px #9146FF,0 0 10px #9146FF, 0 0 20px #9146FF, 0 0 30px #9146FF, 0 0 40px #9146FF;;
          white-space: nowrap;
          letter-spacing: 2px;
        ">Nos Aventures</h2>
      </div>

      <div
        ref="scrollContainer"
        class="flex flex-row z-20 items-center m-7 mt-5 w-full w-[80vw] 2xl:w-[70%] justify-start bg-slate-950 no-scrollbar overflow-x-auto py-5 border border-white/10 shadow-[0_0_15px_rgba(145,70,255,1)]"
        style="scroll-snap-type: x mandatory; white-space: nowrap; cursor: grab; user-select: none;"
        @mousedown="startDrag"
        @mousemove="onDrag"
        @mouseup="endDrag"
        @mouseleave="endDrag"
        >
        <widget-AP-button 
          text="Cyberpunk Red"
          :button="cyberImg"
          to="/twitch/cyberpunk"
          Colors="white"
        />
        <widget-AP-button 
          text="Dragons"
          :button="dragonsImg"
          to="/twitch/dragons"
          Colors="white"
        />
        <widget-AP-button 
          text="Terra Nova"
          :button="terraImg"
          to="/twitch/terra-nova"
          Colors="white"
        />
      </div>
      
      <div class="flex flex row justify-center items-center p-4 mt-4 mb-[-2rem]">
        <router-link 
          to="/association/contact" 
          class="block relative rounded-lg hover:underline text-lg 2xl:text-2xl overflow-hidden my-0 ml-4"
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
          class="block relative rounded-lg hover:underline text-lg 2xl:text-2xl overflow-hidden my-0 ml-4"
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
      <div class="flex flex-row justify-center  items-center p-4 mt-4 ">
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
      <img 
        class="mt-4 z-1 mt-[-25%] "
        src="../../../assets/twitch/cadre_down.png" 
        alt="top background"
        style="
        width: 120%;"
        ></img>
    </div>
  </div>
</template>

<script setup>
import widgetAPButton from './widget_AP_button.vue'
import cyberImg from '../../../assets/twitch/bouton/b_cyber.jpg'
import dragonsImg from '../../../assets/twitch/bouton/b_dragons.jpg'
import terraImg from '../../../assets/twitch/bouton/b_terra.jpg'
import { ref, onMounted, onBeforeUnmount } from 'vue';
import HeaderDesktop from './header.vue';
import HeaderMobile from './header_mobile.vue';

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


const initPlayer = () => {
  if (window.Twitch) {
    new window.Twitch.Player("twitch-player", {
      channel: "au_gre_des_des",
      width: "100%",
      height: "100%",
      layout: "video", // Pour n'avoir que la vidéo sans le chat
      parent: ["localhost", "tonsite.com"] 
    });
  }
}

onMounted(() => {
  // On vérifie si le script n'est pas déjà présent
  if (!document.getElementById('twitch-sdk')) {
    const script = document.createElement('script')
    script.id = 'twitch-sdk'
    script.src = "https://player.twitch.tv/js/embed/v1.js"
    
    // Une fois chargé, on appelle notre fonction (Partie 3)
    script.onload = () => {
      initPlayer()
    }
    document.head.appendChild(script)
  } else {
    // Si le script est déjà là (navigation entre pages), on initialise direct
    initPlayer()
  }
})
</script>