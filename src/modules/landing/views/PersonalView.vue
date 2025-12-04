<template>
  <section class="mx-auto px-4 py-12 bg-surface flex flex-col w-screen gap-4 pt-8 items-center">
    <HeaderContainer
      title="Personal Interests & Hobbies"
      description="Beyond coding, I have a variety of interests and hobbies that keep me inspired and motivated. Here are some of the activities I enjoy in my free time."
    />

    <section class="container mx-auto px-4 py-12">
        <h2>Pasiones y Principios</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <PersonalActivity 
                v-for="activity in personalActivities" 
                :key="activity.title" 
                :activity="activity"
            />
        </div>
        
        <div class="mt-12">
            <h3>Mi Enfoque Analítico</h3>
            </div>
    </section>
  </section>
</template>

<script setup lang="ts">
import PersonalActivity from '@/components/PersonalActivity.vue'
import HeaderContainer from '@/components/HeaderContainer.vue'

import { personalActivities } from '@/utils/personalActivities'
</script>
