import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import AboutView from '@/views/AboutView.vue';
import ManageView from '@/views/ManageView.vue';
import useUserStore from '@/stores/user';

const routes = [
  {
    name: 'home',
    path: '/',
    component: HomeView,
  },
  {
    name: 'about',
    path: '/about',
    component: AboutView,
  },
  {
    name: 'manage',
    // alias: '/manage',
    path: '/manage-music',
    component: ManageView,
    beforeEnter: (to, from, next) => {
      console.log('Manage route guard.');
      next();
    },
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/manage',
    redirect: { name: 'manage' },
  },
  {
    path: '/:catchAll(.*)*',
    redirect: { name: 'home' },
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  linkExactActiveClass: 'text-yellow-500 underline',
});

router.beforeEach((to, from, next) => {
  console.log('Global guard.');
  if (!to.meta.requiresAuth) {
    next();
    return;
  }
  if (useUserStore().userLoggedIn) {
    next();
  } else {
    next({ name: 'home' });
  }

  next();
});

export default router;
