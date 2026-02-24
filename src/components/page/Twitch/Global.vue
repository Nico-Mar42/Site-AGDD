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
      <img class="w-20 h-20 " src="../../../assets/logo.png" alt="Logo">
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
    <div 
      class="flex flex-col mt-5 m-7 bg-slate-950 border border-white/10 shadow-[0_0_15px_rgba(145,70,255,1)]">
      <div class="w-full max-w-4xl mx-auto">
        <div id="twitch-player" class="aspect-video w-full bg-black shadow-lg"></div>
      </div>
      <a href="https://twitch.tv/au_gre_des_des" 
      class="flex items-center justify-center gap-3 w-full py-2 bg-[#9146FF] hover:bg-[#772ce8] font-bold text-sm transition-all  ">
      <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">...</svg>
      REJOINDRE LE CHAT SUR TWITCH
    </a>
    </div>
    <div class="flex flex-col">
      <h2 class="text-2xl font-bold pl-6 mt-3 text-white" 
      style="
        font-size: 1.3rem;
        text-align: start;
        color: white;
        font-weight: 700;
        font-family: 'Orbitron', sans-serif;
        text-decoration: underline  #9146FF;
        text-shadow: 0 0 10px #9146FF, 0 0 20px #9146FF, 0 0 30px #9146FF, 0 0 40px #9146FF,0 0 10px #9146FF, 0 0 20px #9146FF, 0 0 30px #9146FF, 0 0 40px #9146FF;;
        white-space: nowrap;
        letter-spacing: 2px;
      ">Nos Aventures :</h2>
    </div>

    <div 
      class="flex flex-row items-center m-7  justify-start bg-slate-950 no-scrollbar overflow-x-auto py-5 border border-white/10 shadow-[0_0_15px_rgba(145,70,255,1)]"
      style="scroll-snap-type: x mandatory; white-space: nowrap;"
      >
      <widget-AP-button 
        text="Cyberpunk Red"
        button="/src/assets/twitch/bouton/b_cyber.jpg"
        to="/twitch/cyberpunk"
        Colors="white"
      />
      <widget-AP-button 
        text="Dragons"
        button="/src/assets/twitch/bouton/b_dragons.jpg"
        to="/twitch/dragons"
        Colors="white"
      />
      <widget-AP-button 
        text="Terra Nova"
        button="/src/assets/twitch/bouton/b_terra.jpg"
        to="/twitch/terra-nova"
        Colors="white"
      />
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
  </div>
</template>

<script setup>
import bg from '../../../assets/twitch/cadre.png'
import widgetAPButton from './widget_AP_button.vue'
import { onMounted } from 'vue'

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