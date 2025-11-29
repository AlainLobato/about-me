<template>
  <div class="bg-white flex flex-col w-screen gap-4 pt-8 items-center">
    <HeaderContainer
      title="Contact Me"
      description="Feel free to reach out to me for any inquiries, collaborations, or just to say hello! I'm always open to connecting with fellow developers and professionals in the tech community, also if you are not there."
    />

    <div class="flex flex-col flex-wrap my-6 items-center w-full px-4 sm:px-6 lg:px-8">
      <div
        class="grid sm:grid-cols-2 items-center gap-16 max-w-4xl bg-white shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md t-[sans-serif] p-6 md:p-12 w-full flex-wrap text-wrap"
      >
        <div class="flex flex-col">
          <h1 class="text-3xl font-extrabold">Get In Touch</h1>
          <span class="text-sm text-gray-600 mt-3 ">
            It can be difficult find the right words to start a conversation, but don't worry! Just
            fill out the form and I'll get back to you as soon as possible.
          </span>
          <div class="mt-12">
            <h2 class="text-lg font-extrabold">Email</h2>
            <ul class="mt-3">
              <LinkedIcon
                link="mailto:alainlobato0710@gmail.com"
                icon-name="mail"
                title="Mail"
                text="alainlobato0710@gmail.com"
              />
            </ul>
          </div>
          <div class="mt-12 flex gap-8">
            <div>
              <h2 class="text-lg font-extrabold">Socials</h2>
              <ul class="flex mt-3 space-x-4">
                <LinkedIcon
                  link="https://www.linkedin.com/in/alain-lobato/"
                  icon-name="linkedin"
                />

                <LinkedIcon
                  link="https://github.com/AlainLobato"
                  icon-name="github"
                />
              </ul>
            </div>
            <div>
              <h2 class="text-lg font-extrabold">Ubication</h2>
              <div class="flex items-start justify-center mt-3">
                <MexicoFlag class="w-12 h-12 min-w-12 mr-2" />
                <span class="text-sm text-gray-600 mt-1">
                  Monterrey, Nuevo León
                  <br>
                  México
                </span>
              </div>
            </div>
          </div>
        </div>

        <div>
          <span class="mb-5 text-gray-600 flex items-center">
            <component :is="SendIcon" class="w-6 h-6 inline-block mr-2 text-gray-600" />
            Send a Mail
          </span>
          <div class="flex flex-col space-y-4 justify-center w-full">
            <InputForm placeholder="Name" type="text" icon="user" />
            <InputForm placeholder="Email" type="email" icon="at_sign" />
            <InputForm placeholder="Subject" type="text" icon="pen" />
            <TextAreaForm placeholder="Message" icon="mail" />
            <button
              class="text-white bg-orange-600 hover:bg-orange-700 font-semibold rounded-md text-sm px-4 py-2.5 opacity-50 cursor-not-allowed"
            >
              Send
            </button>
          </div>
        </div>
      </div>

      <div
        class="grid sm:grid-cols-2 items-center gap-16 max-w-4xl bg-white shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md t-[sans-serif] p-6 md:p-12 w-full flex-wrap text-wrap mt-12"
      >
        <div class="flex flex-col">
          <h1 class="text-3xl font-extrabold">Schedule Available</h1>
          <span class="text-sm sm:text-base text-gray-600 mt-3 ">
            I am available for meetings and discussions during the following hours. Feel free to
            reach out to me within these times.
          </span>
        </div>
        <div class="flex flex-col">
          <h2 class="text-lg font-extrabold">Time Zone: GMT-6 (Central Standard Time)</h2>
          <ul class="mt-3 space-y-1">
            <li class="text-sm sm:text-base text-gray-700">Monday to Friday: 9:00 AM - 6:00 PM</li>
            <li class="text-sm sm:text-base text-gray-700">Saturday: 10:00 AM - 4:00 PM</li>
            <li class="text-sm sm:text-base text-gray-700">Sunday: Closed</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import HeaderContainer from '@/components/HeaderContainer.vue'
import InputForm from '@/components/InputForm.vue';
import LinkedIcon from '@/components/LinkedIcon.vue';
import TextAreaForm from '@/components/TextAreaForm.vue';
import MexicoFlag from '@/components/icons/MexicoFlag.vue';

import SendIcon from '@/components/icons/SendIcon.vue';

</script>
