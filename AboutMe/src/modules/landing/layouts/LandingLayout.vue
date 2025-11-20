<template>
  <div class="flex flex-col h-screen">
    <!-- <div class="absolute h-screen bg-red-500 w-0.5 left-[50%] transform -translate-x-1/2 ko0"></div> -->
    <header class="flex justify-center items-center space-x-2 h-28 border-b border-gray-300 sm:h-16 lg:px-8 flex-col sm:flex-row">
        <div class="flex items-center p-2">
            <RouterLink class="flex items-center gap-2 font-semibold" to="/">
            <img alt="Logo" class="rounded-full w-12 h-auto" src="@images/github.jpeg"/>
            </RouterLink>
        </div>
        <nav class="justify-center space-x-4 flex items-center h-10 sm:space-x-6 sm:ml-auto mb-5 sm:mb-0">
            <section class="flex flex-col items-center">
              <RouterLink to="/"> Home </RouterLink>
              <span v-if="route.path === '/'" class="bg-gray-900 h-1 w-15 opacity-90 rounded-xl"></span>
            </section>
            <section class="flex flex-col items-center">
              <RouterLink to="/projects">Projects </RouterLink>
              <span v-if="route.path === '/projects'" class="bg-gray-900 h-1 w-17 opacity-90 rounded-xl"></span>
            </section>
            <section class="flex flex-col items-center">
              <RouterLink to="/personal">Personal </RouterLink>
              <span v-if="route.path === '/personal'" class="bg-gray-900 h-1 w-17 opacity-90 rounded-xl"></span>
            </section>
            <section class="flex flex-col items-center">
              <RouterLink to="/contact"> Contact </RouterLink>
              <span v-if="route.path === '/contact'" class="bg-gray-900 h-1 w-17 opacity-90 rounded-xl"></span>
            </section>
        </nav>
        <button class="rounded-full bg-black w-8 h-8">
        </button>
    </header>

    <main class="flex-1 flex items-center justify-center">
      <RouterView />
    </main>

    <footer class="flex items-center h-14 px-4 border-t border-gray-300 sm:h-16 md:px-6 lg:px-8">
      <p class="flex-1 text-sm text-gray-500 text-center m-4 lg:m-1">
        © {{ new Date().getFullYear() }} Alain Lobato (DevLine).
      </p>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
const route = useRoute();
</script>
