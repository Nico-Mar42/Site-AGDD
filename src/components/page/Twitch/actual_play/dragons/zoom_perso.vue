<template>
    <div 
        @click="$emit('close')" 
        class="fixed inset-0 z-50 flex flex-col items-center justify-center cursor-pointer p-4"
        style="background-color: rgba(0, 0, 0, 0.8);"
    >
        <div class="p-8"
            style="
                background-color: black;
                border: 1px solid black;
                border-radius: 1rem;
                "
        >
            
            <div 
          
                class="flex flex-row items-center justify-center gap-4">
                <img :src="img" alt="Image du personnage"
                style="width: 10rem; height: 12rem;"
                >
                <div class="flex flex-col items-start justify-center gap-2">
                    <div class='flex flex-row gap-2'> 
                    <h1 class="text-2xl font-bold text-white">Nom: </h1>
                    <h1 class="text-2xl font-bold text-white ">{{ character?.Nom }}</h1>
                    </div>
                    <div class='flex flex-row gap-2'> 
                    <h1 class="text-2xl font-bold text-white">Race: </h1>
                    <h1 class="text-2xl font-bold text-white ">{{ character?.race }}</h1>
                    </div>
                    <div class='flex flex-row gap-2'> 
                    <h1 class="text-2xl font-bold text-white">Rôles: </h1>
                    <h1 class="text-2xl font-bold text-white ">{{ character?.Rôles }}</h1>
                    </div>
                    <div class='flex flex-row gap-2'> 
                    <h1 class="text-2xl font-bold text-white">Âge: </h1>
                    <h1 class="text-2xl font-bold text-white ">{{ character?.Âge }}</h1>
                    </div>
                </div>
            </div>
            <p class="text-2xl text-white mt-4 whitespace-pre-line text-justify ">Description: {{ character?.Description }}</p>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue'
import data from './dragons.json'
import img from character?.img
const props = defineProps({
    Name: String,
})

defineEmits(['close'])

const character = computed(() => {
    return data[props.Name] || null
})
</script>