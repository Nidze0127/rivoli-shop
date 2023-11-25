import { createRouter, createWebHistory } from 'vue-router'
import { HomeView, AboutUsView, NotFoundView, NewsList, NewsMain } from '@/views'

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
    },
    {
      path: '/news',
      name: 'news',
      component: NewsMain,
      children: [
        {
          path: 'list',
          name: 'news-list',
          component: NewsList
        }
      ]
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: NotFoundView
    }
  ]
})

export default router
