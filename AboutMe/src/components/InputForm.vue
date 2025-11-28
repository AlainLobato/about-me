<template>
    <div
    class="flex items-center px-3.5 py-2 text-gray-400 group hover:ring-1 hover:ring-orange-600 focus-within:ring-orange-600 focus-within:ring-1 ring-inset rounded-md ring-gray-800 border border-gray-300"
    >
        <component
            :is="getIcon(icon)"
            class="mr-3 h-5 w-5 xs:h-6 xs:w-6 sm:h-8 sm:w-8 text-orange-600"
        />
        <input
            class="block appearance-none bg-transparent text-base text-gray-700 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6 w-full sm:w-md lg:w-lg xl:w-xl"
            :placeholder="placeholder"
            aria-label="Search components"
            id="headlessui-combobox-input-:r5n:"
            role="combobox"
            :type="type"
            aria-expanded="false"
            aria-autocomplete="list"
            style="caret-color: rgb(107, 114, 128)"
        />
    </div>
</template>

<script setup lang="ts">
import { getIcon } from '@/utils/getIcon';

defineProps<{
  placeholder: string;
  type: string;
  icon: string;
}>();

</script>
