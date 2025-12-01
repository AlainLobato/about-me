<template>
  <section class="mx-auto px-4 py-12 bg-white flex flex-col w-screen gap-4 pt-8 items-center">
    <HeaderContainer
      title="Personal Interests & Hobbies"
      description="Beyond coding, I have a variety of interests and hobbies that keep me inspired and motivated. Here are some of the activities I enjoy in my free time."
    />

    <div class="grid grid-cols-1 gap-8 max-w-4xl mx-auto mt-12">
      <PersonalActivity 
        v-for="activity in personalActivities" 
        :key="activity.title" 
        :activity="activity" 
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import PersonalActivity from '@/components/PersonalActivity.vue';
import HeaderContainer from '@/components/HeaderContainer.vue';

import { personalActivities } from '@/utils/personalActivities';
</script>
