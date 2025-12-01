<template>
  <div
    class="flex items-start px-3.5 py-2 text-gray-400 rounded-md
           hover:ring-1 hover:ring-orange-600 
           focus-within:ring-1 focus-within:ring-orange-600
           border border-gray-300
           "
  >
    <component
      :is="getIcon(icon)"
      class="mr-3 w-5 h-5 text-orange-600 shrink-0 mt-0.5"
    />

    <textarea
      :placeholder="placeholder"
      rows="6"
      class="
        block w-full bg-transparent text-md sm:text-sm text-gray-700 
        placeholder:text-gray-400 
        outline-none focus:ring-0
        p-0 m-0 resize-none"
      style="caret-color: rgb(107, 114, 128)"
    ></textarea>
  </div>
</template>

<script setup lang="ts">
import { getIcon } from '@/utils/getIcon';

defineProps<{
  placeholder: string;
  icon: string;
}>();
</script>
