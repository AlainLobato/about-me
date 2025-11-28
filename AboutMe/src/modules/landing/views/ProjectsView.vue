<template>
  <div class="bg-white flex flex-col w-screen gap-4 pt-8 items-center">
    <HeaderContainer
      title="My Projects"
      description="Here are some of the projects I've worked on. Feel free to explore and check out the code repositories! The disable buttons are for projects that are still in development, not yet publicly available or not hosted online."
    />

    <div class="flex w-full overflow-hidden items-center justify-center px-10 pb-2.5">
      <div class="w-full max-w-2xl bg-white rounded-lg shadow-md shadow-blue-gray-500/40">
        <div
          class="flex items-center px-3.5 py-2 text-gray-400 group hover:ring-1 hover:ring-gray-300 ring-inset"
        >
          <svg
            class="mr-2 h-5 w-5 stroke-slate-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
          <input
            class="block appearance-none bg-transparent text-base text-gray-700 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6 w-sm sm:w-md lg:w-lg xl:w-xl"
            placeholder="Search by title or technology..."
            aria-label="Search components"
            id="headlessui-combobox-input-:r5n:"
            role="combobox"
            type="text"
            aria-expanded="false"
            aria-autocomplete="list"
            style="caret-color: rgb(107, 114, 128)"
            v-model="filterValue"
          />
        </div>
      </div>
    </div>

    <div class="flex p-7 md:max-w-300 lg:max-w-350 xl:max-w-400 justify-center gap-5 flex-wrap">
      <CardContainer
        v-for="(project, index) in filteredProjects"
        :key="index"
        :title="project.title"
        :description="project.description"
        :image-path="`/assets/images/${project.imageName}`"
        :repositoryUrl="project.repositoryUrl"
        :websiteUrl="project.websiteUrl"
        :technologies="project.technologies"
      />

      <div
        v-if="filteredProjects.length === 0"
        class="flex flex-col items-center justify-center mt-20 gap-4"
      >
        <img
          src="https://www.svgrepo.com/show/176343/error-page.svg"
          alt="Not Found"
          class="w-30 h-30"
        />
        <p class="text-center text-gray-500">No projects found.</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import CardContainer from '@/components/CardContainer.vue'
import HeaderContainer from '@/components/HeaderContainer.vue'

const projects = [
  {
    title: 'Numerical Analysis Solver',
    description:
      'A webpage for solving mathematical problems using numerical analysis methods. Users can input equations and parameters to get solutions using methods like Montante, Birge-Vieta and Lagrange Interpolation.',
    imageName: 'numanalysis.png',
    repositoryUrl: 'https://github.com/AlainLobato/PIA-AD',
    websiteUrl: 'https://alainlobato.github.io/PIA-AD/',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Github'],
  },
  {
    title: 'Who is That Pokemon: Game',
    description:
      'A fun web-based game that challenges users to identify Pokemon characters based on their silhouettes. It uses the PokeAPI to fetch Pokemon data and provides an interactive experience for fans of the franchise.',
    imageName: 'pokemongame.png',
    repositoryUrl: 'https://github.com/AlainLobato/who-is-that-pokemon-game',
    technologies: ['Vue', 'TypeScript', 'Tailwind', 'Vite', 'Github'],
  },
  {
    title: 'Personal Portfolio Website',
    description:
      'A personal portfolio website to showcase my skills, projects, and experience. It includes sections for about me, projects, skills, and contact information, all designed with a clean and modern aesthetic.',
    imageName: 'portfolio.png',
    repositoryUrl: 'https://github.com/AlainLobato/about-me',
    technologies: ['Vue', 'TypeScript', 'Tailwind', 'Vite', 'Github'],
  },
  {
    title: 'KidFit E-commerce',
    description:
      'E-commerce website for selling clothes. A little project made to show how to create a simple online store with product listings using simply code. Academic project made during my career.',
    imageName: 'kidfit.png',
    repositoryUrl: 'https://github.com/AlainLobato/KidFit-Store',
    websiteUrl: 'https://alainlobato.github.io/KidFit-Store/index.html',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Github'],
  },
  {
    title: 'Cashy App',
    description:
      'It born as a necesity of a local business that lends money to its customers. Cashy App is a simple application to manage loans, payments and customers. It helps to keep track of who owes what and when payments are due.',
    imageName: 'cashyapp.jpeg',
    repositoryUrl: 'https://github.com/AlainLobato/Cashy-App',
    technologies: ['Ionic', 'Angular', 'TypeScript', 'Capacitor', 'Firebase', 'AndroidStudio'],
  },
  {
    title: 'Wedding Invitation Website',
    description:
      "A simple and elegant wedding invitation website to share all the details about the big day with friends and family. It includes sections for the couple's story, event details, RSVP functionality, and a form conected with an Excel to administrate the guest list.",
    imageName: 'invitation.png',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Github', 'Google'],
    websiteUrl: 'https://userdotnet10.github.io/invitacion',
  },
  {
    title: 'Save My Money',
    description:
      'A personal finance management app that helps users track their income, expenses, and savings goals. It provides visualizations and insights to help users make informed financial decisions.',
    imageName: 'savemymoney.png',
    repositoryUrl: 'https://github.com/AlainLobato/SaveMyMoney',
    technologies: ['Flask', 'Docker', 'Jenkins', 'Sqlite', 'HTML'],
  },
  {
    title: 'Agenda App',
    description:
      'A simple agenda application to practice CRUD operations using React, Node.js, and MongoDB. Users can create, read, update and delete their contacts easily. Filtered by phone number. Deployed using Vite and Render.',
    imageName: 'agenda.png',
    repositoryUrl: 'https://github.com/AlainLobato/Agenda-API',
    websiteUrl: 'https://agenda-api-c47p.onrender.com/',
    technologies: ['React', 'Nodejs', 'JavaScript', 'Express', 'Mongo', 'Vite'],
  },
  {
    title: 'Monitoring and Backup System',
    description:
      'A solution for a problem that i was with my previous job. A monitoring and backup system for servers and databases using Prometheus and Grafana for monitoring, and custom scripts for automated backups.',
    imageName: 'grafana.png',
    technologies: ['Linux', 'Docker', 'Prometheus', 'Grafana', 'Bash'],
  },
  {
    title: 'Greenhouse Environment Monitor',
    description:
      'A system to monitor and control the environment inside a greenhouse using IoT devices. It collects data on temperature, humidity, and soil moisture, and allows an API with a server in ESP32 to control actuators.',
    imageName: 'iot.png',
    technologies: ['Cpp', 'ESP32', 'Arduino'],
  },
  {
    title: 'Data Mining: Monterrey Air Quality',
    description:
      'A data mining project that analyzes air quality data from Monterrey, Mexico. It uses various data mining techniques to identify patterns and trends in air pollution levels over time. Using a dataset that i found online. Generates visualizations to help understand the factors affecting air quality in the region.',
    imageName: 'datamining.png',
    repositoryUrl: 'https://github.com/AlainLobato/Data-Mining',
    technologies: ['Python', 'Pandas', 'Plotly'],
  },
]

const filterValue = ref('')
const filteredProjects = computed(() => {
  if (!filterValue.value) {
    return projects
  }
  return projects.filter(
    (project) =>
      project.title.toLowerCase().includes(filterValue.value.toLowerCase()) ||
      project.technologies.some((lang) =>
        lang.toLowerCase().includes(filterValue.value.toLowerCase()),
      ),
  )
})
</script>
