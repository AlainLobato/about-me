<template>
  <section
    class="flex flex-col items-center hover:scale-105 transition-transform text-text-primary hover:text-primary"
  >
    <RouterLink class="text-lg sm:text-base" :to="path">
      {{ label }}
    </RouterLink>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  path: string
  label: string
}>()
</script>
