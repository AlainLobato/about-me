<template>
  <li class="flex items-center">
    <a target="blank" :href="props.link" class="primary-color text-sm flex items-center space-x-3">
      <div
        class="bg-transparent h-10 w-10 rounded-full flex items-center justify-center shrink-0 border border-text-primary/20 hover:border-primary hover:scale-120 transition-transform text-text-primary hover:text-primary"
      >
        <component :is="getIcon(iconName)" class="w-5 h-5" />
      </div>
      <section class="hover:scale-105 transition-transform text-primary">
        <small class="block">{{ title }}</small>
        <strong class="block text-lg sm:text-base">{{ text }}</strong>
      </section>
    </a>
  </li>
</template>

<script setup lang="ts">
import { getIcon } from '@/utils/getIcon'

const props = defineProps<{
  iconName: string
  title?: string
  link?: string
  text?: string
}>()
</script>
