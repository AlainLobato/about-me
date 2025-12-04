<template>
  <div class="flex flex-col h-screen">
    <!-- <div class="absolute h-screen bg-red-500 w-0.5 left-[50%] transform -translate-x-1/2 ko0"></div> -->
    <header
      class="flex justify-center items-center space-x-2 h-28 border-b border-gray-300 sm:h-16 lg:px-8 flex-col sm:flex-row bg-surface"
    >
      <div class="flex items-center p-2 hover:scale-105 transition-transform">
        <RouterLink class="flex items-center gap-2 font-semibold" to="/">
          <img alt="Logo" class="rounded-full w-12 h-auto" src="@images/github.webp" />
          <span class="text-text-primary py-1 rounded-full font-normal">Alain Lobato</span>
        </RouterLink>
      </div>
      <nav
        class="justify-center space-x-4 flex items-center h-10 sm:space-x-6 sm:ml-auto mb-5 sm:mb-0 p-3"
      >
        <AnchorLink path="/" label="Home" />
        <AnchorLink path="/projects" label="Projects" />
        <AnchorLink path="/personal" label="Personal" />
        <AnchorLink path="/contact" label="Contact" />
      </nav>
      <!-- <button
        @click="toggleDarkMode"
        class="rounded-full bg-black w-8 h-8 cursor-pointer flex justify-center items-center hover:bg-gray-800 transition-colors"
      >
        <span v-if="isDarkMode" class="text-yellow-400">🌞</span>
        <span v-else class="text-gray-200">🌙</span>
      </button> -->
      <PullCord class="absolute" />
    </header>

    <main class="flex-1 flex justify-center">
      <RouterView />
    </main>

    <footer
      class="flex items-center h-14 px-4 border-t border-gray-300 sm:h-16 md:px-6 lg:px-8 bg-surface"
    >
      <p class="flex-1 text-sm text-gray-500 text-center m-4 lg:m-3">
        © {{ new Date().getFullYear() }} Alain Lobato (DevLine).
      </p>
    </footer>
  </div>
</template>

<script setup lang="ts">
import AnchorLink from '@/components/AnchorLink.vue'
import PullCord from '@/components/PullCord.vue'
</script>
