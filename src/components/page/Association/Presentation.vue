<template>
  <div
    class=" min-h-screen flex flex-col h-full "
    style="
      background-color: rgb(2, 35, 50);"
  >
    <img 
      class="rounded-full mx-auto " 
      src="../../../assets/association/top_art_deco_bg.png" 
      alt="top background"
      style="
      width: 120%;"
      ></img>
    <img 
      class="rounded-full mx-auto mt-[-8rem]" 
      src="../../../assets/logo.png" 
      alt="Logo"
      style="width: 150px; height: 150px; max-width: 200px; max-height: 200px;"
      ></img>
    <h1 
      class=" mb-4"
      style="
        font-size: 1.5rem;
        text-align: center;
        color: white;
        font-weight: 900;
        font-family: 'Cinzel Decorative', serif;
        text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.7);
      "
    >Au Gré Des Dés</h1>
    
    <div
      class="ml-9 mr-9 mb-4 flex-1 rounded-lg p-4 flex flex-col"
      :style="{ 
        backgroundImage: `url(${textframe})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        }">
      <h2 
        class= "text-white text-center text-xl font-bold mt-8 "
        :style="{ textDecoration: 'underline 2px solid white' }"
      >Qui nous sommes?</h2>
      <h3 class="p-4 text-center text-white text-lg font-medium"
        v-html="whoami"
      ></h3>
    </div>
    <div
      class="ml-9 mr-9 flex-1 rounded-lg p-4 flex flex-col"
      :style="{ 
        backgroundImage: `url(${textframe})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        }">
      <h2 
        class= "text-white text-center text-xl font-bold mt-8 "
        :style="{ textDecoration: 'underline 2px solid white' }"
      >Ce que nous faisons</h2>
      <h3 class="p-4 text-center text-white text-lg font-medium"
        v-html="whatwedo"
      ></h3>
    </div>

    <div class="flex flex-row justify-center items-center space-x-4 mt-4">
      <h2 
        class="text-white text-lg font-bold">
      Retrouvez nos <br>prochains événements</h2>
      <router-link 
        to="/association/agenda" 
        class="block relative rounded-lg overflow-hidden my-0"
        :style="{ 
          backgroundImage: 'url(' + agenda + ')',
          backgroundSize: 'contain', 
          backgroundPosition: 'center', 
          backgroundRepeat: 'no-repeat',
          height: '70px',
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
      >
      </router-link>
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
import agenda from '../../../assets/association/agenda.png';
import textframe from '../../../assets/association/cadre text.png';
import router from '../../../router';
const whoami = "Nous avons créé notre association en 2024, après des années à faire du jeu de rôle ensemble, et à nous dire qu'on aimerait faire plus que juste jouer, mais aussi partager notre passion et notre expérience avec d'autres personnes.<br>Nous nous sommes fixé pour objectif de transmettre notre passion, principalement via l'initiation de nouveaux joueurs de tous âges.<br>C'est pour cela que nous avons décidé de ne pas prendre de local fixe, mais plutôt de nous déplacer au plus près de notre public cible.<br><br>";
const whatwedo = `
  Pour partager notre passion au plus grand nombre, nous agissons sur deux axes complémentaires :<br><br>
  
  <strong>• Le contact direct :</strong><br>
  Présents en festivals (Jou’Eure Fest’, Lillebonne) et en structures locales comme les MJC, nous proposons des initiations et des sessions régulières de jeu de rôle.<br><br>
  
  <strong>• La diffusion numérique :</strong><br>
  Nous diffusons nos parties en direct sur <strong>Twitch</strong>, créant un espace d'échange convivial pour faire découvrir cet univers à un large public.
`;</script>