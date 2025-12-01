<template>
  <div class="flex flex-col h-screen">
    <!-- <div class="absolute h-screen bg-red-500 w-0.5 left-[50%] transform -translate-x-1/2 ko0"></div> -->
    <header class="flex justify-center items-center space-x-2 h-28 border-b border-gray-300 sm:h-16 lg:px-8 flex-col sm:flex-row">
      <div class="flex items-center p-2 hover:scale-105 transition-transform">
          <RouterLink class="flex items-center gap-2 font-semibold" to="/">
          <img alt="Logo" class="rounded-full w-12 h-auto" src="@images/github.jpeg"/>
          <span class="text-gray-900 py-1 rounded-full font-normal">Alain Lobato</span>
          </RouterLink>
      </div>
      <nav class="justify-center space-x-4 flex items-center h-10 sm:space-x-6 sm:ml-auto mb-5 sm:mb-0 p-3">
        <AnchorLink path="/" label="Home" />
        <AnchorLink path="/projects" label="Projects" />
        <AnchorLink path="/personal" label="Personal" />
        <AnchorLink path="/contact" label="Contact" />
      </nav>
      <!-- <button class="rounded-full bg-black w-8 h-8 cursor-pointer flex justify-center items-center hover:bg-gray-800 transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </button> -->
    </header>

    <main class="flex-1 flex justify-center">
      <RouterView />
    </main>

    <footer class="flex items-center h-14 px-4 border-t border-gray-300 sm:h-16 md:px-6 lg:px-8">
      <p class="flex-1 text-sm text-gray-500 text-center m-4 lg:m-3">
        © {{ new Date().getFullYear() }} Alain Lobato (DevLine).
      </p>
    </footer>
  </div>
</template>

<script setup lang="ts">
import AnchorLink from '@/components/AnchorLink.vue';
</script>
