import HomeView from '@/modules/landing/views/HomeView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landing',
      component: () => import('@/modules/landing/layouts/LandingLayout.vue'),
      children: [
        {
          path: '/',
          name: 'home',
          component: HomeView,
        },
        {
          path: '/contact',
          name: 'contact',
          component: () => import('@/modules/landing/views/ContactVIew.vue'),
        },
        {
          path: '/projects',
          name: 'projects',
          component: () => import('@/modules/landing/views/ProjectsView.vue'),
        },
        // {
        //   path: '/personal',
        //   name: 'personal',
        //   component: () => import('@/modules/landing/views/PersonalView.vue')
        // }
        {
          path: '/certifications',
          name: 'certifications',
          component: () => import('@/modules/landing/views/CertificationsView.vue'),
        },
      ],
    },
    {
      path: '/success',
      name: 'success',
      component: () => import('@/modules/landing/views/SuccessView.vue'),
    },

    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('@/modules/common/pages/NotFound.vue'),
    },
  ],
})

export default router
