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
      background-color: rgb(2, 35, 50);
      width: 120%;"
      ></img>
      <div class="flex flex-row justify-center items-center mr-14 mt-4">
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
        class="text-white text-2xl font-bold ml-4"
        style="
          text-align: center;
          font-family: 'Cinzel Decorative', serif;
          text-shadow: 2px 2px 6px rgba(255, 255, 255, 0.5);
        "
        >Contact</h1>
      </div>

      
      
        <div class="flex flex-col justify-center items-center mt-4 m-8 p-8"
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
          >Nous contacter</h2>


        <form
          action="https://formspree.io/f/meelkvzw"
          method="POST"
        >
          <label 
          class=" flex flex-col justify-center align-center items-center text-white text-lg font-bold mb-2"
          >
            Votre email:
            <input class="text-black" type="email" name="email" style="border: 3px solid goldenrod;">
          </label>
          <label class="flex flex-col justify-center align-center items-center text-white text-lg font-bold mb-2">
            Votre message:
            <textarea class="text-black" name="message" style="border: 3px solid goldenrod;"></textarea>
          </label>
          <!-- your other form fields go here -->
          <button  type="submit" class="block mx-auto bg-white text-black font-bold py-2 px-4 rounded mt-4">Envoyer</button>
        </form>
      </div>

    <div class="flex flex-col justify-center items-center mt-4 m-8 p-8"
      :style="{
        backgroundImage: `url(${textframe})`,
        backgroundSize: '100% 100%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }">
        <img 
          class="mx-auto mb-4" 
          src="../../../assets/association/mail.png" 
          alt="email icon"
          style="
          width: 20%;"
          v-on:click="openLink('mailto:augredesdes@gmail.com')"

        >
        <h2 
          class="text-white text-lg font-bold"
          style="
            text-align: center;
            text-decoration: underline 2px solid white;
            text-shadow: 2px 2px 6px rgba(255, 255, 255, 0.5);
          "
          v-on:click="openLink('mailto:augredesdes@gmail.com')"

        >augredesdes@gmail.com</h2>
        <img 
          class="mx-auto mt-8 mb-4" 
          src="../../../assets/association/discord.png" 
          alt="discord icon"
          style="
          width: 20%;
          display: block;"
          v-on:click="openDiscord('https://discord.gg/rq8tQmCF')"
        >
        <h2 
          class="text-white text-lg font-bold "
          style="
            text-align: center;
            text-decoration: underline 2px solid white;
            text-shadow: 2px 2px 6px rgba(255, 255, 255, 0.5);
          "
          v-on:click="openDiscord('https://discord.gg/rq8tQmCF')"
        >Notre Discord</h2>

    </div>

    <div class="flex flex-row justify-center items-center p-4 mb-[-7rem]">
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