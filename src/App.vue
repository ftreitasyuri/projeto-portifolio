<script setup>
import { ref, onMounted } from 'vue';
import { RouterLink, RouterView } from 'vue-router'
import navBar from './components/navBar.vue';
import InicialView from './views/InicialView.vue';
import ProjetosView from './views/ProjetosView.vue';
import Contatos from './views/Contatos.vue';
import getWeather from './services/getWeather';

// https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid={ec3e5be3d5fd36e296904389ad345a7c}

// Definindo variáveis reativas
const dadosWeather = ref({});

// Função para obter os dados do clima
// const key = import.meta.env.VITE_API_KEY_OPEN_WEATHER;
const key = 'ec3e5be3d5fd36e296904389ad345a7c';
const cidade = 'salvador';
const dadosClima = async () =>{
  try {
    const req = await getWeather(cidade, key)
    dadosWeather.value = req;
    console.log(dadosWeather.value);
  } catch (error) {
    console.log('Erro ao obter dados do clima:', error);
  }
}
onMounted(() => {
  dadosClima();
});
</script>

<template>
  <header>
    <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> -->

    <div class="max-w-[2500px] sm:flex flex-col wrapper">     
      <!-- <nav-bar></nav-bar>  -->
      <inicial-view></inicial-view>
      <projetos-view></projetos-view>
      <contatos></contatos>


    </div>
  </header>


  <!-- <RouterView /> -->
</template>
