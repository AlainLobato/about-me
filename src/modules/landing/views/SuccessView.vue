<template>
  <div class="bg-gray-100 h-screen flex items-center justify-center">
    <div class="bg-white p-6 md:mx-auto rounded-lg shadow-2xl mx-6">
      <img :src="mailBox" class="w-32 mx-auto mt-4 mb-4" />
      <div class="text-center w-full sm:w-md">
        <h3 class="text-2xl text-gray-900 font-semibold text-center">Mail sent!</h3>
        <p class="text-gray-900 my-2">
          Success! Your message has been sent. Thank you for the opportunity to connect. I will
          personally review your inquiry and respond at my earliest convenience.
        </p>
        <p>Have a great day!</p>
        <div class="py-5 text-center">
          <a
            :href="homeUrl"
            class="text-white bg-orange-600 hover:bg-orange-700 font-semibold rounded-md text-sm px-4 py-2.5 hover:cursor-pointer"
          >
            Go Home
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import mailBox from '@icons/MailBox.svg'

const homeUrl = import.meta.env.VITE_HOME_URL || 'http://localhost:5173/'
</script>
