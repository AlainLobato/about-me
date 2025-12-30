<template>
  <div class="text-center sm:flex sm:items-center sm:justify-center">
    <div class="sm:shrink-0">
      <div class="flow-root">
        <BadgeComponent :label="label" />
        <p class="text-3xl sm:text-4xl font-bold text-text-primary mt-2">{{ value }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import BadgeComponent from './BadgeComponent.vue'

interface Props {
  label: string
  value: string
}

defineProps<Props>()
</script>
