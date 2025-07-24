<script setup>
import { RouterLink, RouterView } from 'vue-router'
import navBar from './components/navBar.vue';
import InicialView from './views/InicialView.vue';
import ProjetosView from './views/ProjetosView.vue';
import Contatos from './views/Contatos.vue';

</script>

<template>
  <header v-if="$route.path === '/'">
    <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> -->

    <div class="max-w-[2500px] sm:flex flex-col wrapper">
      <!-- <nav-bar></nav-bar>  -->
      <inicial-view></inicial-view>
      <projetos-view></projetos-view>
      <contatos></contatos>


    </div>
  </header>
  <header v-else>
    <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> -->

    <div class="max-w-[2500px] sm:flex flex-col wrapper">
      <navBar/>
      <RouterView />
    </div>
  </header>



</template>
