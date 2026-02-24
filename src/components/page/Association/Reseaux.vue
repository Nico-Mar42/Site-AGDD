<template>
  <div
    class=" min-h-screen flex flex-col h-full "
    style="
      background-color: rgb(2, 35, 50);"
  >
    <img 
      class="rounded-full mx-auto mb-[-8rem]" 
      src="../../../assets/association/top_art_deco_bg.png" 
      alt="top background"
      style="
      width: 120%;"
    ></img>
    <div class="flex flex-row justify-center items-center mr-6 mt-8">
      <router-link 
        to="/association/" 
        class="block relative rounded-lg overflow-hidden my-0 pl-4 "
        :style="{ 
          backgroundImage: 'url(' + logo + ')',
          backgroundSize: 'contain', 
          backgroundPosition: 'center', 
          backgroundRepeat: 'no-repeat',
          height: '6rem',
          width: '6rem',
          maxWidth: '400px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'black',
          fontSize: '1.5rem',
          fontFamily: 'Cinzel Decorative, serif',
          fontWeight: 'bold',
          textShadow: '2px 2px 6px rgba(255, 255, 255, 0.5)',
          margin: 0,
          padding: 0
        }" 
      ></router-link>
      <h1 
        class="text-white text-2xl font-bold "
        style="
          text-align: center;
          font-family: 'Cinzel Decorative', serif;
          text-shadow: 2px 2px 6px rgba(255, 255, 255, 0.5);
        "
        >Nos Reseaux</h1>
    </div>

    <div class="flex flex-col justify-center items-center mt-4 m-8 p-12"
      :style="{
        backgroundImage: `url(${textframe})`,
        backgroundSize: '100% 100%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }">
      <h2 
        class="text-white text-lg font-bold mt-4 mb-4"
        style="
          text-align: center;
          font-family: 'Cinzel Decorative', serif;
          text-shadow: 2px 2px 6px rgba(255, 255, 255, 0.5);
        "
      >Retrouvez nous sur :</h2>
      <img 
        class="mx-auto mb-4" 
        src="../../../assets/association/twitch.png" 
        alt="twitch icon"
        style="
        width: 20%;"
        v-on:click="openLink('https://www.twitch.tv/au_gre_des_des')"
      >
      <h2 
        class="text-white text-lg font-bold"
        style="
          text-align: center;
          text-decoration: underline 2px solid white;
          text-shadow: 2px 2px 6px rgba(255, 255, 255, 0.5);
        "
        v-on:click="openLink('https://www.twitch.tv/au_gre_des_des')"

      >La chaine Twitch</h2>
      <img 
        class="mx-auto mt-8 mb-4" 
        src="../../../assets/association/youtube.png" 
        alt="youtube icon"
        style="
        width: 20%;
        display: block;"
        v-on:click="openLink('https://www.youtube.com/@AuGredesDes')"
      >
      <h2 
        class="text-white text-lg font-bold "
        style="
          text-align: center;
          text-decoration: underline 2px solid white;
          text-shadow: 2px 2px 6px rgba(255, 255, 255, 0.5);
        "
        v-on:click="openLink('https://www.youtube.com/@AuGredesDes')"
      >La chaîne YouTube</h2>
      <img 
        class="mx-auto mt-8 mb-4" 
        src="../../../assets/association/insta.png" 
        alt="instagram icon"
        style="
        width: 20%;
        display: block;"
        v-on:click="openLink('https://www.instagram.com/augredesdes?igsh=bDlsYTRueGRlcTVh')"
      >
      <h2 
        class="text-white text-lg font-bold "
        style="
          text-align: center;
          text-decoration: underline 2px solid white;
          text-shadow: 2px 2px 6px rgba(255, 255, 255, 0.5);
        "
        v-on:click="openLink('https://www.instagram.com/augredesdes?igsh=bDlsYTRueGRlcTVh')"
      >Notre Insta</h2>
      <img 
        class="mx-auto mt-8 mb-4" 
        src="../../../assets/association/facebook.png" 
        alt="facebook icon"
        style="
        width: 12%;
        display: block;"
        v-on:click="openLink('https://www.facebook.com/people/Au-gr%C3%A9-des-d%C3%A9s/61565776881369/')"
      >
      <h2 
        class="text-white text-lg font-bold "
        style="
          text-align: center;
          text-decoration: underline 2px solid white;
          text-shadow: 2px 2px 6px rgba(255, 255, 255, 0.5);
        "
        v-on:click="openLink('https://www.facebook.com/people/Au-gr%C3%A9-des-d%C3%A9s/61565776881369/')"
      >Notre Facebook</h2>
      <img 
        class="mx-auto mt-8 mb-4" 
        src="../../../assets/association/discord.png" 
        alt="discord icon"
        style="
        width: 20%;
        display: block;"
        v-on:click="openLink('https://discord.gg/rq8tQmCF')"
      >
      <h2 
        class="text-white text-lg font-bold "
        style="
          text-align: center;
          text-decoration: underline 2px solid white;
          text-shadow: 2px 2px 6px rgba(255, 255, 255, 0.5);
        "
        v-on:click="openLink('https://discord.gg/rq8tQmCF')"
      >Notre Discord</h2>
    </div>

    <div class="flex flex-row justify-center items-center  mb-[-6rem]">
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
        >Accueil</router-link>
        <div class="p-5 "></div>
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
        >
        Nous Contacter
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
</template>

<script setup>
import logo from '../../../assets/logo.png';
import textframe from '../../../assets/association/cadre text.png';
const openLink = (url) => {
  if (url.startsWith('mailto:')) {
    window.location.href = url
  } else {
    window.open(url, '_blank')
  }
}

</script>