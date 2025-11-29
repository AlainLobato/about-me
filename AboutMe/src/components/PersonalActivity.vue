<template>
  <div class="relative flex flex-col md:flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg group">
    <div class="relative w-full md:w-2/5 m-0 overflow-hidden rounded-t-xl md:rounded-l-xl md:rounded-tr-none bg-white bg-clip-border text-gray-700 shadow-md md:shadow-none">
      <img
        :src="activity.imageUrl"
        :alt="activity.title"
        class="h-full w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
        loading="lazy"
      />
    </div>

    <div class="p-6 w-full md:w-3/5 flex flex-col justify-between">
      <div>
        <h4 class="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
          {{ activity.title }}
        </h4>
        <p class="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
          {{ activity.description }}
        </p>
      </div>
      
      <div class="flex flex-col gap-y-2 mt-4">
        <div v-if="activity.tags && activity.tags.length > 0" class="flex flex-wrap gap-2 mt-2">
            <span v-for="tag in activity.tags" :key="tag" class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{{ tag }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

interface Activity {
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
}

defineProps<{
  activity: Activity;
}>();
</script>
