import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router';

import {Welcome, SignUp, Login} from '~/auth';

const routes: RouteRecordRaw[] = [
  {path: '/', name: 'Welcome', component: Welcome},
  {path: '/signup', name: 'SignUp', component: SignUp},
  {path: '/login', name: 'Login', component: Login},
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
