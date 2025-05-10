import { createRouter, createWebHistory } from 'vue-router';
import { ROUTES } from '@/router/routes';
import HomePage from '@/modules/home/pages/home-page.vue';
import GamePage from '@/modules/game/pages/game-page.vue';
import AboutPage from '@/modules/about/pages/about-page.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      ...ROUTES.HOME,
      component: HomePage,
    },
    {
      ...ROUTES.GAME,
      component: GamePage,
    },
    {
      ...ROUTES.ABOUT,
      component: AboutPage,
    },
  ],
});

export default router;
