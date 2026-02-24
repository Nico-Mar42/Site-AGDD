<template >
  <div class = " ml-2 mr-2 rounded flex flex-col bg-black items-center justify-center"
    :style="{boxShadow: '0 0 10px #9146FF, 0 0 20px #9146FF'}"
  >
  <button
    @click="OnPress"
    class="relative rounded-lg overflow-hidden my-0"
    :style="{ 
      backgroundImage: `url(${button})`,
      backgroundSize: '100% 100%', 
      backgroundPosition: 'center', 
      backgroundRepeat: 'no-repeat',
      height: '12rem',
      width: '10rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: Colors,
      fontSize: '1rem',
      fontFamily: 'Orbitron, sans-serif',
      fontWeight: 'bold',
      textShadow: '2px 2px 6px rgba(255, 255, 255, 1)',
      margin: 0,
      padding: 0,
      border: 'none',
      cursor: 'pointer',
    }"
  >
  </button>
  <div class="text-white mb-1"
    style="
    width: fit-content;
    height: fit-content;
    font-size: 1rem;
    text-align: center;
    color: white;
    font-weight: 700;
    font-family: 'Cinzel', serif;
    text-shadow: 0 0 10px #9146FF, 0 0 20px #9146FF, 0 0 30px #9146 FF, 0 0 40px #9146FF,0 0 10px #9146FF, 0 0 20px #9146FF, 0 0 30px #9146FF, 0 0 40px #9146FF;;
    white-space: nowrap;
    letter-spacing: 2px;
    background-color: black;
    "
  >
      {{ text }}
  </div>
</div>
</template>

<script setup>
import { defineProps } from 'vue'
defineProps({
  text: String,
  to: String,
  button: String,
  Colors: String,
  OnPress: Function,
})
</script>