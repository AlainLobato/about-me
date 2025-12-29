<template>
  <div class="flex shadow rounded-lg border border-gray-400 w-full max-w-105">
    <div class="flex flex-col w-full p-4 bg-card rounded-lg">
      <div class="flex items-center">
        <div
          class="bg-primary/60 w-10 h-10 flex items-center justify-center rounded-full aspect-square mx-2"
        >
          <TrophyIcon class="object-cover w-6 h-6 rounded-lg text-text-primary" />
        </div>

        <div class="flex flex-col">
          <div class="font-bold text-text-primary text-xl lg:text-left px-2">
            {{ title }}
          </div>
          <div class="text-zinc-400 font-medium text-sm lg:text-left px-2">
            {{ placement }}
          </div>
        </div>
      </div>

      <div class="my-3 h-full">
        <div class="text-zinc-400 font-medium text-sm lg:text-left h-16 overflow-scroll">
          {{ description }}
        </div>

        <div class="flex justify-start pr-7 gap-2 mt-6 flex-wrap">
          <BadgeComponent
            variant="outlined"
            v-for="tech in technologies"
            :key="tech"
            :label="tech"
          />
        </div>
      </div>

      <div class="pt-3">
        <a :href="certificatePath" target="_blank">
          <button
            :class="{
              'block w-full select-none rounded-lg bg-text-primary py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-mode shadow-md shadow-text-primary/10 transition-all hover:shadow-lg hover:shadow-text-primary/20 hover:cursor-pointer border-2 border-text-primary hover:border-primary': true,
              'opacity-60 cursor-not-allowed hover:cursor-not-allowed hover:border-text-primary':
                inProgress,
            }"
          >
            <ExternalLinkIcon v-if="!inProgress" class="inline-block mr-2" />
            {{ inProgress ? 'In Progress' : 'View Certificate' }}
          </button>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import BadgeComponent from '@/components/BadgeComponent.vue'
import TrophyIcon from '@/components/icons/TrophyIcon.vue'
import ExternalLinkIcon from '@/components/icons/ExternalLinkIcon.vue'

interface Props {
  title: string
  placement: string
  description: string
  certificatePath?: string
  technologies: string[]
  inProgress?: boolean
}

defineProps<Props>()
</script>
