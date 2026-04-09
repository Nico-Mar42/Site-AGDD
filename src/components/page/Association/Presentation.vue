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
        class="rounded-full mx-auto " 
        src="../../../assets/association/top_art_deco_bg.png" 
        alt="top background"
        style="
        width: 120%;"
        ></img>

      <h1 
        class=" mb-4 text-2xl lg:text-3xl 2xl:mt-[-12rem] mb-12"
        style="
          text-align: center;
          color: white;
          font-weight: 900;
          font-family: 'Cinzel Decorative', serif;
          text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.7);
        "
      >Au Gré Des Dés</h1>
      
      <div
        class="bg-rotate ml-9 mr-9 mb-4 flex-1 rounded-lg p-4 flex flex-1 flex-col  2xl:w-[80%]"
        :style="{ 
          backgroundImage: `url(${textframe})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          }">
        <h2 
          class= "text-white text-center text-xl 2xl:text-3xl font-bold mt-12 "
          :style="{ textDecoration: 'underline 2px solid white' }"
        >Qui nous sommes?</h2>
        <h3 class="p-4 text-center text-white text-lg lg:text-xl  font-medium"
          v-html="whoami"
        ></h3>
      </div>
      <div
        class="bg-rotate ml-9 mr-9 mb-4 flex-1 rounded-lg p-4 flex flex-1 flex-col  2xl:w-[80%]"
        :style="{ 
          backgroundImage: `url(${textframe})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          }">
        <h2 
          class= "text-white text-center text-xl 2xl:text-3xl font-bold mt-4 "
          :style="{ textDecoration: 'underline 2px solid white' }"
        >Ce que nous faisons</h2>
        <h3 class="p-4 text-center text-white text-lg font-medium mb-4"
          v-html="whatwedo"
        ></h3>
      </div>

      <router-link
        to="/association/agenda"
        class="flex flex-row-reverse hover:grayscale z-20 hover:underline hover:text-white hover:p-5 2xl:hover:w-[49%] justify-around p-4 border-2 items-center mt-4 2xl:w-[50%] w-[80%] py-6 cursor-pointer bg-black bg-opacity-20 rounded-3xl"
      >
        <h2 class="text-white text-lg 2xl:text-2xl font-bold">
          Retrouvez nos <br>prochains événements
        </h2>
        <span
          class="block  relative rounded-lg my-0 h-[7vh] 2xl:h-[9vh]"
          :style="{
            backgroundImage: 'url(' + agenda + ')',
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            width: '6rem',
            maxWidth: '400px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'black',
            fontSize: '1.5rem',
            fontFamily: 'Cinzel Decorative, serif',
            fontWeight: 'bold',
            margin: 0,
            padding: 0
          }"
        ></span>
      </router-link>

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
import agenda from '../../../assets/association/agenda.png';
import cadre from '../../../assets/association/cadre text.png';
import cadrerotate from '../../../assets/association/cadre_rotate.png';
import HeaderDesktop from './header.vue';
import HeaderMobile from './header_mobile.vue';

const textframe = ref(cadre);

const isMobile = ref(window.matchMedia('(max-width: 1024px)').matches)

function handleResize() {
  isMobile.value = window.matchMedia('(max-width: 1024px)').matches
}

function updateTextframe() {
  if (window.innerWidth >= 1536) {
    textframe.value = cadrerotate;
  } else {
    textframe.value = cadre;
  }
}

onMounted(() => {
  updateTextframe();
  window.addEventListener('resize', updateTextframe);
  window.addEventListener('resize', handleResize)

});
onBeforeUnmount(() => {
  window.removeEventListener('resize', updateTextframe);
  window.removeEventListener('resize', handleResize)
});


const whoami = "Nous avons créé notre association en 2024, après des années à faire du jeu de rôle ensemble, et à nous dire qu'on aimerait faire plus que juste jouer, mais aussi partager notre passion et notre expérience avec d'autres personnes.<br>Nous nous sommes fixé pour objectif de transmettre notre passion, principalement via l'initiation de nouveaux joueurs de tous âges.<br>C'est pour cela que nous avons décidé de ne pas prendre de local fixe, mais plutôt de nous déplacer au plus près de notre public cible.<br><br>";
const whatwedo = `
  Pour partager notre passion au plus grand nombre, nous agissons sur deux axes complémentaires :<br><br>
  
  <strong>• Le contact direct :</strong><br>
  Présents en festivals (Jou’Eure Fest’, Lillebonne) et en structures locales comme les MJC, nous proposons des initiations et des sessions régulières de jeu de rôle.<br><br>
  
  <strong>• La diffusion numérique :</strong><br>
  Nous diffusons nos parties en direct sur <strong>Twitch</strong>, créant un espace d'échange convivial pour faire découvrir cet univers à un large public.`;
</script>