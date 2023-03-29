import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router';

import {SignUp, Login} from '~/auth';
import {Home} from '~/home';

const routes: RouteRecordRaw[] = [
  {path: '/', name: 'Home', component: Home},
  {path: '/auth/login', name: 'Login', component: Login},
  {path: '/auth/signup', name: 'SignUp', component: SignUp},
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
