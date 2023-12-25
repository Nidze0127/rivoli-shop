import { createRouter, createWebHistory } from 'vue-router'
import {
  HomePage,
  AboutUsPage,
  NotFoundPage,
  NewsListPage,
  NewsMainPage,
  NewsDetailsPage,
  ContactsPage,
  GalleryPage
} from '@/pages'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/about-us',
      name: 'about-us',
      component: AboutUsPage
    },
    {
      path: '/news',
      name: 'news',
      component: NewsMainPage,
      children: [
        {
          path: 'list',
          name: 'news-list',
          component: NewsListPage
        },
        {
          path: ':id',
          name: 'news-details',
          component: NewsDetailsPage
        }
      ]
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: ContactsPage
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: GalleryPage
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: NotFoundPage
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  }
})

export default router
