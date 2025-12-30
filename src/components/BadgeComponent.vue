<template>
  <div
    :class="{
      'border w-fit transition-colors inline-flex items-center justify-center px-3 py-0.5 text-sm font-medium leading-5 rounded-full hover:cursor-pointer': true,
      'text-primary bg-bg-primary border-primary/20 hover:bg-primary/80 hover:text-white': !variant,
      'text-text-primary border-text-primary bg-transparent': variant === 'outlined',
    }"
  >
    {{ label }}
  </div>
</template>

<script setup lang="ts">
interface Props {
  label: string
  variant?: 'default' | 'outlined'
}

defineProps<Props>()
</script>
