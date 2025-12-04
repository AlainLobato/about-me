<template>
  <section
    class="flex flex-col items-center hover:scale-105 transition-transform text-text-primary hover:text-primary"
  >
    <RouterLink
      class="text-lg sm:text-base"
      :class="{ 'text-primary': route.path === path }"
      :to="path"
    >
      {{ label }}
    </RouterLink>
  </section>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'

defineProps<{
  path: string
  label: string
}>()

const route = useRoute()
</script>
