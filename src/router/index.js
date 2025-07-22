import { createRouter, createWebHistory } from 'vue-router';
import InicialView from '../views/InicialView.vue';
import ProjetosView from '@/views/ProjetosView.vue';
import Contatos from '@/views/Contatos.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: InicialView,
    },
    {
      path: '/projetos',
      name: 'projetos',
      component: ProjetosView,
    },
    {
      path: '/contatos',
      name: 'contatos',
      component: Contatos,
    }
  
  ],
})

export default router
