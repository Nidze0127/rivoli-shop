import { createRouter, createWebHistory } from 'vue-router'
import {
  HomeDesktop,
  AboutUsDesktop,
  NotFoundDesktop,
  NewsListDesktop,
  NewsMainDesktop,
  NewsDetailsDesktop,
  ContactsDesktop
} from '@/pages'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeDesktop
    },
    {
      path: '/about-us',
      name: 'about-us',
      component: AboutUsDesktop
    },
    {
      path: '/news',
      name: 'news',
      component: NewsMainDesktop,
      children: [
        {
          path: 'list',
          name: 'news-list',
          component: NewsListDesktop
        },
        {
          path: ':id',
          name: 'news-details',
          component: NewsDetailsDesktop
        }
      ]
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: ContactsDesktop
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: NotFoundDesktop
    }
  ]
})

export default router
