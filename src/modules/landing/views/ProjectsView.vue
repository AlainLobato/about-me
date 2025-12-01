<template>
  <div class="bg-white flex flex-col w-screen gap-4 pt-8 items-center">
    <HeaderContainer
      title="My Projects"
      description="Here are some of the projects I've worked on. Feel free to explore and check out the code repositories! The disable buttons are for projects that are still in development, not yet publicly available or not hosted online."
    />

    <div class="flex w-full overflow-hidden items-center justify-center px-10 pb-2.5">
      <div class="w-full max-w-2xl bg-white rounded-lg shadow-md shadow-blue-gray-500/40">
        <InputForm
          placeholder="Search projects by title or technology..."
          type="text"
          icon="search"
          v-model="filterValue"
        />
      </div>
    </div>

    <div class="flex p-7 md:max-w-300 lg:max-w-350 xl:max-w-400 justify-center gap-5 flex-wrap">
      <CardContainer
        v-for="(project, index) in filteredProjects"
        :key="index"
        :title="project.title"
        :description="project.description"
        :image-path="project.image"
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
import InputForm from '@/components/InputForm.vue'
import { projects } from '@/utils/projects'

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
