import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router';

import {SignUp, Login} from '~/auth';

const routes: RouteRecordRaw[] = [
  {path: '/auth/login', name: 'Login', component: Login},
  {path: '/auth/signup', name: 'SignUp', component: SignUp},
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
