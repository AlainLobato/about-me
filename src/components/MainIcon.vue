<template>
  <img
    class="relative flex h-10 w-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 overflow-hidden m-1 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-400 hover:cursor-pointer"
    :alt="'icon-' + props.iconName"
    :src="getIcon(props.iconName)"
  />
</template>

<script setup lang="ts">
import type { DefineComponent } from 'vue'

interface Props {
  iconName: string
}

const props = defineProps<Props>()

const iconsMap = {
  python: 'https://www.svgrepo.com/show/452091/python.svg',
  js: 'https://www.svgrepo.com/show/452045/js.svg',
  rails: 'https://www.svgrepo.com/show/354252/rails.svg',
  vue: 'https://www.svgrepo.com/show/493625/vue-vuejs-javascript-js-framework.svg',
  typescript: 'https://www.svgrepo.com/show/349540/typescript.svg',
  angular: 'https://www.svgrepo.com/show/452156/angular.svg',
  database: 'https://www.svgrepo.com/show/525311/database.svg',
  docker: 'https://www.svgrepo.com/show/448221/docker.svg',
  arduino: 'https://www.svgrepo.com/show/473549/arduino.svg',
  git: 'https://www.svgrepo.com/show/452210/git.svg',
  linux: 'https://www.svgrepo.com/show/354004/linux-tux.svg',
  react: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
}

type IconKey = keyof typeof iconsMap

const getIcon = (tech: string | DefineComponent<unknown>): string => {
  const key = tech.toLowerCase() as IconKey

  if (iconsMap.hasOwnProperty(key)) {
    return iconsMap[key]
  }

  return ''
}
</script>
