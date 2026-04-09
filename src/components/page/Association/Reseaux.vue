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
      ></img>
      <div class="flex flex-row justify-center items-center mb-6 mt-[4rem] 2xl:mt-[-5rem]">

        <h1 
          class="text-white text-2xl 2xl:text-4xl font-bold ml-4"
          style="
            text-align: center;
            font-family: 'Cinzel Decorative', serif;
          "
        >Nos Reseaux</h1>
      </div>

      <div class="bg-rotate ml-9 mr-9 mb-4 flex-1 rounded-lg p-4 flex flex-1 flex-col  2xl:w-[60%]"
        :style="{
          backgroundImage: `url(${textframe})`,
          backgroundSize: '100% 100%',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }">
        <h2 
          class="text-white text-lg 2xl:text-2xl font-bold mt-12 mb-9"
          style="
            text-align: center;
            font-family: 'Cinzel Decorative', serif;
            text-shadow: 2px 2px 6px rgba(255, 255, 255, 0.5);
          "
        >Retrouvez nous sur :</h2>
        <img 
          class="mx-auto mb-2 cursor-pointer hover:grayscale w-[20%] hover:w-[19%] " 
          src="../../../assets/association/twitch.png" 
          alt="twitch icon"

          v-on:click="openLink('https://www.twitch.tv/au_gre_des_des')"
        >
        <h2 
          class="text-white text-lg 2xl:text-2xl mb-4  font-bold hover:underline cursor-pointer"
          style="
            text-align: center;
          "
          v-on:click="openLink('https://www.twitch.tv/au_gre_des_des')"

        >Twitch</h2>
        <img 
          class="mx-auto mb-2 cursor-pointer hover:grayscale w-[20%] hover:w-[19%] " 
          src="../../../assets/association/youtube.png" 
          alt="youtube icon"
          style="
          display: block;"
          v-on:click="openLink('https://www.youtube.com/@AuGredesDes')"
        >
        <h2 
          class="text-white text-lg 2xl:text-2xl mb-4  font-bold hover:underline cursor-pointer"
          style="
            text-align: center;
          "
          v-on:click="openLink('https://www.youtube.com/@AuGredesDes')"
        >YouTube</h2>
        <img 
          class="mx-auto mb-2 cursor-pointer hover:grayscale w-[20%] hover:w-[19%] " 
          src="../../../assets/association/insta.png" 
          alt="instagram icon"
          style="
          display: block;"
          v-on:click="openLink('https://www.instagram.com/augredesdes?igsh=bDlsYTRueGRlcTVh')"
        >
        <h2 
          class="text-white text-lg 2xl:text-2xl mb-4  font-bold hover:underline cursor-pointer"
          style="
            text-align: center;
          "
          v-on:click="openLink('https://www.instagram.com/augredesdes?igsh=bDlsYTRueGRlcTVh')"
        >Instagram</h2>
        <img 
          class="mx-auto mb-2 cursor-pointer hover:grayscale w-[12%] hover:w-[11%] " 
          src="../../../assets/association/facebook.png" 
          alt="facebook icon"
          style="
          display: block;"
          v-on:click="openLink('https://www.facebook.com/people/Au-gr%C3%A9-des-d%C3%A9s/61565776881369/')"
        >
        <h2 
          class="text-white text-lg 2xl:text-2xl mb-4  font-bold hover:underline cursor-pointer"
          style="
            text-align: center;
          "
          v-on:click="openLink('https://www.facebook.com/people/Au-gr%C3%A9-des-d%C3%A9s/61565776881369/')"
        >Facebook</h2>
        <img 
          class="mx-auto mb-2 cursor-pointer hover:grayscale w-[20%] hover:w-[19%] " 
          src="../../../assets/association/discord.png" 
          alt="discord icon"
          style="
          display: block;"
          v-on:click="openLink('https://discord.gg/rq8tQmCF')"
        >
        <h2 
          class="text-white text-lg 2xl:text-2xl mb-8  font-bold hover:underline cursor-pointer"
          style="
            text-align: center;
          "
          v-on:click="openLink('https://discord.gg/rq8tQmCF')"
        >Discord</h2>
      </div>

      <div class="flex flex-row justify-center items-center p-4 mb-[-7rem]">
        <router-link 
          to="/" 
          class="block relative rounded-lg hover:underline text-xl 2xl:text-2xl overflow-hidden my-0 ml-4"
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
          to="/association/contact" 
          class="block relative rounded-lg text-xl 2xl:text-2xl hover:underline overflow-hidden my-0 ml-4"
          :style="{ 
            color: 'white',
            fontWeight: 'bold',
            cursor: 'pointer',
            margin: 0,
            padding: 0
          }"
          >
          Contact
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
import textframe from '../../../assets/association/cadre text.png';
import HeaderDesktop from './header.vue';
import HeaderMobile from './header_mobile.vue';

const isMobile = ref(window.matchMedia('(max-width: 1024px)').matches)

function handleResize() {
  isMobile.value = window.matchMedia('(max-width: 1024px)').matches
}

const openLink = (url) => {
  if (url.startsWith('mailto:')) {
    window.location.href = url
  } else {
    window.open(url, '_blank')
  }
}

onMounted(() => {
  window.addEventListener('resize', handleResize)

});
onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize)
});

</script>