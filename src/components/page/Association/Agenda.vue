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
        >Agenda</h1>
      </div>

      <h2 
        class="text-white text-xl font-bold mt-4 mb-4"
        style="
          text-align: center;
          font-family: 'Cinzel Decorative', serif;
          text-shadow: 2px 2px 6px rgba(255, 255, 255, 0.5);
        "
        >Prochainement...</h2>

      <div class=" p-4">
        <iframe 
          src="https://calendar.google.com/calendar/embed?src=f2fb5abb12e678aa38ebe9790df9198bd7df4685e989fe21f97a471f30945df4%40group.calendar.google.com&ctz=Europe%2FParis&mode=AGENDA" 
          style="border: 0; width: 100%; height: 600px"
          frameborder="0"
        ></iframe>
      </div>
    
    <div class="flex flex row justify-center items-center p-4 mb-[-2rem]">
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

</script>