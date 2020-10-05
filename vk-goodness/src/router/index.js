import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Projects',
    component: () => import('../views/Projects.vue'),
  },
  {
    path: '/project/:name',
    name: 'Project',
    props: true,
    component: () => import('../views/Project.vue'),
  },
  {
    path: '/account',
    name: 'Account',
    component: () => import('../views/Account.vue'),
  },
  {
    path: '/dobrothon/:id',
    name: 'Dobrothon',
    props: true,
    component: () => import('../views/Dobrothon.vue'),
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
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
