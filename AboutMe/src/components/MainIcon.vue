<template>
    <img
      class="relative flex h-14 w-14 shrink-0 overflow-hidden"
      :alt="'icon-' + props.iconName"
      :src="getIcon(props.iconName)"
    />
</template>

<script setup lang="ts">
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
};

const props = defineProps<{
  iconName: string;
}>();

type IconKey = keyof typeof iconsMap;

const getIcon = (tech: string): string => {
  const key = tech.toLowerCase() as IconKey;
  if (iconsMap.hasOwnProperty(key)) {
     return iconsMap[key]; 
  }
  
  return '';
}
</script>
