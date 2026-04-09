<template>
  <div class="bg-slate-800 min-h-screen flex flex-col h-full w-full justify-center items-center"
    :style="{ backgroundColor: '#D2B48C' }"
    >
    <div 
      class="bg-stone-300 min-h-screen bg-cover bg-center p-8   lg:w-[50vw]" 
      :style="{ backgroundImage: `url(${bgImage})`, backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundColor: '#D2B48C' }"
    >
      <div class="mt-8 mb-4 2xl:flex 2xl:flex-col 2xl:gap-5">
        
        <img class="lg:w-[60vh] lg:h-[60vh] rounded-full mx-auto" src="../../assets/logo.png" alt="Logo">
        <h2 
        class="text-2xl lg:text-4xl font-bold text-white mb-4 "
        style="
          /* font-size: 1.3rem; */
          text-align: center;
          color: black;
          font-weight: bolder;
          font-family: 'Cinzel Decorative', serif;
          text-shadow: 2px 2px 6px rgba(255, 255, 255, 0.5);
        "
        >Venez voguer<br>Au gré des dés</h2>
      </div>

      <div class="flex flex-col items-center 2xl:gap-12">
        <router-link 
          to="/association/" 
          class="block relative rounded-lg overflow-hidden my-0"
          :style="{ 
            backgroundImage: 'url(' + button + ')',
            backgroundSize: 'contain', 
            backgroundPosition: 'center', 
            backgroundRepeat: 'no-repeat',
            height: '80px',
            width: '18rem',
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
        >
          Notre association
        </router-link>
        <router-link 
          to="/twitch/" 
          class="block relative rounded-lg overflow-hidden my-0"
          :style="{ 
            backgroundImage: 'url(' + button + ')',
            backgroundSize: 'contain', 
            backgroundPosition: 'center', 
            backgroundRepeat: 'no-repeat',
            height: '80px',
            width: '18rem',
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
        >
          Twitch/YouTube
        </router-link>
      </div>
      

      <h2 
      class="text-center text-white lg:mb-8 mt-6 mb-10"
        style="
          font-size: 1.2rem;
          text-align: center;
          color: black;
          font-weight: 700;
          text-decoration: underline 1px;
          font-family: 'Cinzel Decorative', serif;
          text-shadow: 2px 2px 6px rgba(255, 255, 255, 0.5);
        "
        >Rejoignez-nous</h2>
    </div>
  </div>
</template>

<script setup>
import bgImage from '../../assets/twitch/parchment.png'
import button from '../../assets/twitch/button.png'

</script>