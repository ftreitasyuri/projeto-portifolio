import { createRouter, createWebHistory } from 'vue-router';
import InicialView from '../views/InicialView.vue';
import ProjetosView from '@/views/ProjetosView.vue';
import Contatos from '@/views/Contatos.vue';
import CrmSMTE from '@/views/CrmSMTE.vue';
import RhmgtSMTE from '@/views/RhmgtSMTE.vue';
import ChamadosMTE from '@/views/ChamadosMTE.vue';

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
    },
    {
      path: '/crm-smte',
      name: 'crm-smte',
      component: CrmSMTE,
    },
    {
      path: '/chamados-smte',
      name: 'chamados-smte',
      component: ChamadosMTE,
    },
    {
      path: '/rhmgt-smte',
      name: 'rhmgt-smte',
      component: RhmgtSMTE,
    },
  
  ],
})

export default router
