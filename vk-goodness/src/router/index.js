import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Projects',
    component: () => import('../views/Projects.vue'),
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
  },
  {
    path: '/single/:name',
    name: 'Single',
    props: true,
    component: () => import('../views/Single.vue'),
  },
  {
    path: '/index',
    name: 'Account',
    component: () => import('../views/Account.vue'),
  },
  {
    path: '/donations/:name',
    name: 'Donation',
    props: true,
    component: () => import('../views/Single.vue'),
  },
  {
    path: '/dobrothons/:name',
    name: 'Dobrothon',
    props: true,
    component: () => import('../views/Dobrothon.vue'),
  },
  {
    path: '/test',
    name: 'Test',
    props: true,
    component: () => import('../views/_Test.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
