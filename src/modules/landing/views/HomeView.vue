<template>
  <div class="bg-surface h-full font-sans flex flex-col items-center justify-center">
    <div class="mx-auto px-4 sm:px-6 lg:px-8">
      <div class="lg:grid lg:grid-cols-12 lg:gap-8 pt-12 lg:pt-0">
        <div
          class="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:flex lg:items-center"
        >
          <div class="">
            <div class="flex items-center justify-center gap-4 m-2">
              <img
                src="@images/profile.png"
                alt="Photo of me"
                class="h-72 w-72 object-cover rounded-3xl"
                loading="eager"
              />
              <div
                class="text-3xl sm:text-4xl tracking-tight font-extrabold sm:leading-none lg:text-5xl xl:text-6xl"
              >
                <p class="sm:block text-text-primary">Alain Lobato</p>
                <span class="text-zinc-500/95 md:block">Bs in Computer Science</span>
                <p class="text-primary md:block">Software Developer</p>
              </div>
            </div>
            <div class="mt-10 lg:flex md:justify-center">
              <button
                class="inline-flex items-center border-2 border-text-primary hover:border-primary text-white bg-black justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 text-primary-foreground h-10 px-4 py-2 w-full lg:w-auto"
              >
                <component :is="GithubIcon" class="w-7 h-7 mr-2" />
                <a href="https://github.com/AlainLobato" target="_blank"> Github profile </a>
              </button>
              <button
                class="inline-flex hover:ring-gray-400 hover:text-primary items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 border-2 border-input bg-background hover:border-primary h-10 px-4 py-2 mt-3 w-full lg:mt-0 lg:ml-3 lg:w-auto bg-white"
              >
                <component :is="SendIcon" class="w-7 h-7 mr-2" />
                <RouterLink to="/contact"> Contact Me </RouterLink>
              </button>
            </div>
          </div>
        </div>
        <div class="mt-16 lg:mt-24 xl:mt-0 lg:col-span-5">
          <p class="text-lg ml-2 mr-2 md:ml-8 md:mr-8 text-text-primary">
            Transforming complex problems into solutions through continuous learning. I am a
            Full-stack Developer with knowledge in start-up environments, data analysis and IoT
            ecosystems.
            <br />
            <b>&lt;/&gt; Code tells you how, comments tell you why</b>
          </p>
          <div class="mt-12">
            <div class="grid grid-cols-3 gap-6 md:gap-8 lg:gap-6 xl:gap-8">
              <StatCard label="Age" value="20" />
              <StatCard label="Projects" value="10+" />
              <StatCard label="Experience" value="2y+" />
            </div>
          </div>
          <div class="p-2 mt-8 md:mt-12 flex justify-center flex-wrap">
            <MainIcon iconName="Python" />
            <MainIcon iconName="JS" />
            <MainIcon iconName="Rails" />
            <MainIcon iconName="Vue" />
            <MainIcon iconName="TypeScript" />
            <MainIcon iconName="Angular" />
            <component
              :is="getIcon('react')"
              class="relative flex h-10 w-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 shrink-0 overflow-hidden text-[#3ebfe2] mr-1"
            />
            <component
              :is="getIcon('database')"
              class="relative flex h-10 w-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 shrink-0 overflow-hidden text-primary"
            />
            <MainIcon iconName="Docker" />
            <component
              :is="getIcon('arduino')"
              class="relative flex h-10 w-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 shrink-0 overflow-hidden text-[#00979C]"
            />
            <MainIcon iconName="Git" />
            <component
              :is="getIcon('linux')"
              class="relative flex h-10 w-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 shrink-0 overflow-hidden text-text-primary"
            />
            <component
              :is="getIcon('tailwind_color')"
              class="relative flex h-10 w-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 shrink-0 overflow-hidden"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import StatCard from '@/components/StatCard.vue'
import MainIcon from '@/components/MainIcon.vue'
import SendIcon from '@/components/icons/SendIcon.vue'
import GithubIcon from '@/components/icons/GithubIcon.vue'
import { getIcon } from '@/utils/getIcon'
</script>
