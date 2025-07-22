<script setup>
import { RouterLink, RouterView } from 'vue-router'
import navBar from './components/navBar.vue';
import InicialView from './views/InicialView.vue';
import ProjetosView from './views/ProjetosView.vue';
import Contatos from './views/Contatos.vue';
</script>

<template>
  <header>
    <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> -->

    <div class="sm:flex flex-col wrapper">     
      <!-- <nav-bar></nav-bar>  -->
      <inicial-view></inicial-view>
      <projetos-view></projetos-view>
      <contatos></contatos>


    </div>
  </header>


  <!-- <RouterView /> -->
</template>
