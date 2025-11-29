<template>
  <div class="flex rounded-xl">
    <div class="max-w-105 mx-auto">
      <div
        class="relative flex w-full flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg"
      >
        <div
          class="relative mx-4 mt-4 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40 justify-center flex"
        >
          <img class="object-cover h-60 max-h-60" :src="imagePath" alt="Project Image" />
          <div
            class="absolute inset-0 w-full h-full to-bg-black-10 bg-linear-to-tr from-transparent via-transparent to-black/60"
          ></div>
        </div>
        <div
          v-if="repositoryUrl"
          class="absolute right-0 flex bg-white/80 backdrop-blur-md rounded-full shadow-md shadow-blue-gray-500/20 justify-center items-center hover:scale-105 transition-transform hover:cursor-pointer"
        >
          <a :href="repositoryUrl" target="_blank">
            <component :is="GithubIcon" class="w-10 h-10 text-gray-900 hover:text-gray-700" />
          </a>
        </div>
        <div class="p-6">
          <div class="flex items-center justify-between mb-3">
            <h5
              class="block font-sans text-2xl sm:text-xl antialiased font-medium leading-snug tracking-normal text-blue-gray-900"
            >
              {{ title }}
            </h5>
          </div>
          <p
            class="block font-sans antialiased font-light leading-relaxed text-gray-700 h-35 min-h-35 overflow-scroll text-lg sm:text-base"
          >
            {{ description }}
          </p>
          <div class="flex flex-wrap items-center gap-3 mt-8 group w-full justify-around">
            <span
              class="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:opacity-100 group-hover:opacity-70 justify-center items-center flex"
              v-for="tech in technologies"
              :key="tech"
            >
              <component :is="getIcon(tech.toLowerCase())" class="w-6 h-6" />
            </span>
          </div>
        </div>
        <div class="p-6 pt-3">
          <a :href="websiteUrl" target="_blank">
            <button
              :class="{
                block: true,
                'w-full select-none rounded-lg bg-gray-900 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 hover:bg-gray-800 hover:cursor-pointer': true,
                'opacity-50 cursor-not-allowed': !websiteUrl,
              }"
            >
              Visit Website
            </button>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import GithubIcon from './icons/GithubIcon.vue';
import { getIcon } from '@/utils/getIcon';

defineProps<{
  title: string
  description: string
  imagePath: string
  repositoryUrl?: string
  technologies: Array<string>
  websiteUrl?: string
}>()
</script>
