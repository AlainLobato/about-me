<template>
    <li class="flex items-center">
        <a
            target="blank"
            :href="props.link"
            class="text-orange-600 text-sm flex items-center space-x-3 hover:scale-105 transition-transform"
        >
            <div
                class="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0"
            >
                <component :is="getIcon(iconName)" class="w-5 h-5 text-orange-600" />
            </div>
            <section v-if="title">
                <small class="block">{{ title }}</small>
                <strong class="block text-lg sm:text-md">{{ text }}</strong>
            </section>
        </a>
    </li>
</template>

<script setup lang="ts">
import { getIcon } from '@/utils/getIcon';

const props = defineProps<{
    iconName: string;
    title?: string;
    link?: string;
    text?: string;
}>();
</script>
