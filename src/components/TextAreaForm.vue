<template>
  <div
    class="flex items-start px-3.5 py-2 text-text-primary rounded-md hover:ring-1 hover:ring-primary focus-within:ring-2 focus-within:ring-primary border-2 border-text-primary/20 hover:border-primary bg-card"
  >
    <component :is="getIcon(icon)" class="mr-3 w-5 h-5 primary-color shrink-0 mt-0.5 text-primary" />

    <textarea
      :placeholder="placeholder"
      rows="6"
      :name="name"
      class="block w-full bg-transparent text-md sm:text-sm text-text-primary placeholder:text-gray-400 outline-none focus:ring-0 p-0 m-0 resize-none"
      style="caret-color: rgb(107, 114, 128)"
    ></textarea>
  </div>
</template>

<script setup lang="ts">
import { getIcon } from '@/utils/getIcon'

defineProps<{
  placeholder: string
  icon: string
  name?: string
}>()
</script>
