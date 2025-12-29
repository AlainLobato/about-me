<template>
  <div class="bg-surface flex flex-col w-screen gap-4 pt-8 items-center">
    <HeaderContainer
      title="Certifications"
      description="A curated collection of courses and certifications that showcase my commitment to continuous learning and professional growth in technology and development."
    />

    <div class="flex p-7 md:max-w-300 lg:max-w-350 xl:max-w-400 justify-center gap-5 flex-wrap">
      <CertificationCard
        v-for="certification in certifications"
        :key="certification.title"
        :title="certification.title"
        :placement="certification.placement"
        :description="certification.description"
        :certificatePath="certification.certificatePath"
        :technologies="certification.technologies"
        :inProgress="certification.inProgress"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import HeaderContainer from '@/components/HeaderContainer.vue'
import CertificationCard from '@/components/CertificationCard.vue'
import { certifications } from '@/constants/certifications'
</script>
