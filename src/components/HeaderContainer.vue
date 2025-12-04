<template>
  <div class="flex items-center justify-center m-2">
    <div class="flex flex-col text-center gap-3 lg:w-250">
      <h1
        class="text-primary md:block text-4xl font-extrabold lg:text-5xl xl:text-6xl tracking-tight sm:leading-none"
      >
        {{ title }}
      </h1>
      <p class="text-lg ml-8 mr-8 text-text-primary sm:text-base xl:text-xl">
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  description: string
}>()
</script>
