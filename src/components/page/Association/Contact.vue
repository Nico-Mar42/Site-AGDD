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
            >Contact</h1>
        </div>
        <div class="bg-rotate ml-9 mr-9 mb-4 flex-1 rounded-lg p-4 flex flex-1 flex-col  2xl:w-[80%]"
          :style="{
            backgroundImage: `url(${textframe})`,
            backgroundSize: '100% 100%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }">
          <h2 
            class="text-white text-lg 2xl:text-3xl font-bold mt-4 mb-4"
            style="
              text-align: center;
              font-family: 'Cinzel Decorative', serif;
            "
          >Nous contacter</h2>


        <form
          action="https://formspree.io/f/meelkvzw"
          method="POST"
        >
          <label 
          class=" flex flex-col justify-center align-center items-center text-white text-lg font-bold mb-2"
          >
            Votre email:
            <input class="text-black 2xl:w-[70%]" type="email" name="email" style="border: 3px solid goldenrod;">
          </label>
          <label class="flex flex-col justify-center align-center items-center text-white text-lg font-bold mb-2">
            Votre message:
            <textarea class="text-black 2xl:w-[70%] h-[17vh]" name="message" style="border: 3px solid goldenrod;"></textarea>
          </label>
          <!-- your other form fields go here -->
          <button  type="submit" class="block mx-auto bg-white text-black font-bold py-2 px-4 rounded mt-4 mb-4">Envoyer</button>
        </form>
      </div>

        <div class="bg-rotate ml-9 mr-9 mb-4 flex-1 rounded-lg p-4 flex w-[70%] flex-1 flex-col  2xl:w-[80%]"
          :style="{
            backgroundImage: `url(${textframe})`,
            backgroundSize: '100% 100%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }">
          <img 
            class="mx-auto mb-2 cursor-pointer hover:grayscale mt-6 w-[20%] hover:w-[19%] " 
            src="../../../assets/association/mail.png" 
            alt="email icon"
            style="
            width: 18%;"
            
            v-on:click="openLink('mailto:augredesdes@gmail.com')"

          >
          <h2 
          class="text-white text-lg 2xl:text-2xl mb-4  font-bold hover:underline cursor-pointer"
            style="
              text-align: center;
            "
            v-on:click="openLink('mailto:augredesdes@gmail.com')"

          >contact@augredesdes.fr</h2>
          <img  
            class="mx-auto mb-2 cursor-pointer hover:grayscale mt-6 w-[20%] hover:w-[19%] " 
            src="../../../assets/association/discord.png" 
            alt="discord icon"
            style="
            width: 20%;
            display: block;"
            v-on:click="openDiscord('https://discord.gg/VRcY3ym953')"
          >
          <h2 
          class="text-white text-lg 2xl:text-2xl mb-4 z-20 font-bold hover:underline cursor-pointer"
            style="
              text-align: center;
            "
            v-on:click="openDiscord('https://discord.gg/VRcY3ym953')"
          >Discord</h2>

      </div>

      <div class="flex flex-row justify-center items-center p-4 mb-[-7rem]">
        <router-link 
          to="/" 
          class="block relative rounded-lg text-xl 2xl:text-2xl hover:underline overflow-hidden my-0 ml-4"
          :style="{ 
            color: 'white',
            fontWeight: 'bold',
            cursor: 'pointer',
            margin: 0,
            padding: 0
          }"
          >Accueil</router-link>
          <div class="p-8"></div>
        <router-link 
          to="/association/reseaux" 
          class="block relative rounded-lg hover:underline text-xl 2xl:text-2xl overflow-hidden my-0 ml-4"
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
import logo from '../../../assets/logo.png';
import { ref, onMounted, onBeforeUnmount } from 'vue';
import cadre from '../../../assets/association/cadre text.png';
import cadrerotate from '../../../assets/association/cadre_rotate.png';
import HeaderDesktop from './header.vue';
import HeaderMobile from './header_mobile.vue';

const textframe = ref(cadre);

function updateTextframe() {
  if (window.innerWidth >= 1536) {
    textframe.value = cadrerotate;
  } else {
    textframe.value = cadre;
  }
}
const isMobile = ref(window.matchMedia('(max-width: 1024px)').matches)

function handleResize() {
  isMobile.value = window.matchMedia('(max-width: 1024px)').matches
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

const openDiscord = (url) => {
  window.open(url, '_blank')
}

const openLink = (url) => {
  if (url.startsWith('mailto:')) {
    window.location.href = url
  } else {
    window.open(url, '_blank')
  }
}

</script>