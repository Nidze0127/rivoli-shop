import { createRouter, createWebHistory } from 'vue-router'
import { HomeView, AboutUsView } from '@/views'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about-us',
      name: 'about-us',
      component: AboutUsView
    }
  ]
})

export default router
