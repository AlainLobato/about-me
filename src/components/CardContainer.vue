<template>
  <div class="flex rounded-xl">
    <div class="max-w-105 mx-auto">
      <div
        class="relative flex w-full flex-col rounded-xl bg-card bg-clip-border text-text-primary shadow-lg"
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
            <component :is="GithubIcon" class="w-10 h-10 text-black hover:text-primary" />
          </a>
        </div>
        <div class="p-6">
          <div class="flex items-center justify-between mb-3">
            <p
              class="block font-sans text-2xl sm:text-xl antialiased font-medium leading-snug tracking-normal text-blue-gray-900"
            >
              {{ title }}
            </p>
          </div>
          <p
            class="block font-sans antialiased font-light leading-relaxed text-text-primary/95 h-35 min-h-35 overflow-scroll text-lg sm:text-base"
          >
            {{ description }}
          </p>
          <div class="flex flex-wrap items-center gap-3 mt-8 group w-full justify-around">
            <span
              class="cursor-pointer rounded-full border border-text-primary/20 bg-transparent p-3 text-text-primary transition-colors hover:border-primary hover:bg-card/90 hover:opacity-100 group-hover:opacity-70 justify-center items-center flex"
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
                'w-full select-none rounded-lg bg-text-primary py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-mode shadow-md shadow-text-primary/10 transition-all hover:shadow-lg hover:shadow-text-primary/20 hover:cursor-pointer border-2 border-text-primary hover:border-primary': true,
                'opacity-60 cursor-not-allowed hover:cursor-not-allowed hover:border-text-primary':
                  !websiteUrl,
              }"
              :disabled="!websiteUrl"
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
import GithubIcon from './icons/GithubIcon.vue'
import { getIcon } from '@/utils/getIcon'

defineProps<{
  title: string
  description: string
  imagePath: string
  repositoryUrl?: string
  technologies: Array<string>
  websiteUrl?: string
}>()
</script>
