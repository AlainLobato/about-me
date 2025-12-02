<template>
    <div
    class="flex items-center px-3.5 py-2 text-gray-400 group hover:ring-1 hover:ring-orange-600 focus-within:ring-orange-600 focus-within:ring-1 ring-inset rounded-md ring-gray-800 border border-gray-300"
    >
        <component
            :is="getIcon(icon)"
            class="mr-3 min-w-5 min-h-5 h-5 w-5 sm:h-6 sm:w-6 text-orange-600"
        />
        <input
            class="block appearance-none bg-transparent text-base text-gray-700 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6 w-full sm:w-md lg:w-lg xl:w-xl"
            :placeholder="placeholder"
            aria-label="Search components"
            id="headlessui-combobox-input-:r5n:"
            role="combobox"
            :name="name"
            :type="type"
            aria-expanded="false"
            aria-autocomplete="list"
            style="caret-color: rgb(107, 114, 128)"
            :value="modelValue"
            @input="onInput"
        />
    </div>
</template>

<script setup lang="ts">
import { getIcon } from '@/utils/getIcon';

const emit = defineEmits(['update:modelValue']);

const onInput = (event: Event) => {
  emit('update:modelValue', (event.target as HTMLInputElement).value);
};

defineProps<{
  placeholder: string;
  type: string;
  icon: string;
  modelValue?: string;
  name?: string;
}>();

</script>
