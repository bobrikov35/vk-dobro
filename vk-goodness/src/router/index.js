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
    path: '/account',
    name: 'Account',
    component: () => import('../views/Account.vue'),
  },
  {
    path: '/project/:name',
    name: 'Project',
    props: true,
    component: () => import('../views/Project.vue'),
  },
  {
    path: '/dobrothon/:id',
    name: 'Dobrothon',
    props: true,
    component: () => import('../views/Dobrothon.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
