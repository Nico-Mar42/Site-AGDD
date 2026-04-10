<template >
  <button class = " ml-2 mr-2 rounded flex flex-col bg-black items-center justify-center border-2 border-yellow-600"
    @click="OnPress"
  >
  <span
    class="block hover:grayscale text-lg hover:w-[9rem] hover:h-[11rem] w-[10rem] h-[12rem] 2xl:hover:w-[14rem] 2xl:hover:h-[18rem] 2xl:w-[15rem] 2xl:h-[19rem] relative rounded-lg overflow-hidden my-0"
    :style="{ 
      backgroundImage: `url(${button})`,
      backgroundSize: '100% 100%', 
      backgroundPosition: 'center', 
      backgroundRepeat: 'no-repeat',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: Colors,
      fontFamily: 'Orbitron, sans-serif',
      fontWeight: 'bold',
      margin: 0,
      padding: 0,
      border: 'none',
      cursor: 'pointer',
    }"
  >
  </span>
  <div class="text-white mb-1 text-lg 2xl:text-xl cursor-pointer"
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
</button>
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