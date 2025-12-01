<template>
    <div class="text-center sm:flex sm:items-center sm:justify-center">
        <div class="sm:shrink-0">
            <div class="flow-root">
            <div
                class="border w-fit transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-primary/80 inline-flex items-center justify-center px-3 py-0.5 text-sm font-medium leading-5 text-orange-600 bg-orange-100 rounded-full"
            >
                {{ label }}
            </div>
            <p class="text-3xl sm:text-4xl font-bold text-gray-900">{{ value }}</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    label: string;
    value: string;
}>();
</script>
