<template>
  <div 
    class="relative h-64 rounded-xl overflow-hidden shadow-lg group"
    :style="{'background-image': `url(${activity.imagePath})`}"
  >
    <div class="absolute inset-0 bg-black/40 transition-all duration-300 group-hover:bg-black/60"></div>
    
    <div class="absolute bottom-0 left-0 p-4 text-white">
      <h3 class="text-xl font-bold">{{ activity.title }}</h3>
    </div>

    <div class="absolute inset-0 flex items-center justify-center p-6 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
      <p class="text-center text-sm">
        {{ activity.description }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

interface Activity {
  title: string;
  description: string;
  imagePath: string;
  tags: string[];
}

defineProps<{
  activity: Activity;
}>();
</script>
