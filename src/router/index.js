import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  { path: '/', name: 'Home', component: () => import('../views/Home.vue') },
  { path: '/services', name: 'Services', component: () => import('../views/Services.vue') },
  { path: '/events', name: 'Events', component: () => import('../views/Events.vue') },
  { path: '/gallery', name: 'Gallery', component: () => import('../views/Gallery.vue') },
  { path: '/about', name: 'About', component: () => import('../views/About.vue') },
  { path: '/contact', name: 'Contact', component: () => import('../views/Contact.vue') }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
});

export default router;